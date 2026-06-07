import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BranchLayer, BranchRightLayer } from "@/components/parallax/branch-layer";
import { CatGuideScene } from "@/components/parallax/cat-guide-scene";
import { FloatingParticles } from "@/components/parallax/floating-particles";
import { FogLayer } from "@/components/parallax/fog-layer";
import { ForestBackgroundLayer } from "@/components/parallax/forest-background-layer";
import { ForestMidLayer } from "@/components/parallax/forest-mid-layer";
import { ForestTunnelLayer } from "@/components/parallax/forest-tunnel-layer";
import { LightRaysLayer } from "@/components/parallax/light-rays-layer";
import { ParallaxLayer } from "@/components/parallax/parallax-layer";
import { ParallaxStage } from "@/components/parallax/parallax-stage";
import { ReducedMotionWrapper } from "@/components/parallax/reduced-motion-wrapper";
import { ScrollToCatalogCue } from "@/components/parallax/scroll-to-catalog-cue";
import { assets } from "@/lib/assets";
import { siteCopy } from "@/lib/copy";

const searchControls = [
  { label: siteCopy.filter.city, value: siteCopy.filter.cityValue, icon: assets.icons.city },
  { label: siteCopy.filter.radius, value: siteCopy.filter.radiusValue, icon: assets.icons.radius },
  { label: siteCopy.filter.status, value: siteCopy.filter.statusValue, icon: assets.icons.status },
  { label: siteCopy.filter.documents, value: siteCopy.filter.documentsValue, icon: assets.icons.documents }
];

function MccIcon({ src, alt = "" }: { src: string; alt?: string }) {
  return (
    <span
      role={alt ? "img" : undefined}
      aria-label={alt || undefined}
      aria-hidden={alt ? undefined : true}
      className="inline-block h-[18px] w-[18px] shrink-0 bg-current"
      style={{
        WebkitMask: `url(${src}) center / contain no-repeat`,
        mask: `url(${src}) center / contain no-repeat`
      }}
    />
  );
}

