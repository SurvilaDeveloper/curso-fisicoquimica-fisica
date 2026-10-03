# Física & Físico-Química — Curso secundario

Sitio educativo de **Física, Físico-Química, Matemáticas para Física y Aplicaciones** orientado al nivel secundario, con foco en comprensión conceptual, resolución de problemas y conexión entre los modelos físicos y situaciones reales.

**Demo:** https://surviladeveloper.github.io/curso-fisicoquimica-fisica/  
**Autor / desarrollador:** Gabriel Survila  
**GitHub:** https://github.com/SurvilaDeveloper  
**Contacto profesional:** surviladeveloper@gmail.com  
**Teléfono:** +54 9 11 5845 1937

---

## Sobre el proyecto

El proyecto nació con una doble intención:

1. construir una guía de estudio amplia y ordenada para contenidos de Física y Físico-Química de nivel secundario;
2. convertir esa guía en un proyecto web real, mantenible y publicable, que también funcione como pieza de portfolio de desarrollo.

El sitio no parte de una colección de fórmulas. La secuencia editorial prioriza:

> **Fenómeno → pregunta → concepto → modelo → representación → matemática → problema → interpretación → aplicación → límites del modelo**

El objetivo es que la matemática aparezca como una herramienta para expresar relaciones físicas, no como un punto de partida aislado.

---

## Contenido

Actualmente el sitio reúne **93 lecciones** distribuidas en cuatro colecciones:

| Colección | Lecciones | Alcance |
| --- | ---: | --- |
| Físico-Química | 22 | materia, partículas, estructura atómica, transformaciones, soluciones, energía, electricidad, ondas y ambiente |
| Física | 33 | mecánica, fluidos, termodinámica, oscilaciones, ondas, óptica, electromagnetismo, relatividad, física cuántica, nuclear y cosmología |
| Matemáticas para Física | 18 | operaciones, proporciones, funciones, gráficos, trigonometría, vectores, logaritmos y exponenciales |
| Aplicaciones | 20 | energía, seguridad, deporte, tránsito, acústica, telecomunicaciones, medicina, ambiente, astronomía y tecnología |

El contenido puede recorrerse de distintas maneras:

- **Ruta:** progresión pedagógica sugerida.
- **Temas:** acceso por colección y módulo.
- **Tabla:** vista compacta de todas las lecciones.
- **Prerrequisitos:** cada lección declara qué conviene conocer antes.
- **Aplicaciones:** permiten entrar al contenido desde problemas cotidianos o tecnológicos.

La idea central es:

> **La Ruta recomienda. Los prerrequisitos deciden.**

---

## Stack técnico

- **Astro 7.3.5**
- **Node.js >= 22.12**
- **Astro Content Collections**
- **Zod**
- **Markdown**
- **TypeScript / Astro components**
- **CSS responsive**
- **Tema claro / oscuro**
- **Git**
- **GitHub**
- **GitHub Actions**
- **GitHub Pages**
- **Validador propio en Node.js**
- **ChatGPT / OpenAI** como herramienta de desarrollo asistido

---

## Arquitectura

El contenido no está escrito directamente dentro de las páginas. Cada lección vive como un archivo Markdown con frontmatter estructurado.

```text
Temario maestro
      ↓
Lecciones Markdown + frontmatter
      ↓
Astro Content Collections
      ↓
Validación con Zod + validador propio
      ↓
Generación estática con Astro
      ↓
GitHub Actions
      ↓
GitHub Pages
```

El sitio también resuelve el despliegue bajo el subdirectorio de GitHub Pages mediante una utilidad central de rutas compatible con el `base` configurado en Astro.

---

## Modelado de contenido

Cada lección declara datos como:

```text
title
description
slug
course
module
order
level
cycle
yearsApprox
jurisdictions
prerequisites
skills
hasExercises
hasQuiz
hasExperiment
deepening
status
```

Esto permite que navegación, listados y controles dependan de datos estructurados en lugar de estar duplicados manualmente en distintas páginas.

---

## Validación automática

El proyecto incluye un validador propio:

```bash
npm run validate
```

Entre otras cosas controla:

