import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: "forest" | "gold" | "stone" | "cream";
};

export function Badge({ className, tone = "forest", ...props }: BadgeProps) {
  const tones = {
    forest: "border-forest-300/20 bg-forest-700/55 text-cream",
    gold: "border-white/25 bg-white/12 text-white",
    stone: "border-cream/12 bg-cream/10 text-cream/72",
    cream: "border-cream/22 bg-cream/14 text-cream"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded px-2.5 py-1 text-xs font-semibold",
        "border",
        tones[tone],
        className
      )}
      {...props}
    />
  );
}
