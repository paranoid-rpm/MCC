import { cn } from "@/lib/utils";

type ParallaxLayerProps = React.HTMLAttributes<HTMLDivElement> & {
  depth:
    | "far"
    | "mid"
    | "tunnel-mid"
    | "tunnel-near"
    | "fog"
    | "light"
    | "front"
    | "front-left"
    | "front-right"
    | "cat"
    | "hero-card"
    | "cards";
};

export function ParallaxLayer({
  depth,
  className,
  children,
  ...props
}: ParallaxLayerProps) {
  return (
    <div
      data-depth={depth}
      className={cn("absolute inset-0 will-change-transform", className)}
      {...props}
    >
      {children}
    </div>
  );
}
