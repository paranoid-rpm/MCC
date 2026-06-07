"use client";

import { MapPin } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LocationModal } from "@/components/geo/location-modal";
import type { GeoLocation } from "@/lib/geo";

export function LocationSelector({
  location,
  onSelect
}: {
  location: GeoLocation | null;
  onSelect: (location: GeoLocation) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button type="button" variant="secondary" onClick={() => setOpen(true)} className="rounded-xl">
        <MapPin size={17} />
        {location ? `${location.city}, ${location.country}` : "Выбрать город"}
      </Button>
      <LocationModal open={open} onOpenChange={setOpen} onSelect={onSelect} />
    </>
  );
}
