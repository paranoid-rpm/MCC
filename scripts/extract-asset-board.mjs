import fs from "node:fs/promises";
import path from "node:path";
import { Buffer } from "node:buffer";
import sharp from "sharp";

const root = process.cwd();
const board = path.join(root, "public/raw-assets/maincoon-asset-board.png");
const out = path.join(root, "public/maincoon-assets");

const iconStroke = `fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"`;

const catHead = `
  <path d="M35 82c-9-12-14-25-10-40 5-18 20-25 24-38 2 13 0 22-5 31 9-8 15-19 18-32 5 15 2 30-7 42 10-7 18-17 24-31 2 17-1 34-13 46"/>
  <path d="M31 69c6-11 16-19 29-20 14-1 27 6 35 18"/>
  <path d="M52 58c-6 6-9 13-8 21 2 14 15 24 33 27"/>
  <path d="M72 68c6-1 12 1 16 6"/>
  <path d="M74 79c8 1 15 4 21 10"/>
  <path d="M60 85c-7 5-15 7-25 7"/>
  <path d="M62 93c-8 7-17 11-30 12"/>
  <path d="M47 52c-7-2-14 1-20 7"/>
  <path d="M52 44c-9 0-17 4-25 12"/>
`;

const svg = (body, viewBox = "0 0 24 24") =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" ${iconStroke}>${body}</svg>\n`;

const brandSvgs = {
  "logo-icon.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 112" ${iconStroke}>${catHead}</svg>\n`,
  "logo-mark.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 112" ${iconStroke}><circle cx="56" cy="56" r="48"/>${catHead}</svg>\n`,
  "logo-wordmark.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 116" fill="currentColor"><text x="0" y="66" font-family="Georgia, 'Times New Roman', serif" font-size="62" letter-spacing="8">MAINCOON</text><text x="156" y="102" font-family="Georgia, 'Times New Roman', serif" font-size="24" letter-spacing="12">CITY</text></svg>\n`,
  "logo-maincoon-city.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 150" color="#F5F5F5"><g ${iconStroke.replace("currentColor", "#F5F5F5")} transform="translate(0 12)">${catHead}</g><path d="M150 20v104" stroke="#A7A7A7" stroke-width="1.4"/><g fill="#F5F5F5"><text x="184" y="78" font-family="Georgia, 'Times New Roman', serif" font-size="68" letter-spacing="9">MAINCOON</text><text x="326" y="124" font-family="Georgia, 'Times New Roman', serif" font-size="27" letter-spacing="14">CITY</text></g></svg>\n`,
  "favicon.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="512" height="512" rx="72" fill="#050505"/><g transform="translate(76 72) scale(3.2)" ${iconStroke.replace("currentColor", "#F5F5F5")}>${catHead}</g></svg>\n`
};

const icons = {
  "search.svg": svg(`<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/><path d="M9 8.5h2.5v2.5H14"/><path d="M9 8.5c1.2 2.8 3.1 4.2 5 4.2"/>`),
  "city.svg": svg(`<path d="M12 21s7-5.3 7-12a7 7 0 0 0-14 0c0 6.7 7 12 7 12Z"/><circle cx="12" cy="9" r="2.4"/>`),
  "radius.svg": svg(`<circle cx="12" cy="12" r="7"/><path d="M12 12h5"/><path d="M12 12 8 8"/><path d="M5 19 3 21"/><path d="M19 5 21 3"/>`),
  "status.svg": svg(`<path d="M12 3 20 6v5c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6l8-3Z"/><path d="m8.5 12 2.4 2.4 5-5"/>`),
  "documents.svg": svg(`<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5"/><path d="M9 13h6"/><path d="M9 17h4"/>`),
  "phone.svg": svg(`<path d="M8 4 5.8 6.2c-.8.8-.9 2.1-.2 3 2 3.1 5.3 6.4 8.4 8.4.9.7 2.2.6 3-.2L20 15l-4-3-2.1 2.1c-1.8-.9-3.1-2.2-4-4L12 8 8 4Z"/>`),
  "verified.svg": svg(`<path d="M12 3 20 6v5c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6l8-3Z"/><path d="m8.5 12 2.4 2.4 5-5"/>`),
  "breeder.svg": svg(`<circle cx="12" cy="7" r="4"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/>`),
  "login.svg": svg(`<rect x="7" y="10" width="10" height="9" rx="2"/><path d="M9 10V7a3 3 0 0 1 6 0v3"/><path d="M12 14v2"/>`),
  "menu.svg": svg(`<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/>`),
  "close.svg": svg(`<path d="M6 6l12 12"/><path d="M18 6 6 18"/>`),
  "arrow.svg": svg(`<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>`),
  "color.svg": svg(`<path d="M12 3a9 9 0 1 0 0 18h1.2a2.1 2.1 0 0 0 1.2-3.8 1.6 1.6 0 0 1 .9-2.9H17a6 6 0 0 0 0-12h-5Z"/><circle cx="8.2" cy="10" r=".7"/><circle cx="11" cy="7.4" r=".7"/><circle cx="14.4" cy="8.2" r=".7"/>`),
  "age.svg": svg(`<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M8 3v4"/><path d="M16 3v4"/><path d="M4 10h16"/><path d="M8 14h3"/><path d="M8 17h6"/>`),
  "gender.svg": svg(`<circle cx="10" cy="14" r="5"/><path d="M14 10 20 4"/><path d="M15 4h5v5"/>`)
};

