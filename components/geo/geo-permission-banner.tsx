"use client";

import { LocateFixed } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { GeoLocation } from "@/lib/geo";

export function GeoPermissionBanner({
  onDetect,
  onManual,
  onDismiss,
  hidden
}: {
  onDetect: () => void;
  onManual: () => void;
  onDismiss: () => void;
  hidden?: boolean;
}) {
  if (hidden) return null;

  return (
    <section className="forest-card rounded-2xl p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="flex items-center gap-2 font-semibold text-cream">
            <LocateFixed size={18} />
            Показать котят рядом с вами?
          </p>
          <p className="mt-1 text-sm leading-6 text-cream/62">
            Геолокация сохраняется только в вашем браузере. Можно выбрать город вручную.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button type="button" onClick={onDetect}>
            Определить
          </Button>
          <Button type="button" variant="secondary" onClick={onManual}>
            Выбрать город
          </Button>
          <Button type="button" variant="ghost" onClick={onDismiss}>
            Не сейчас
          </Button>
        </div>
      </div>
    </section>
  );
}

export function browserPositionToLocation(position: GeolocationPosition): GeoLocation {
  return {
    city: "Мое местоположение",
    country: "Россия",
    lat: position.coords.latitude,
    lng: position.coords.longitude
  };
}
