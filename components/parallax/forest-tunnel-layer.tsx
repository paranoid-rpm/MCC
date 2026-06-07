import { ParallaxLayer } from "@/components/parallax/parallax-layer";

const nearTrunks = [
  { left: "-7%", width: "11vw", rotate: "-3deg", opacity: 0.72 },
  { left: "8%", width: "7vw", rotate: "2deg", opacity: 0.42 },
  { right: "-8%", width: "12vw", rotate: "4deg", opacity: 0.78 },
  { right: "10%", width: "7vw", rotate: "-2deg", opacity: 0.46 }
];

const midTrunks = [
  { left: "21%", width: "3vw", rotate: "1deg", opacity: 0.28 },
  { left: "31%", width: "2.4vw", rotate: "-1deg", opacity: 0.22 },
  { right: "26%", width: "2.8vw", rotate: "1deg", opacity: 0.24 },
  { right: "36%", width: "2.2vw", rotate: "-1deg", opacity: 0.2 }
];

export function ForestTunnelLayer() {
  return (
    <>
      <ParallaxLayer depth="tunnel-mid" aria-hidden="true" className="overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_34%,rgba(2,4,3,.52)_68%,rgba(2,4,3,.88)_100%)]" />
        {midTrunks.map((trunk, index) => (
          <span
            key={`mid-${index}`}
            className="absolute top-[-10%] h-[122%] rounded-full bg-gradient-to-r from-black/60 via-pine/70 to-black/72 blur-[0.2px]"
            style={{
              left: trunk.left,
              right: trunk.right,
              width: trunk.width,
              rotate: trunk.rotate,
              opacity: trunk.opacity
            }}
          />
        ))}
      </ParallaxLayer>

      <ParallaxLayer depth="tunnel-near" aria-hidden="true" className="overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-[30vw] bg-gradient-to-r from-black/72 via-black/34 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-[30vw] bg-gradient-to-l from-black/76 via-black/34 to-transparent" />
        {nearTrunks.map((trunk, index) => (
          <span
            key={`near-${index}`}
            className="absolute top-[-12%] h-[128%] rounded-full bg-gradient-to-r from-black via-[#10130e] to-black shadow-[0_0_60px_rgba(0,0,0,.56)]"
            style={{
              left: trunk.left,
              right: trunk.right,
              width: trunk.width,
              rotate: trunk.rotate,
              opacity: trunk.opacity
            }}
          />
        ))}
        <div className="absolute inset-x-[12%] bottom-[-24%] h-[38%] rounded-[50%] bg-black/46 blur-3xl" />
      </ParallaxLayer>
    </>
  );
}
