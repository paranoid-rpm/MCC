import { ChevronDown } from "lucide-react";

export function ScrollToCatalogCue() {
  return (
    <a
      href="#nearby"
      className="absolute bottom-3 left-1/2 z-40 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-cream/18 bg-black/28 px-4 py-2 text-sm font-medium text-cream/76 backdrop-blur md:flex"
    >
      К котятам рядом
      <ChevronDown size={16} />
    </a>
  );
}