- frontmatter obligatorio;
- slugs únicos;
- numeración y orden de las colecciones;
- prerrequisitos existentes;
- ciclos de prerrequisitos;
- coherencia entre curso, carpeta y nombre de archivo;
- rutas requeridas;
- enlaces internos Markdown;
- problemas de notación;
- HTML que quedaría renderizado como texto dentro de bloques de código.

El build ejecuta primero esa validación:

```bash
npm run build
```

El objetivo es evitar que un error estructural llegue silenciosamente a producción.

---

## CI/CD y publicación

Cada push a `main` dispara el workflow de GitHub Actions.

```text
push a main
→ instalación
→ validación
→ Astro build
→ deploy
→ GitHub Pages
```

El sitio público queda así vinculado al estado del proyecto que consiguió pasar correctamente las verificaciones y el build.

---

## Desarrollo asistido con IA

El proyecto fue desarrollado por **Gabriel Survila** con asistencia de **ChatGPT de OpenAI**.

ChatGPT se utilizó en tareas como:

- planificación;
- estructuración del temario;
- generación y revisión de contenido;
- programación;
- depuración;
- auditorías;
- revisión de consistencia;
- propuestas de UX;
- documentación.

El proceso de integración se mantuvo deliberadamente controlado:

```text
definir objetivo
→ preparar patch
→ probar localmente
→ revisar
→ commit
→ push
→ nueva auditoría
```

Los cambios no se aplican directamente al repositorio desde ChatGPT: se revisan y prueban localmente antes de integrarse.

Durante la etapa documentada en **octubre de 2026**, una de las configuraciones utilizadas para el trabajo asistido es **GPT-5.6 Sol**. La configuración disponible de ChatGPT puede variar entre etapas del desarrollo.

---

## Qué demuestra este proyecto

Además del contenido educativo, el repositorio muestra trabajo práctico en:

- arquitectura de información;
- modelado de contenido;
- generación estática;
- Astro Content Collections;
- validación con esquemas;
- scripts personalizados de validación;
- diseño responsive;
- dark mode;
- navegación generada desde datos;
- rutas compatibles con subdirectorios;
- debugging de build;
- CI/CD;
- GitHub Actions;
- despliegue en GitHub Pages;
- refactorización incremental;
- control de regresiones;
- documentación técnica;
- trabajo asistido con IA bajo revisión humana.

---

## Estructura principal

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml
├── docs/
│   └── Temario_Maestro_...
├── public/
├── scripts/
│   └── validate-content.mjs
├── src/
│   ├── components/
│   ├── content/
│   │   └── lessons/
│   │       ├── aplicaciones/
│   │       ├── fisica/
│   │       ├── fisicoquimica/
│   │       └── matematicas/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   └── utils/
├── astro.config.mjs
├── package.json
└── README.md
```

---

## Ejecutar localmente

Requisitos:

- Node.js 22.12 o superior
- npm

Instalación:

```bash
npm install
```

Validación:

```bash
npm run validate
```

Servidor de desarrollo:

```bash
npm run dev
```

Build de producción:

```bash
npm run build
```

Preview:

```bash
npm run preview
```

---

## Estado

El núcleo de contenidos se encuentra completo:

- FQ-01 → FQ-22
- F-01 → F-33
- M-01 → M-18
- A-01 → A-20

La etapa actual está orientada a mejorar experiencia de uso, navegación, documentación y controles de calidad.

---

## Contacto profesional

**Gabriel Survila**

- Email: **surviladeveloper@gmail.com**
- Teléfono: **+54 9 11 5845 1937**
- GitHub: https://github.com/SurvilaDeveloper
- Demo: https://surviladeveloper.github.io/curso-fisicoquimica-fisica/

---

## English summary

**Physics & Physical Chemistry — Secondary School** is a static educational website built with **Astro 7**, structured Markdown content, Astro Content Collections, Zod schema validation, a custom Node.js validator, GitHub Actions and GitHub Pages.

The project currently contains **93 lessons** across Physics, Physical Chemistry, Mathematics for Physics and real-world Applications.

It was created and developed by **Gabriel Survila** as both an educational resource and a software-development portfolio project, using ChatGPT/OpenAI as an AI-assisted development tool.

**Professional contact:** surviladeveloper@gmail.com  
**Phone:** +54 9 11 5845 1937
