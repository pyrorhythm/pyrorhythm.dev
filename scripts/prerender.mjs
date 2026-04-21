import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = resolve(root, "dist");

const vite = await createServer({
	root,
	server: { middlewareMode: true },
	appType: "custom",
});

try {
	const { PACKAGES, renderPackageHead } = await vite.ssrLoadModule(
		"/src/entry-server.tsx",
	);
	const template = await readFile(resolve(distDir, "index.html"), "utf8");

	for (const pkg of Object.values(PACKAGES)) {
		const head = await renderPackageHead(pkg);
		const html = template.replace("</head>", `${head}</head>`);
		const outDir = resolve(distDir, pkg.name);
		await mkdir(outDir, { recursive: true });
		await writeFile(resolve(outDir, "index.html"), html);
		console.log(`Prerendered /${pkg.name}/index.html`);
	}
} finally {
	await vite.close();
}
