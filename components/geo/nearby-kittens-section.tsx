"use client";

import { useMemo, useState, useEffect } from "react";
import { AnimatedKittenCard } from "@/components/catalog/animated-kitten-card";
import { GeoPermissionBanner, browserPositionToLocation } from "@/components/geo/geo-permission-banner";
import { LocationModal } from "@/components/geo/location-modal";
import { LocationSelector } from "@/components/geo/location-selector";
import { RadiusFilter } from "@/components/geo/radius-filter";
import type { GeoLocation, RadiusValue } from "@/lib/geo";
import {
  calculateDistanceKm,
  filterByRadius,
  getSavedLocation,
  saveLocation,
  sortByDistance
} from "@/lib/geo";
import type { Kitten } from "@/lib/mock-data";
import { cities } from "@/lib/mock-data";

export function NearbyKittensSection({
  kittens,
  title = "Котята рядом",
  compact = false
}: {
  kittens: Kitten[];
  title?: string;
  compact?: boolean;
}) {
  const [location, setLocation] = useState<GeoLocation | null>(null);
  const [radius, setRadius] = useState<RadiusValue>(250);
  const [modalOpen, setModalOpen] = useState(false);
  const [bannerHidden, setBannerHidden] = useState(false);

  useEffect(() => {
    const saved = getSavedLocation();
    if (saved) {
      setLocation(saved);
      setBannerHidden(true);
    } else {
      setLocation(cities[0]);
    }
  }, []);

  const visibleKittens = useMemo(() => {
    const base = location
      ? filterByRadius(kittens, location, radius, location.country)
      : kittens;
    return location ? sortByDistance(base, location) : base;
  }, [kittens, location, radius]);

  const onSelectLocation = (nextLocation: GeoLocation) => {
    setLocation(nextLocation);
    saveLocation(nextLocation);
    setBannerHidden(true);
  };

  const detect = () => {
    if (!navigator.geolocation) {
      setModalOpen(true);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => onSelectLocation(browserPositionToLocation(position)),
      () => setModalOpen(true),
      { enableHighAccuracy: false, timeout: 7000 }
    );
  };

  return (
    <section id="nearby" className={compact ? "relative overflow-hidden bg-[#070907] py-20" : "relative overflow-hidden bg-[#070907] py-24"}>
      <div data-scroll-depth="0.14" data-scroll-fade="false" className="pointer-events-none absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-pine/36 to-transparent" />
      <div data-scroll-depth="0.24" data-scroll-fade="false" className="pointer-events-none absolute -right-24 top-32 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="container-page">
        <div data-reveal-depth className="mb-9 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-gold">
              nearby marketplace
            </p>
            <h2 className="mt-3 font-serif text-5xl font-semibold uppercase leading-[0.9] text-cream md:text-7xl">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl text-cream/62">
              Сначала показываем ближайшие объявления. Если рядом мало котят, расширьте радиус или выберите доставку.
            </p>
          </div>
          <LocationSelector location={location} onSelect={onSelectLocation} />
        </div>

        <div className="mb-7 grid gap-4">
          <GeoPermissionBanner
            hidden={bannerHidden}
            onDetect={detect}
            onManual={() => setModalOpen(true)}
            onDismiss={() => setBannerHidden(true)}
          />
          <RadiusFilter value={radius} onChange={setRadius} />
        </div>

        {visibleKittens.length === 0 ? (
          <div data-reveal-depth className="forest-card rounded-2xl p-8 text-center">
            <p className="font-serif text-3xl text-cream">
              В выбранном радиусе никого не нашли
            </p>
            <p className="mt-2 text-cream/62">
              Попробуйте расширить радиус или посмотреть котят с доставкой.
            </p>
          </div>
        ) : (
          <div data-reveal-depth className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visibleKittens.slice(0, compact ? 6 : 18).map((kitten) => (
              <AnimatedKittenCard
                key={kitten.id}
                kitten={kitten}
                distance={
                  location
                    ? calculateDistanceKm(location, {
                        lat: kitten.lat,
                        lng: kitten.lng
                      })
                    : null
                }
              />
            ))}
          </div>
        )}
      </div>
      <LocationModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        onSelect={onSelectLocation}
      />
    </section>
  );
}
