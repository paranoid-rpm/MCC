import Image from "next/image";
import { ParallaxLayer } from "@/components/parallax/parallax-layer";
import { assets } from "@/lib/assets";

export function BranchLayer() {
  return (
    <ParallaxLayer data-testid="hero-foreground-left" depth="front-left" aria-hidden="true" className="overflow-hidden">
      <Image
        src={assets.hero.foregroundLeft}
        alt=""
        width={1300}
        height={1950}
        sizes="(max-width: 768px) 78vw, 48vw"
        className="absolute -left-[20vw] top-[-18vh] w-[56vw] max-w-[760px] rotate-[-12deg] opacity-58 blur-[0.2px]"
      />
    </ParallaxLayer>
  );
}

export function BranchRightLayer() {
  return (
    <ParallaxLayer data-testid="hero-foreground-right" depth="front-right" aria-hidden="true" className="overflow-hidden">
      <Image
        src={assets.hero.foregroundRight}
        alt=""
        width={1200}
        height={1800}
        sizes="(max-width: 768px) 70vw, 44vw"
        className="absolute -right-[25vw] top-[-28vh] w-[58vw] max-w-[840px] rotate-[8deg] opacity-62 blur-[0.3px]"
      />
    </ParallaxLayer>
  );
}
