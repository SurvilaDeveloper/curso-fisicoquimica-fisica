import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "..");
const lessonsRoot = path.join(repoRoot, "src", "content", "lessons");
const astroConfigPath = path.join(repoRoot, "astro.config.mjs");
const pagesRoot = path.join(repoRoot, "src", "pages");

const requiredFields = [
  "title",
  "description",
  "slug",
  "course",
  "module",
  "order",
  "level",
  "cycle",
  "yearsApprox",
  "jurisdictions",
  "prerequisites",
  "skills",
  "hasExercises",
  "hasQuiz",
  "hasExperiment",
  "deepening",
  "status",
];

const allowed = {
  course: new Set([
    "fisicoquimica",
    "fisica",
    "matematicas",
    "experimentos",
    "aplicaciones",
  ]),
  level: new Set(["inicial", "basico", "intermedio", "avanzado-secundario"]),
  cycle: new Set(["basico", "orientado", "ambos"]),
  jurisdiction: new Set(["nacional", "caba", "pba", "otras"]),
  status: new Set(["draft", "review", "complete"]),
};

const filePrefixes = {
  fisicoquimica: "fq",
  fisica: "f",
  matematicas: "m",
  aplicaciones: "a",
  experimentos: "e",
};

const errors = [];
const warnings = [];
const info = [];

function report(kind, file, message) {
  const target = kind === "error" ? errors : warnings;
  target.push({ file, message });
}

function displayPath(file) {
  return path.relative(repoRoot, file).split(path.sep).join("/");
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else if (entry.isFile() && /\.(?:md|mdx)$/i.test(entry.name)) {
      files.push(full);
    }
  }

  return files.sort((a, b) => a.localeCompare(b, "es"));
}

function parseScalar(raw) {
  const value = raw.trim();

  if (value === "") return "";
  if (value === "true") return true;
  if (value === "false") return false;
  if (/^-?\d+(?:\.\d+)?$/.test(value)) return Number(value);

  if (value.startsWith('"') && value.endsWith('"')) {
    try {
      return JSON.parse(value);
    } catch {
      return value.slice(1, -1);
    }
  }

  if (value.startsWith("'") && value.endsWith("'")) {
    return value.slice(1, -1).replace(/''/g, "'");
  }

  if (value.startsWith("[") && value.endsWith("]")) {
    const inner = value.slice(1, -1).trim();
    if (!inner) return [];

    const items = [];
    let current = "";
    let quote = null;

    for (let i = 0; i < inner.length; i += 1) {
      const char = inner[i];
      const prev = inner[i - 1];

      if ((char === '"' || char === "'") && prev !== "\\") {
        if (quote === char) quote = null;
        else if (!quote) quote = char;
        current += char;
        continue;
      }

      if (char === "," && !quote) {
        items.push(parseScalar(current));
        current = "";
        continue;
      }

      current += char;
    }

    items.push(parseScalar(current));
    return items;
  }

  return value;
}

function parseFrontmatter(source, file) {
  const normalized = source.replace(/\r\n?/g, "\n");
  const match = normalized.match(/^---\s*\n([\s\S]*?)\n---(?:\s*\n|$)/);

  if (!match) {
    report("error", file, "No se encontró un bloque de frontmatter válido entre delimitadores ---.");
    return { data: {}, body: normalized };
  }

  const lines = match[1].split("\n");
  const data = {};

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    if (!line.trim() || line.trimStart().startsWith("#")) continue;

    const field = line.match(/^([A-Za-z][A-Za-z0-9]*):\s*(.*)$/);
    if (!field) continue;

    const [, key, rawValue] = field;

    if (rawValue.trim() !== "") {
      data[key] = parseScalar(rawValue);
      continue;
    }

    const items = [];
    let cursor = i + 1;

    while (cursor < lines.length) {
      const item = lines[cursor].match(/^\s+-\s+(.+)$/);
      if (!item) break;
      items.push(parseScalar(item[1]));
      cursor += 1;
    }

    if (items.length > 0) {
      data[key] = items;
      i = cursor - 1;
    } else {
      data[key] = "";
    }
  }

  return { data, body: normalized.slice(match[0].length) };
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function expectStringArray(value, file, field) {
  if (!Array.isArray(value)) {
    report("error", file, `${field} debe ser un arreglo.`);
    return [];
  }

  for (const item of value) {
    if (!isNonEmptyString(item)) {
      report("error", file, `${field} contiene un valor que no es un texto válido.`);
    }
  }

  const duplicates = value.filter((item, index) => value.indexOf(item) !== index);
  if (duplicates.length > 0) {
    report(
      "error",
      file,
      `${field} contiene valores repetidos: ${[...new Set(duplicates)].join(", ")}.`,
    );
  }

  return value;
}

