import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const folders = [
  "public/images/parallax",
  "public/images/hero",
  "public/images/kittens",
  "public/images/backgrounds",
];

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else files.push(full);
  }
  return files;
}

for (const folder of folders) {
  try {
    const files = await walk(folder);
    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;

      const out = file.replace(ext, ".webp");
      await sharp(file)
        .resize({ width: folder.includes("kittens") ? 1200 : 2600, withoutEnlargement: true })
        .webp({ quality: 84 })
        .toFile(out);

      console.log(`Optimized: ${out}`);
    }
  } catch {
    console.warn(`Skip missing or unreadable asset folder: ${folder}`);
  }
}
