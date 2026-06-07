import fs from "node:fs/promises";
import path from "node:path";
import { execFileSync } from "node:child_process";
import sharp from "sharp";

const root = process.cwd();
const rawDir = path.join(root, "public/images/_acquisition_raw");

const pexelsImage = (id, width = 2600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;

const assets = [
  {
    file: "public/images/hero/forest-background.webp",
    avif: "public/images/hero/forest-background.avif",
    url: pexelsImage(1909572, 2600),
    source: "https://www.pexels.com/photo/foggy-forest-1909572/",
    author: "Chris G",
    license: "Pexels License",
    purpose: "Hero far background: real foggy forest base",
    notes: "Atmospheric conifer fog, readable enough for text overlays.",
    width: 2600
  },
  {
    file: "public/images/hero/mountain-forest-depth.webp",
    avif: "public/images/hero/mountain-forest-depth.avif",
    url: pexelsImage(10012495, 2600),
    source: "https://www.pexels.com/photo/photo-of-a-forest-with-mist-10012495/",
    author: "eberhard grossgasteiger",
    license: "Pexels License",
    purpose: "Hero depth layer: mountains, mist, conifers",
    notes: "Strong mountain/forest depth; useful for far parallax layer.",
    width: 2600
  },
  {
    file: "public/images/hero/forest-mid-trees.webp",
    avif: "public/images/hero/forest-mid-trees.avif",
    url: pexelsImage(295022, 2400),
    source: "https://www.pexels.com/photo/forest-morning-sun-pine-tree-wood-295022/",
    author: "Edgar Pfandler",
    license: "Pexels License",
    purpose: "Hero middle layer: real pine trees and vertical trunks",
    notes: "Tall trees with natural light; suitable as mid-ground crop.",
    width: 2400
  },
  {
    file: "public/images/hero/forest-foreground.webp",
    avif: "public/images/hero/forest-foreground.avif",
    url: pexelsImage(30030404, 1800),
    source: "https://www.pexels.com/photo/close-up-of-mossy-tree-bark-in-forest-30030404/",
    author: "Percy",
    license: "Pexels License",
    purpose: "Hero foreground: real moss/tree bark texture",
    notes: "Close foreground texture for depth; not a CSS silhouette.",
    width: 1800
  },
  {
    file: "public/images/hero/fog-light-rays.webp",
    avif: "public/images/hero/fog-light-rays.avif",
    url: pexelsImage(7145343, 2400),
    source: "https://www.pexels.com/photo/summer-forest-in-mist-and-sun-rays-7145343/",
    author: "John Finster",
    license: "Pexels License",
    purpose: "Hero overlay layer: real forest mist and sun beams",
    notes: "Good ethereal light; can be blended lightly as photo overlay.",
    width: 2400
  },
  {
    file: "public/images/hero/main-mainecoon.webp",
    avif: "public/images/hero/main-mainecoon.avif",
    url: pexelsImage(35494087, 1600),
    source: "https://www.pexels.com/photo/majestic-maine-coon-cat-in-dramatic-lighting-35494087/",
    author: "ansiveg",
    license: "Pexels License",
    purpose: "Hero main Maine Coon portrait",
    notes: "Large expressive Maine Coon, cleaner and more premium than previous dark hero cat.",
    width: 1600
  },
  {
    file: "public/images/hero/mainecoon-action.webp",
    avif: "public/images/hero/mainecoon-action.avif",
    url: pexelsImage(16973781, 1600),
    source: "https://www.pexels.com/photo/cat-16973781/",
    author: "Marjorie Matias",
    license: "Pexels License",
    purpose: "Hero secondary/action pose cat",
    notes: "Outdoor Maine Coon pose; not a true jump, but usable for movement beat if no stronger jump photo is approved.",
    width: 1600
  },
  {
    file: "public/images/backgrounds/breed-forest-bg.webp",
    avif: "public/images/backgrounds/breed-forest-bg.avif",
    url: pexelsImage(1065841, 2400),
    source: "https://www.pexels.com/photo/photography-of-fir-trees-on-mountains-1065841/",
    author: "eberhard grossgasteiger",
    license: "Pexels License",
    purpose: "Breed section background",
    notes: "Alpine forest setting, calmer and lighter than hero fog.",
    width: 2400
  },
  {
    file: "public/images/backgrounds/catalog-texture-bg.webp",
    avif: "public/images/backgrounds/catalog-texture-bg.avif",
    url: pexelsImage(29207334, 1800),
    source: "https://www.pexels.com/photo/aged-wooden-planks-with-moss-growth-texture-29207334/",
    author: "Ellie Burgin",
    license: "Pexels License",
    purpose: "Catalog natural texture background",
    notes: "Wood and moss texture for premium catalog surfaces.",
    width: 1800
  },
  {
    file: "public/images/backgrounds/breeder-natural-bg.webp",
    avif: "public/images/backgrounds/breeder-natural-bg.avif",
    url: pexelsImage(28261096, 2000),
    source: "https://www.pexels.com/photo/pile-of-old-tree-trunks-28261096/",
    author: "Ville Aalto",
    license: "Pexels License",
    purpose: "Breeder page natural background",
    notes: "Nordic forest logs and moss, good for breeder story section.",
    width: 2000
  },
  {
    file: "public/images/backgrounds/contact-natural-bg.webp",
    avif: "public/images/backgrounds/contact-natural-bg.avif",
    url: pexelsImage(5504367, 2200),
    source: "https://www.pexels.com/photo/sun-rays-in-forest-5504367/",
    author: "Mike van Schoonderwalt",
    license: "Pexels License",
    purpose: "Contact page natural background",
    notes: "Warm forest rays, human and approachable.",
    width: 2200
  },
  ...[
    [16229392, "ZDV Media", "https://www.pexels.com/photo/maine-coon-cat-16229392/", "Maine Coon close portrait, strong whiskers and eyes."],
    [
      "https://live.staticflickr.com/8330/8082899337_20f1294237_b.jpg",
      "Clara S.",
      "https://www.flickr.com/photos/13151547@N06/8082899337",
      "CC BY 2.0",
      "Grey long-hair kitten, neutral premium look."
    ],
    [31848330, "elif s.", "https://www.pexels.com/photo/close-up-portrait-of-a-maine-coon-cat-in-sunlight-31848330/", "Maine Coon in sunlight, bright and card-friendly."],
    [
      "https://live.staticflickr.com/8051/8082889633_f9737ba732_b.jpg",
      "Clara S.",
      "https://www.flickr.com/photos/13151547@N06/8082889633",
      "CC BY 2.0",
      "Orange long-hair kitten, calm and card-friendly."
    ],
    [8617799, "Сергей Костяев", "https://www.pexels.com/photo/close-up-of-a-maine-coon-cat-8617799/", "Maine Coon close-up, dramatic eyes."],
    [31757854, "Artem Anosov", "https://www.pexels.com/photo/close-up-portrait-of-a-maine-coon-cat-31757854/", "Orange Maine Coon, premium fur detail."],
    [915060, "Jenna Hamra", "https://www.pexels.com/photo/black-and-white-maine-coon-cat-915060/", "Long-haired cat close portrait, clean crop."],
    [19240215, "UMUT DAĞLI", "https://www.pexels.com/photo/maine-coon-cat-yawning-19240215/", "Expressive Maine Coon, adds variety."],
    [10546896, "Timo Volz", "https://www.pexels.com/photo/close-up-photograph-of-a-main-coon-cat-10546896/", "Maine Coon with intense gaze, sharp fur."],
    [
      "https://live.staticflickr.com/5549/10397587854_c795793827_b.jpg",
      "Bev Goodwin",
      "https://www.flickr.com/photos/37390607@N02/10397587854",
      "CC BY 2.0",
      "Long-haired kitten watching outside, calmer than colored-lights frame."
    ],
    [
      "https://live.staticflickr.com/7145/6662889341_529be1795d_b.jpg",
      "Ben Mortimer Photography",
      "https://www.flickr.com/photos/71768083@N07/6662889341",
      "CC BY 2.0",
      "Long-haired cat portrait with natural tones."
    ],
    [13684422, "Pexels User", "https://www.pexels.com/photo/close-up-shot-of-a-black-kitten-13684422/", "Real kitten outdoors, green natural background."],
    [
      "https://live.staticflickr.com/157/429655048_0262871671_b.jpg",
      "Rocky Mountain Feline Rescue",
      "https://www.flickr.com/photos/77562960@N00/429655048",
      "CC BY 2.0",
      "Adoptable kitten portrait, soft background."
    ],
    [
      "https://live.staticflickr.com/3829/10182563905_7e52026cf8_b.jpg",
      "Bev Goodwin",
      "https://www.flickr.com/photos/37390607@N02/10182563905",
      "CC BY 2.0",
      "Feral kitten portrait, natural texture and good eye contact."
    ],
    [1276553, "Pixabay", "https://www.pexels.com/photo/adorable-animal-blur-cat-1276553/", "Playful cat pose, useful as a lively catalog variation."],
    [1170986, "Pixabay", "https://www.pexels.com/photo/selective-focus-photography-of-orange-tabby-cat-1170986/", "Warm tabby close-up with clean depth of field."]
  ].map((item, index) => ({
    file: `public/images/kittens/kitten-${String(index + 1).padStart(2, "0")}.webp`,
    avif: `public/images/kittens/kitten-${String(index + 1).padStart(2, "0")}.avif`,
    url: typeof item[0] === "number" ? pexelsImage(item[0], 1400) : item[0],
    source: item[2],
    author: item[1],
    license: item[3]?.startsWith("CC ") ? item[3] : "Pexels License",
    purpose: `Kitten/card photo ${String(index + 1).padStart(2, "0")}`,
    notes: item[4] ?? item[3],
    width: 1100
  }))
];

async function download(url, target) {
  const psQuote = (value) => `'${String(value).replaceAll("'", "''")}'`;
  execFileSync(
    "powershell.exe",
    [
      "-NoProfile",
      "-Command",
      `Invoke-WebRequest -Uri ${psQuote(url)} -OutFile ${psQuote(target)} -MaximumRedirection 8`
    ],
    {
      stdio: "pipe",
      windowsHide: true,
      shell: false,
      env: process.env,
      input: "",
      argv0: "powershell.exe",
      timeout: 120000,
      encoding: "utf8",
      maxBuffer: 1024 * 1024
    }
  );
  const stat = await fs.stat(target);
  if (stat.size < 1024) {
    const content = await fs.readFile(target, "utf8").catch(() => "");
    throw new Error(`Downloaded file is too small for ${url}: ${stat.size} bytes ${content}`);
  }
  return stat.size;
}

async function convert(rawPath, webpPath, avifPath, width) {
  await fs.mkdir(path.dirname(webpPath), { recursive: true });
  await sharp(rawPath)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 84, effort: 5 })
    .toFile(webpPath);
  await sharp(rawPath)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .avif({ quality: 58, effort: 5 })
    .toFile(avifPath);
}

