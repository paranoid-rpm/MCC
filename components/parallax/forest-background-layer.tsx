import Image from "next/image";
import { ParallaxLayer } from "@/components/parallax/parallax-layer";
import { assets } from "@/lib/assets";

export function ForestBackgroundLayer() {
  return (
    <ParallaxLayer data-testid="hero-bg" depth="far" className="overflow-hidden bg-[var(--mcc-bg)]">
      <Image
        src={assets.hero.forestBg}
        alt="Северные горы и хвойный лес в тумане"
        fill
        priority
        sizes="100vw"
        className="scale-110 object-cover saturate-0 contrast-125"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_30%,rgba(245,245,245,.13),transparent_25rem),linear-gradient(90deg,rgba(5,5,5,.94)_0%,rgba(18,18,18,.22)_48%,rgba(5,5,5,.9)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/38 via-transparent to-[var(--mcc-bg)]" />
    </ParallaxLayer>
  );
}
