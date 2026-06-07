"use client";

import { PropsWithChildren, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotionPreference } from "@/components/parallax/reduced-motion-wrapper";

gsap.registerPlugin(ScrollTrigger);

export function ParallaxStage({ children }: PropsWithChildren) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotionPreference();

  useEffect(() => {
    const stage = ref.current;
    if (!stage || reduced) return;

    const ctx = gsap.context(() => {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      if (isMobile) return;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: stage,
          start: "top top",
          end: "+=140%",
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });

      timeline
        .to('[data-depth="far"]', { yPercent: 8, scale: 1.12, ease: "none" }, 0)
        .to('[data-depth="mid"]', { yPercent: 5, scale: 1.08, ease: "none" }, 0)
        .to('[data-depth="cat"]', { yPercent: 3, scale: 1.05, ease: "none" }, 0)
        .to('[data-depth="front-left"]', { xPercent: -12, yPercent: -6, scale: 1.08, ease: "none" }, 0)
        .to('[data-depth="front-right"]', { xPercent: 12, yPercent: -6, scale: 1.08, ease: "none" }, 0)
        .to('[data-depth="fog"]', { xPercent: 8, yPercent: 6, opacity: 0.45, ease: "none" }, 0)
        .to('[data-depth="light"]', { scale: 1.25, opacity: 0.7, ease: "none" }, 0)
        .to('[data-depth="headline"]', { yPercent: -18, opacity: 0.22, ease: "none" }, 0)
        .to('[data-depth="hero-card"]', { yPercent: -8, scale: 0.98, ease: "none" }, 0)
        .to('[data-depth="booking-strip"]', { yPercent: -12, opacity: 0.9, ease: "none" }, 0)
        .fromTo('[data-depth="cards"]', { y: 150, opacity: 0 }, { y: -36, opacity: 1, ease: "none" }, 0.45);
    }, stage);

    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 350);

    return () => {
      window.clearTimeout(refresh);
      ctx.revert();
    };
  }, [reduced]);

  return (
    <section
      ref={ref}
      data-testid="hero-root"
      className="hero-root relative isolate min-h-[calc(100svh-4rem)] overflow-hidden bg-[var(--mcc-bg)] [perspective:1000px] md:min-h-[calc(100vh-4rem)]"
    >
      {children}
    </section>
  );
}