function validateFrontmatter(lesson) {
  const { file, data } = lesson;

  for (const field of requiredFields) {
    if (!(field in data)) {
      report("error", file, `Falta el campo obligatorio ${field}.`);
    }
  }

  for (const field of ["title", "description", "slug", "course", "module", "level", "cycle", "status"]) {
    if (field in data && !isNonEmptyString(data[field])) {
      report("error", file, `${field} debe ser un texto no vacío.`);
    }
  }

  if (isNonEmptyString(data.slug) && !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(data.slug)) {
    report("error", file, `Slug inválido: ${data.slug}.`);
  }

  for (const field of ["course", "level", "cycle", "status"]) {
    if (isNonEmptyString(data[field]) && !allowed[field].has(data[field])) {
      report("error", file, `Valor no permitido en ${field}: ${data[field]}.`);
    }
  }

  if (!Number.isInteger(data.order) || data.order <= 0) {
    report("error", file, "order debe ser un entero positivo.");
  }

  if (!Array.isArray(data.yearsApprox)) {
    report("error", file, "yearsApprox debe ser un arreglo.");
  } else {
    for (const year of data.yearsApprox) {
      if (!Number.isInteger(year) || year < 1 || year > 7) {
        report("error", file, `Año aproximado fuera de rango: ${year}.`);
      }
    }
  }

  const jurisdictions = expectStringArray(data.jurisdictions, file, "jurisdictions");
  for (const jurisdiction of jurisdictions) {
    if (!allowed.jurisdiction.has(jurisdiction)) {
      report("error", file, `Jurisdicción no permitida: ${jurisdiction}.`);
    }
  }

  lesson.prerequisites = expectStringArray(data.prerequisites, file, "prerequisites");
  expectStringArray(data.skills, file, "skills");

  for (const field of ["hasExercises", "hasQuiz", "hasExperiment", "deepening"]) {
    if (typeof data[field] !== "boolean") {
      report("error", file, `${field} debe ser true o false.`);
    }
  }

  const relative = path.relative(lessonsRoot, file).split(path.sep);
  const directoryCourse = relative[0];
  if (isNonEmptyString(data.course) && directoryCourse !== data.course) {
    report(
      "error",
      file,
      `course=${data.course} no coincide con la carpeta ${directoryCourse}.`,
    );
  }

  if (isNonEmptyString(data.course) && Number.isInteger(data.order)) {
    const prefix = filePrefixes[data.course];
    if (prefix) {
      const expected = `${prefix}-${String(data.order).padStart(2, "0")}-`;
      const basename = path.basename(file).toLowerCase();
      if (!basename.startsWith(expected)) {
        report(
          "error",
          file,
          `El nombre de archivo debería comenzar con ${expected} para coincidir con course/order.`,
        );
      }
    }
  }
}

function removeCodeForNotationChecks(body) {
  return body
    .replace(/```[^\n]*\n[\s\S]*?```/g, "")
    .replace(/`[^`\n]*`/g, "")
    .replace(/\[[^\]]*\]\([^)]*\)/g, "");
}

function validateNotation(lesson) {
  const { file, body } = lesson;

  const fencedBlocks = body.match(/```[^\n]*\n[\s\S]*?```/g) ?? [];
  for (const block of fencedBlocks) {
    if (/<\/?(?:sub|sup)>/i.test(block)) {
      report(
        "error",
        file,
        "Hay <sub>/<sup> dentro de un bloque de triple backtick; allí el HTML se muestra como texto literal.",
      );
      break;
    }
  }

  const withoutFences = body.replace(/```[^\n]*\n[\s\S]*?```/g, "");
  if (/`[^`\n]*<\/?(?:sub|sup)>[^`\n]*`/i.test(withoutFences)) {
    report(
      "error",
      file,
      "Hay <sub>/<sup> dentro de código inline; allí el HTML se muestra como texto literal.",
    );
  }

  const prose = removeCodeForNotationChecks(body);
  const underscoreMath = prose.match(
    /\b[A-Za-zÁÉÍÓÚÜÑáéíóúüñΑ-Ωα-ωΣΔΦμρτθεγλπω]+_[A-Za-z0-9ÁÉÍÓÚÜÑáéíóúüñ]+\b/g,
  );

  if (underscoreMath?.length) {
    report(
      "error",
      file,
      `Notación matemática antigua con underscore: ${[...new Set(underscoreMath)].slice(0, 5).join(", ")}.`,
    );
  }
}

function normalizeRoute(value) {
  if (!value) return "/";
  const withoutQuery = value.split(/[?#]/, 1)[0] || "/";
  const collapsed = withoutQuery.replace(/\/{2,}/g, "/");
  if (collapsed === "/") return "/";
  return collapsed.replace(/\/$/, "");
}

async function readConfiguredBase() {
  try {
    const source = await fs.readFile(astroConfigPath, "utf8");
    const variable = source.match(/const\s+githubPagesBase\s*=\s*["']([^"']+)["']/);
    if (variable) return normalizeRoute(variable[1]);

    const literal = source.match(/\bbase\s*:\s*["']([^"']+)["']/);
    if (literal) return normalizeRoute(literal[1]);
  } catch {
    // Astro will report config problems during its own build.
  }

  return "/";
}

function extractMarkdownLinks(body) {
  const links = [];
  const withoutFences = body.replace(/```[^\n]*\n[\s\S]*?```/g, "");
  const withoutInlineCode = withoutFences.replace(/`[^`\n]*`/g, "");
  const pattern = /(?<!!)\[[^\]]*\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g;
  let match;

  while ((match = pattern.exec(withoutInlineCode))) {
    links.push(match[1]);
  }

  return links;
}

