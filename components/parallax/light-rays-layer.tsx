import Image from "next/image";
import { ParallaxLayer } from "@/components/parallax/parallax-layer";
import { assets } from "@/lib/assets";

export function LightRaysLayer() {
  return (
    <ParallaxLayer data-testid="hero-glow" depth="light" aria-hidden="true" className="overflow-hidden mix-blend-screen">
      <Image
        src={assets.hero.glow}
        alt=""
        fill
        sizes="100vw"
        className="scale-125 object-contain object-[55%_30%] opacity-45"
      />
      <div className="absolute left-[16%] top-[-18%] h-[96%] w-24 rotate-[17deg] bg-gradient-to-b from-white/18 via-white/8 to-transparent blur-md" />
      <div className="absolute right-[27%] top-[-22%] h-[94%] w-24 rotate-[-12deg] bg-gradient-to-b from-cream/20 via-cream/7 to-transparent blur-md" />
      <div className="absolute right-[8%] top-[-12%] h-[76%] w-16 rotate-[-24deg] bg-gradient-to-b from-white/12 via-white/5 to-transparent blur-lg" />
    </ParallaxLayer>
  );
}
