export type RadiusValue = 10 | 25 | 50 | 100 | 250 | 500 | "country" | "world";

export type GeoLocation = {
  city: string;
  country: string;
  lat: number;
  lng: number;
};

export type GeoPoint = Pick<GeoLocation, "lat" | "lng">;

const STORAGE_KEY = "mcc.location";
const EARTH_RADIUS_KM = 6371;

function toRadians(value: number) {
  return (value * Math.PI) / 180;
}

export function calculateDistanceKm(from: GeoPoint, to: GeoPoint) {
  const dLat = toRadians(to.lat - from.lat);
  const dLng = toRadians(to.lng - from.lng);
  const lat1 = toRadians(from.lat);
  const lat2 = toRadians(to.lat);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return Math.round(EARTH_RADIUS_KM * c);
}

export function sortByDistance<T extends GeoPoint>(items: T[], from: GeoPoint) {
  return [...items].sort(
    (a, b) => calculateDistanceKm(from, a) - calculateDistanceKm(from, b)
  );
}

export function filterByRadius<T extends GeoPoint>(
  items: T[],
  from: GeoPoint,
  radius: RadiusValue,
  country?: string
) {
  if (radius === "world") return items;
  if (radius === "country") {
    return country
      ? items.filter((item) => "country" in item && item.country === country)
      : items;
  }

  return items.filter((item) => calculateDistanceKm(from, item) <= radius);
}

export function formatDistance(distance?: number | null) {
  if (distance == null || Number.isNaN(distance)) return "расстояние уточняется";
  if (distance < 1) return "рядом";
  if (distance < 1000) return `${distance} км`;
  return `${Math.round(distance / 100) / 10} тыс. км`;
}

export function saveLocation(location: GeoLocation) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(location));
}

export function getSavedLocation(): GeoLocation | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as GeoLocation;
    if (
      typeof parsed.city !== "string" ||
      typeof parsed.country !== "string" ||
      typeof parsed.lat !== "number" ||
      typeof parsed.lng !== "number"
    ) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function clearLocation() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
}

export const radiusOptions: Array<{ label: string; value: RadiusValue }> = [
  { label: "10 км", value: 10 },
  { label: "25 км", value: 25 },
  { label: "50 км", value: 50 },
  { label: "100 км", value: 100 },
  { label: "250 км", value: 250 },
  { label: "500 км", value: 500 },
  { label: "Вся страна", value: "country" },
  { label: "Весь мир", value: "world" }
];