function validatePrerequisiteGraph(lessons, bySlug) {
  for (const lesson of lessons) {
    for (const prerequisite of lesson.prerequisites ?? []) {
      if (prerequisite === lesson.data.slug) {
        report("error", lesson.file, "Una lección no puede ser prerrequisito de sí misma.");
      } else if (!bySlug.has(prerequisite)) {
        report(
          "error",
          lesson.file,
          `Prerrequisito inexistente: ${prerequisite}.`,
        );
      }
    }
  }

  const state = new Map();
  const stack = [];
  const reportedCycles = new Set();

  function visit(slug) {
    const currentState = state.get(slug) ?? 0;
    if (currentState === 2) return;

    if (currentState === 1) {
      const start = stack.indexOf(slug);
      const cycle = [...stack.slice(start), slug];
      const signature = [...new Set(cycle)].sort().join("|");
      if (!reportedCycles.has(signature)) {
        reportedCycles.add(signature);
        const lesson = bySlug.get(slug);
        report(
          "error",
          lesson.file,
          `Ciclo de prerrequisitos detectado: ${cycle.join(" → ")}.`,
        );
      }
      return;
    }

    state.set(slug, 1);
    stack.push(slug);

    const lesson = bySlug.get(slug);
    for (const prerequisite of lesson?.prerequisites ?? []) {
      if (bySlug.has(prerequisite)) visit(prerequisite);
    }

    stack.pop();
    state.set(slug, 2);
  }

  for (const slug of bySlug.keys()) visit(slug);
}

async function validateRouteInfrastructure(lessons) {
  const populatedCourses = [...new Set(
    lessons
      .map((lesson) => lesson.data.course)
      .filter((course) => isNonEmptyString(course)),
  )];

  for (const course of populatedCourses) {
    const expectedPages = [
      path.join(pagesRoot, course, "index.astro"),
      path.join(pagesRoot, course, "[...slug].astro"),
    ];

    for (const page of expectedPages) {
      try {
        await fs.access(page);
      } catch {
        const lesson = lessons.find((item) => item.data.course === course);
        report(
          "error",
          lesson.file,
          `La colección ${course} tiene contenido pero falta la ruta ${displayPath(page)}.`,
        );
      }
    }
  }

  for (const route of ["index.astro", "ruta.astro", "temas.astro", "tabla.astro"]) {
    const page = path.join(pagesRoot, route);
    try {
      await fs.access(page);
    } catch {
      errors.push({ file: page, message: `Falta la página principal ${displayPath(page)}.` });
    }
  }
}

function validateOrdering(lessons) {
  const byCourse = new Map();

  for (const lesson of lessons) {
    if (!isNonEmptyString(lesson.data.course) || !Number.isInteger(lesson.data.order)) continue;
    if (!byCourse.has(lesson.data.course)) byCourse.set(lesson.data.course, []);
    byCourse.get(lesson.data.course).push(lesson);
  }

  for (const [course, courseLessons] of byCourse) {
    const byOrder = new Map();

    for (const lesson of courseLessons) {
      const existing = byOrder.get(lesson.data.order);
      if (existing) {
        report(
          "error",
          lesson.file,
          `order=${lesson.data.order} está repetido en ${course}; también aparece en ${displayPath(existing.file)}.`,
        );
      } else {
        byOrder.set(lesson.data.order, lesson);
      }
    }

    const orders = [...byOrder.keys()].sort((a, b) => a - b);
    if (!orders.length) continue;

    const expected = Array.from({ length: orders.at(-1) }, (_, index) => index + 1);
    const missing = expected.filter((order) => !byOrder.has(order));
    if (missing.length) {
      report(
        "error",
        courseLessons[0].file,
        `La numeración de ${course} tiene huecos: faltan ${missing.join(", ")}.`,
      );
    }
  }
}

