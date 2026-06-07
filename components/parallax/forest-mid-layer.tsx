import Image from "next/image";
import { ParallaxLayer } from "@/components/parallax/parallax-layer";
import { assets } from "@/lib/assets";

export function ForestMidLayer() {
  return (
    <ParallaxLayer data-testid="hero-mid" depth="mid" aria-hidden="true" className="overflow-hidden">
      <Image
        src={assets.hero.forestMid}
        alt=""
        fill
        sizes="100vw"
        className="scale-[1.18] object-cover object-center opacity-70 saturate-0 mix-blend-screen contrast-125"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,.82),transparent_44%,rgba(5,5,5,.68)),radial-gradient(circle_at_70%_34%,rgba(245,245,245,.08),transparent_20rem)]" />
      <div className="absolute bottom-[-8%] left-[-8%] h-[48%] w-[58%] rounded-[50%] bg-black/38 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--mcc-bg)]/86 to-transparent" />
    </ParallaxLayer>
  );
}
