import { ParallaxLayer } from "@/components/parallax/parallax-layer";

export function FloatingParticles() {
  return (
    <ParallaxLayer depth="front" aria-hidden="true">
      {Array.from({ length: 30 }).map((_, index) => (
        <span
          key={index}
          className="absolute h-1 w-1 rounded-full bg-gold/60"
          style={{
            left: `${(index * 29) % 100}%`,
            top: `${18 + ((index * 17) % 68)}%`,
            opacity: 0.25 + (index % 5) * 0.12,
            transform: `scale(${0.8 + (index % 4) * 0.35})`
          }}
        />
      ))}
    </ParallaxLayer>
  );
}