export function HeroParallax() {
  const titleLines = siteCopy.hero.title.split("\n");

  return (
    <ReducedMotionWrapper>
      <ParallaxStage>
        <ForestBackgroundLayer />
        <ForestMidLayer />
        <ForestTunnelLayer />
        <FogLayer />
        <LightRaysLayer />
        <BranchLayer />
        <BranchRightLayer />
        <FloatingParticles />
        <CatGuideScene />

        <div className="pointer-events-none absolute inset-0 z-[8] bg-[radial-gradient(circle_at_50%_34%,transparent_0%,transparent_25%,rgba(5,5,5,.48)_64%,rgba(5,5,5,.94)_100%),linear-gradient(90deg,rgba(5,5,5,.95)_0%,rgba(18,18,18,.42)_38%,rgba(18,18,18,.24)_62%,rgba(5,5,5,.88)_100%)]" />
        <div className="pointer-events-none absolute inset-0 z-[8] bg-gradient-to-b from-black/20 via-transparent to-[var(--mcc-bg)]" />
        <div className="hero-grain pointer-events-none absolute inset-0 z-[9] opacity-[0.07] mix-blend-overlay" />

        <div className="hero-layout container-page relative z-10 grid gap-5 pb-6 pt-20 text-[var(--mcc-text)] md:min-h-[calc(100vh-4rem)] md:grid-cols-[minmax(0,1fr)_clamp(320px,30vw,440px)] md:grid-rows-[1fr_auto] md:items-end md:gap-7 md:pb-10 md:pt-24">
          <div data-testid="hero-content" data-depth="headline" className="hero-content relative z-10 flex min-h-[52svh] max-w-[980px] flex-col justify-end md:min-h-0 md:pb-32">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.42em] text-[var(--mcc-muted)]">
              {siteCopy.hero.eyebrow}
            </p>
            <h1 className="hero-title max-w-[980px] font-serif text-[clamp(3.4rem,16vw,5rem)] font-semibold uppercase leading-[0.86] tracking-normal text-[var(--mcc-text)] drop-shadow-[0_22px_55px_rgba(0,0,0,.58)] md:text-[clamp(5.8rem,10vw,9.6rem)] md:leading-[0.8]">
              {titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[color:rgba(245,245,245,.76)] md:text-lg">
              {siteCopy.hero.subtitle}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="gold" className="rounded-full bg-[var(--mcc-text)] text-[var(--mcc-bg)] hover:bg-white">
                <Link href="/kittens">{siteCopy.hero.primary}</Link>
              </Button>
              <Button asChild variant="secondary" className="rounded-full border-[var(--mcc-line)] bg-transparent">
                <Link href="/breeders">{siteCopy.hero.secondary}</Link>
              </Button>
            </div>
          </div>

          <div data-testid="hero-card" data-depth="hero-card" className="hero-card relative z-20 row-auto h-auto min-h-0 md:absolute md:bottom-[9.5rem] md:right-0 md:h-auto md:w-[clamp(320px,30vw,440px)]">
            <article className="overflow-hidden rounded-[1.25rem] border border-[var(--mcc-line)] bg-[rgba(11,11,11,.76)] shadow-[0_24px_90px_rgba(0,0,0,.46)] backdrop-blur-xl">
              <div className="relative aspect-[4/3]">
                <Image src={assets.hero.cardCat} alt={siteCopy.heroCard.label} fill priority sizes="(max-width: 768px) 100vw, 440px" className="object-cover saturate-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/42 px-3 py-1 text-xs uppercase tracking-[.2em] text-white">
                  {siteCopy.heroCard.badge}
                </span>
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-[.26em] text-[var(--mcc-muted)]">{siteCopy.heroCard.label}</p>
                <div className="mt-3 flex items-end justify-between gap-4">
                  <h2 className="font-serif text-4xl leading-none text-[var(--mcc-text)]">{siteCopy.heroCard.name}</h2>
                  <p className="text-lg font-semibold text-[var(--mcc-text)]">{siteCopy.heroCard.price}</p>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-[color:rgba(245,245,245,.68)]">
                  <span>{siteCopy.heroCard.city}</span>
                  <span>{siteCopy.heroCard.distance}</span>
                  <span>{siteCopy.heroCard.age}</span>
                  <span>{siteCopy.heroCard.documents}</span>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-2">
                  <Button asChild variant="secondary" className="rounded-full border-[var(--mcc-line)] bg-transparent">
                    <Link href="/kittens/nord-cedar">{siteCopy.heroCard.details}</Link>
                  </Button>
                  <Button asChild variant="gold" className="rounded-full bg-[var(--mcc-text)] text-[var(--mcc-bg)] hover:bg-white">
                    <Link href="/contacts">
                      <MccIcon src={assets.icons.phone} />
                      {siteCopy.heroCard.call}
                    </Link>
                  </Button>
                </div>
              </div>
            </article>
          </div>

          <div
            data-testid="hero-filter"
            data-depth="booking-strip"
            className="hero-filter relative z-30 rounded-[1.25rem] border border-[var(--mcc-line)] bg-[rgba(11,11,11,.72)] p-2 shadow-[0_20px_70px_rgba(0,0,0,.36)] backdrop-blur-2xl md:col-span-2 lg:absolute lg:bottom-10 lg:left-0 lg:w-[min(1030px,calc(100vw-520px))] lg:rounded-full"
          >
            <div className="grid gap-1.5 md:grid-cols-[repeat(4,minmax(0,1fr))_auto]">
              {searchControls.map((item) => (
                <div key={item.label} className="rounded-[1rem] border border-[var(--mcc-line-soft)] bg-white/[0.045] px-5 py-2.5 lg:rounded-full">
                  <p className="flex items-center gap-2 text-[0.62rem] uppercase tracking-[0.24em] text-[color:rgba(245,245,245,.46)]">
                    <MccIcon src={item.icon} />
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-[var(--mcc-text)]">{item.value}</p>
                </div>
              ))}
              <Button asChild variant="gold" className="h-full min-h-12 rounded-[1rem] bg-[var(--mcc-text)] px-8 text-[var(--mcc-bg)] hover:bg-white lg:rounded-full">
                <Link href="/kittens">
                  <MccIcon src={assets.icons.search} />
                  {siteCopy.filter.search}
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <ParallaxLayer depth="cards" className="pointer-events-none z-20">
          <div className="absolute inset-x-0 bottom-[-1px] h-56 bg-gradient-to-t from-[#070907] via-[#070907]/82 to-transparent" />
        </ParallaxLayer>
        <ScrollToCatalogCue />
      </ParallaxStage>
    </ReducedMotionWrapper>
  );
}
