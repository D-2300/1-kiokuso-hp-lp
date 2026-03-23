import { build } from "vite";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.resolve(root, "dist");

const routes = [
  "/",
  "/lp",
  "/about",
  "/studio",
  "/studio/about",
  "/studio/works",
  "/studio/pricing",
  "/privacy",
  "/koumuten",
  "/reform",
  "/fudousan",
];

async function buildSSR() {
  await build({
    root,
    build: {
      ssr: "src/entry-server.tsx",
      outDir: "dist/server",
      rollupOptions: {
        output: {
          format: "esm",
        },
      },
    },
    ssr: {
      noExternal: true,
    },
  });
}

async function prerenderRoutes() {
  const serverEntryPath = path.resolve(distDir, "server/entry-server.js");
  const { render } = await import(serverEntryPath);

  const templatePath = path.resolve(distDir, "index.html");
  const template = fs.readFileSync(templatePath, "utf-8");

  for (const route of routes) {
    const appHtml = render(route);
    const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    let outPath;
    if (route === "/") {
      outPath = path.resolve(distDir, "index.html");
    } else {
      const routeDir = path.resolve(distDir, route.slice(1));
      fs.mkdirSync(routeDir, { recursive: true });
      outPath = path.resolve(routeDir, "index.html");
    }

    fs.writeFileSync(outPath, html, "utf-8");
    console.log(`Prerendered: ${route} → ${outPath.replace(root, "")}`);
  }

  fs.rmSync(path.resolve(distDir, "server"), { recursive: true, force: true });
}

(async () => {
  try {
    console.log("Building SSR bundle...");
    await buildSSR();
    console.log("Prerendering routes...");
    await prerenderRoutes();
    console.log("Prerendering complete.");
  } catch (err) {
    console.error("Prerender failed:", err);
    process.exit(1);
  }
})();