async function crop(output, extract, options = {}) {
  const img = sharp(board).extract(extract);
  if (options.flatten) img.flatten({ background: options.flatten });
  await img.resize(options.resize).toFile(path.join(out, output));
}

await fs.mkdir(path.join(out, "hero"), { recursive: true });
await fs.mkdir(path.join(out, "cards"), { recursive: true });
await fs.mkdir(path.join(out, "icons"), { recursive: true });

for (const [name, content] of Object.entries(brandSvgs)) {
  await fs.writeFile(path.join(out, name), content, "utf8");
}
for (const [name, content] of Object.entries(icons)) {
  await fs.writeFile(path.join(out, "icons", name), content, "utf8");
}

await crop("hero/forest-bg.jpg", { left: 36, top: 502, width: 510, height: 246 }, { resize: { width: 1800 }, flatten: "#050505" });
await crop("hero/hero-cat.jpg", { left: 238, top: 514, width: 230, height: 214 }, { resize: { width: 1200 }, flatten: "#050505" });
await crop("hero/hero-cat-card.jpg", { left: 590, top: 505, width: 146, height: 242 }, { resize: { width: 900 }, flatten: "#050505" });
await crop("cards/card-cat-1.jpg", { left: 590, top: 505, width: 146, height: 242 }, { resize: { width: 900 }, flatten: "#050505" });
await crop("cards/card-cat-2.jpg", { left: 750, top: 505, width: 146, height: 242 }, { resize: { width: 900 }, flatten: "#050505" });
await crop("cards/card-cat-3.jpg", { left: 910, top: 505, width: 146, height: 242 }, { resize: { width: 900 }, flatten: "#050505" });
await crop("hero/noise.png", { left: 1101, top: 506, width: 382, height: 238 }, { resize: { width: 512 } });

await sharp(path.join(root, "public/images/parallax/forest-mid.webp")).resize({ width: 1800, withoutEnlargement: true }).jpeg({ quality: 82 }).toFile(path.join(out, "hero/forest-mid.jpg"));
await sharp(path.join(root, "public/images/parallax/fog-light-rays.webp")).resize({ width: 1600, withoutEnlargement: true }).png({ quality: 86 }).toFile(path.join(out, "hero/fog.png"));
await sharp(path.join(root, "public/images/parallax/leaves-front-cutout.png")).resize({ width: 900, withoutEnlargement: true }).png({ quality: 88 }).toFile(path.join(out, "hero/forest-foreground-left.png"));
await sharp(path.join(root, "public/images/parallax/branches-front-cutout.png")).resize({ width: 1100, withoutEnlargement: true }).png({ quality: 88 }).toFile(path.join(out, "hero/forest-foreground-right.png"));
await sharp({
  create: { width: 900, height: 900, channels: 4, background: { r: 245, g: 245, b: 245, alpha: 0 } }
})
  .composite([{ input: Buffer.from(`<svg width="900" height="900"><defs><radialGradient id="g"><stop offset="0" stop-color="#F5F5F5" stop-opacity=".55"/><stop offset=".38" stop-color="#A7A7A7" stop-opacity=".18"/><stop offset="1" stop-color="#050505" stop-opacity="0"/></radialGradient></defs><rect width="900" height="900" fill="url(#g)"/></svg>`), blend: "over" }])
  .png()
  .toFile(path.join(out, "hero/light-glow.png"));

await fs.writeFile(
  path.join(root, "public/raw-assets/credits.json"),
  JSON.stringify(
    {
      source: "/raw-assets/maincoon-asset-board.png",
      generatedAt: new Date().toISOString(),
      note: "Logo and icons recreated as stroke-only SVG from the asset-board style. Raster hero/card/noise crops come from the asset-board; deep forest and foreground layers use existing optimized local forest assets as parallax fallbacks."
    },
    null,
    2
  ),
  "utf8"
);

console.log("Extracted MaineCoonCity assets to public/maincoon-assets");
