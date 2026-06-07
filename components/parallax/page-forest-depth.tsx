import Image from "next/image";
import { assets } from "@/lib/assets";

export function PageForestDepth() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[var(--mcc-bg)]">
      <Image
        src={assets.hero.forestBg}
        alt=""
        fill
        sizes="100vw"
        className="scale-110 object-cover opacity-30 saturate-0"
        data-scroll-depth="0.05"
        data-scroll-fade="false"
      />
      <Image
        src={assets.hero.forestMid}
        alt=""
        fill
        sizes="100vw"
        className="scale-125 object-cover opacity-18 saturate-0 mix-blend-screen"
        data-scroll-depth="0.12"
        data-scroll-fade="false"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_68%_10%,rgba(245,245,245,.08),transparent_28rem),linear-gradient(180deg,rgba(5,5,5,.72),rgba(5,5,5,.94))]"
        data-scroll-depth="0.08"
        data-scroll-fade="false"
      />
      <div
        className="absolute inset-x-[-12%] top-[18%] h-40 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-3xl"
        data-scroll-depth="0.22"
        data-scroll-fade="false"
      />
    </div>
  );
}
