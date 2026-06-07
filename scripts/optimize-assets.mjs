import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { optimize } from "svgo";

const root = process.cwd();
const assetsRoot = path.join(root, "public/maincoon-assets");

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const full = path.join(dir, entry.name);
      return entry.isDirectory() ? walk(full) : full;
    })
  );
  return files.flat();
}

const files = await walk(assetsRoot);

await Promise.all(
  files
    .filter((file) => file.endsWith(".svg"))
    .map(async (file) => {
      const source = await fs.readFile(file, "utf8");
      const result = optimize(source, {
        multipass: true,
        plugins: ["preset-default"]
      });
      await fs.writeFile(file, result.data, "utf8");
    })
);

for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;

  const image = sharp(file);
  const meta = await image.metadata();
  const isCard = file.includes(`${path.sep}cards${path.sep}`);
  const isHeroCat = file.endsWith(`hero-cat.jpg`);
  const maxWidth = isCard ? 1000 : isHeroCat ? 1600 : 2200;

  if ((meta.width ?? 0) > maxWidth || ext === ".jpg" || ext === ".jpeg") {
    const pipeline = sharp(file).resize({ width: maxWidth, withoutEnlargement: true });
    if (ext === ".png") {
      await pipeline.png({ quality: 86, compressionLevel: 9 }).toFile(`${file}.tmp`);
    } else {
      await pipeline.jpeg({ quality: 82, mozjpeg: true }).toFile(`${file}.tmp`);
    }
    await fs.rename(`${file}.tmp`, file);
  }
}

console.log("Optimized public/maincoon-assets");
