from pathlib import Path
from rembg import remove
from PIL import Image

INPUT_DIR = Path("asset-inbox/cutout")
OUTPUT_DIR = Path("public/images/parallax")
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

valid = {".png", ".jpg", ".jpeg", ".webp"}

for file in INPUT_DIR.iterdir():
    if file.suffix.lower() not in valid:
        continue

    print(f"Cutout: {file.name}")
    image = Image.open(file).convert("RGBA")
    result = remove(
        image,
        alpha_matting=True,
        alpha_matting_foreground_threshold=240,
        alpha_matting_background_threshold=10,
        alpha_matting_erode_size=10,
    )

    out = OUTPUT_DIR / f"{file.stem}-cutout.png"
    result.save(out)
    print(f"Saved: {out}")
