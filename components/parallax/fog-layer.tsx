import Image from "next/image";
import { ParallaxLayer } from "@/components/parallax/parallax-layer";
import { assets } from "@/lib/assets";

export function FogLayer() {
  return (
    <ParallaxLayer data-testid="hero-fog" depth="fog" aria-hidden="true" className="overflow-hidden">
      <Image
        src={assets.hero.fog}
        alt=""
        fill
        sizes="100vw"
        className="scale-125 object-cover opacity-30 mix-blend-screen"
      />
      <div className="absolute left-[-18%] top-[22%] h-36 w-[82%] rounded-full bg-white/10 blur-3xl" />
      <div className="absolute right-[-14%] top-[44%] h-28 w-[66%] rounded-full bg-cream/10 blur-3xl" />
      <div className="absolute inset-x-[-16%] bottom-[12%] h-52 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-2xl" />
    </ParallaxLayer>
  );
}
