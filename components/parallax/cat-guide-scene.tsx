import Image from "next/image";
import { ParallaxLayer } from "@/components/parallax/parallax-layer";
import { assets } from "@/lib/assets";

export function CatGuideScene() {
  return (
    <ParallaxLayer data-testid="hero-cat" depth="cat" className="pointer-events-none">
      <div className="absolute bottom-[8%] right-[-24%] h-[42vh] w-[88vw] min-w-[320px] max-w-[680px] opacity-50 md:bottom-[4%] md:right-[19%] md:h-[62vh] md:w-[48vw] md:opacity-70">
        <div className="absolute bottom-[18%] left-[20%] h-16 w-[58%] rounded-[50%] bg-black/50 blur-2xl" />
        <div className="absolute inset-0 rounded-full bg-white/8 blur-3xl" />
        <Image
          src={assets.hero.cat}
          alt="Крупный мейн-кун в лесной сцене"
          fill
          priority
          sizes="(max-width: 768px) 90vw, 48vw"
          className="object-contain object-bottom saturate-0 drop-shadow-[0_34px_46px_rgba(0,0,0,.42)]"
        />
      </div>
    </ParallaxLayer>
  );
}