async function main() {
  const files = await walk(lessonsRoot);
  const lessons = [];

  for (const file of files) {
    const source = await fs.readFile(file, "utf8");
    const parsed = parseFrontmatter(source, file);
    const lesson = { file, ...parsed, prerequisites: [] };
    validateFrontmatter(lesson);
    validateNotation(lesson);
    lessons.push(lesson);
  }

  const bySlug = new Map();
  for (const lesson of lessons) {
    const slug = lesson.data.slug;
    if (!isNonEmptyString(slug)) continue;

    if (bySlug.has(slug)) {
      report(
        "error",
        lesson.file,
        `Slug duplicado: ${slug}; también aparece en ${displayPath(bySlug.get(slug).file)}.`,
      );
    } else {
      bySlug.set(slug, lesson);
    }
  }

  validateOrdering(lessons);
  validatePrerequisiteGraph(lessons, bySlug);
  await validateRouteInfrastructure(lessons);

  const validRoutes = new Set(["/", "/ruta", "/temas", "/tabla"]);
  for (const course of allowed.course) validRoutes.add(`/${course}`);
  for (const lesson of lessons) {
    if (isNonEmptyString(lesson.data.course) && isNonEmptyString(lesson.data.slug)) {
      validRoutes.add(`/${lesson.data.course}/${lesson.data.slug}`);
    }
  }

  const base = await readConfiguredBase();
  let hardcodedBaseLinks = 0;

  for (const lesson of lessons) {
    for (const href of extractMarkdownLinks(lesson.body)) {
      if (/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(href)) continue;

      if (!href.startsWith("/")) {
        warnings.push({
          file: lesson.file,
          message: `Enlace Markdown relativo no validado automáticamente: ${href}.`,
        });
        continue;
      }

      let route = href;

      if (base !== "/" && (route === base || route.startsWith(`${base}/`))) {
        hardcodedBaseLinks += 1;
        route = route.slice(base.length) || "/";
        if (!route.startsWith("/")) route = `/${route}`;
      } else if (base !== "/") {
        report(
          "error",
          lesson.file,
          `Enlace interno absoluto sin el base de GitHub Pages (${base}): ${href}.`,
        );
        continue;
      }

      route = normalizeRoute(route);
      if (!validRoutes.has(route)) {
        report("error", lesson.file, `Enlace interno a una ruta inexistente: ${href}.`);
      }
    }
  }

  if (hardcodedBaseLinks > 0) {
    info.push(
      `${hardcodedBaseLinks} enlace${hardcodedBaseLinks === 1 ? "" : "s"} Markdown usa${hardcodedBaseLinks === 1 ? "" : "n"} el base configurado ${base}; se validaron sus destinos.`,
    );
  }

  const counts = new Map();
  for (const lesson of lessons) {
    const course = lesson.data.course ?? "sin-course";
    counts.set(course, (counts.get(course) ?? 0) + 1);
  }

  console.log("\nValidación de contenido\n");
  console.log(`✓ ${lessons.length} lecciones analizadas.`);
  console.log(
    `✓ Colecciones: ${[...counts.entries()]
      .sort(([a], [b]) => a.localeCompare(b, "es"))
      .map(([course, count]) => `${course}=${count}`)
      .join(" · ")}`,
  );
  console.log(`✓ ${bySlug.size} slugs únicos registrados.`);

  for (const message of info) console.log(`ℹ ${message}`);

  if (warnings.length) {
    console.log(`\nAdvertencias (${warnings.length}):`);
    for (const warning of warnings) {
      console.log(`  - ${displayPath(warning.file)}: ${warning.message}`);
    }
  }

  if (errors.length) {
    console.error(`\nErrores (${errors.length}):`);
    for (const error of errors) {
      console.error(`  - ${displayPath(error.file)}: ${error.message}`);
    }
    console.error("\n✗ La validación falló.\n");
    process.exitCode = 1;
    return;
  }

  console.log("\n✓ Validación completada sin errores.\n");
}

main().catch((error) => {
  console.error("\nError inesperado durante la validación:");
  console.error(error);
  process.exitCode = 1;
});
