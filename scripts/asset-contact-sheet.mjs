import fs from "node:fs/promises";
import path from "node:path";
import { imageSize } from "image-size";

const root = process.cwd();
const assetsRoot = path.join(root, "public/maincoon-assets");
const rawRoot = path.join(root, "public/raw-assets");

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const children = await Promise.all(
    entries.map((entry) => {
      const full = path.join(dir, entry.name);
      return entry.isDirectory() ? walk(full) : full;
    })
  );
  return children.flat();
}

const files = (await walk(assetsRoot)).filter((file) => /\.(svg|png|jpe?g|webp|avif)$/i.test(file));
const cards = await Promise.all(
  files.map(async (file) => {
    const rel = `/${path.relative(path.join(root, "public"), file).replaceAll("\\", "/")}`;
    const stat = await fs.stat(file);
    let dims = "SVG";
    try {
      const size = imageSize(file);
      dims = size.width && size.height ? `${size.width} x ${size.height}` : dims;
    } catch {
      dims = path.extname(file).toUpperCase().slice(1) || "asset";
    }
    return `<article><div class="preview"><img src="${rel}" alt=""></div><strong>${rel}</strong><span>${dims} · ${(stat.size / 1024).toFixed(1)} KB</span></article>`;
  })
);

const html = `<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>MaineCoonCity asset contact sheet</title>
  <style>
    body{margin:0;background:#050505;color:#f5f5f5;font-family:Arial,sans-serif}
    main{padding:32px}
    h1{font-family:Georgia,serif;font-weight:400;letter-spacing:.08em}
    .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:16px}
    article{border:1px solid rgba(245,245,245,.14);background:#0b0b0b;padding:12px;border-radius:8px}
    .preview{height:170px;display:grid;place-items:center;background:#121212;overflow:hidden}
    img{max-width:100%;max-height:100%;object-fit:contain}
    strong,span{display:block;margin-top:10px;font-size:12px;word-break:break-all}
    span{color:#a7a7a7}
  </style>
</head>
<body><main><h1>MaineCoonCity assets</h1><p>Source: /raw-assets/maincoon-asset-board.png</p><section class="grid">${cards.join("")}</section></main></body>
</html>`;

await fs.writeFile(path.join(rawRoot, "contact-sheet.html"), html, "utf8");
console.log("Wrote public/raw-assets/contact-sheet.html");
