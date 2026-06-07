"use client";

import type { GeoLocation } from "@/lib/geo";
import { cities } from "@/lib/mock-data";

export function CityAutocompleteMock({
  onSelect
}: {
  onSelect: (location: GeoLocation) => void;
}) {
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {cities.map((city) => (
        <button
          key={`${city.city}-${city.country}`}
          type="button"
          onClick={() => onSelect(city)}
          className="rounded-xl border border-cream/12 bg-cream/[0.06] px-4 py-3 text-left text-sm transition hover:border-gold/60 hover:bg-cream/12"
        >
          <span className="block font-semibold text-cream">{city.city}</span>
          <span className="text-cream/55">{city.country}</span>
        </button>
      ))}
    </div>
  );
}
