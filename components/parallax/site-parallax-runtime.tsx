"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SiteParallaxRuntime() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-scroll-depth]").forEach((element) => {
        const depth = Number(element.dataset.scrollDepth ?? 0.14);
        const distance = Math.round(depth * 220);

        gsap.fromTo(
          element,
          { y: distance, opacity: element.dataset.scrollFade === "false" ? 1 : 0.82 },
          {
            y: -distance,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.65,
              invalidateOnRefresh: true
            }
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal-depth]").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 44, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    });

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return null;
}