async function writeSources() {
  const header = `# Asset sources\n\n| File | Source URL | Author | License | Purpose | Quality notes |\n|---|---|---|---|---|---|\n`;
  const rows = assets
    .flatMap((asset) => [
      asset,
      {
        ...asset,
        file: asset.avif,
        purpose: `${asset.purpose} alternate AVIF`
      }
    ])
    .map(
      (asset) =>
        `| ${asset.file} | ${asset.source} | ${asset.author} | ${asset.license} | ${asset.purpose} | ${asset.notes} |`
    )
    .join("\n");
  await fs.writeFile(path.join(root, "_asset_sources.md"), `${header}${rows}\n`, "utf8");
}

await fs.mkdir(rawDir, { recursive: true });

for (const [index, asset] of assets.entries()) {
  const rawPath = path.join(rawDir, `${String(index + 1).padStart(2, "0")}.jpg`);
  const webpPath = path.join(root, asset.file);
  const avifPath = path.join(root, asset.avif);
  const bytes = await download(asset.url, rawPath);
  await convert(rawPath, webpPath, avifPath, asset.width);
  const webpSize = (await fs.stat(webpPath)).size;
  const avifSize = (await fs.stat(avifPath)).size;
  console.log(`${asset.file} <- ${bytes} bytes raw, webp ${webpSize}, avif ${avifSize}`);
}

await writeSources();
await fs.rm(rawDir, { recursive: true, force: true });
