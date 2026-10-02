// @ts-check
import { defineConfig } from "astro/config";

const githubPagesBase = "/curso-fisicoquimica-fisica";

function remarkPrefixBaseLinks() {
  return (tree) => {
    const visit = (node) => {
      if (!node || typeof node !== "object") {
        return;
      }

      if (
        (node.type === "link" || node.type === "image") &&
        typeof node.url === "string" &&
        node.url.startsWith("/") &&
        !node.url.startsWith("//") &&
        node.url !== githubPagesBase &&
        !node.url.startsWith(`${githubPagesBase}/`)
      ) {
        node.url = `${githubPagesBase}${node.url}`;
      }

      if (Array.isArray(node.children)) {
        node.children.forEach(visit);
      }
    };

    visit(tree);
  };
}

// https://astro.build/config
export default defineConfig({
  site: "https://surviladeveloper.github.io",
  base: `${githubPagesBase}/`,
  markdown: {
    remarkPlugins: [remarkPrefixBaseLinks],
  },
});
