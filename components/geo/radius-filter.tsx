"use client";

import type { RadiusValue } from "@/lib/geo";
import { radiusOptions } from "@/lib/geo";
import { cn } from "@/lib/utils";

export function RadiusFilter({
  value,
  onChange
}: {
  value: RadiusValue;
  onChange: (value: RadiusValue) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {radiusOptions.map((option) => (
        <button
          key={String(option.value)}
          type="button"
          onClick={() => onChange(option.value)}
          className={cn(
            "rounded-lg border px-3 py-2 text-sm font-medium transition",
            value === option.value
              ? "border-gold bg-gold text-charcoal"
              : "border-cream/12 bg-cream/[0.06] text-cream/70 hover:bg-cream/12 hover:text-cream"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
