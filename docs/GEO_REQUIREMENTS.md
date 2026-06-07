# Geo / nearby requirements

## UX

Ask:
“Показать котят рядом с вами?”

Buttons:
- Определить автоматически
- Выбрать город вручную
- Не сейчас

## Radius

- 10 км
- 25 км
- 50 км
- 100 км
- 250 км
- 500 км
- Вся страна
- Весь мир

## Components

- GeoPermissionBanner
- LocationSelector
- LocationModal
- RadiusFilter
- DistanceBadge
- NearbyKittensSection
- CityAutocompleteMock

## lib/geo.ts

- calculateDistanceKm
- sortByDistance
- filterByRadius
- formatDistance
- saveLocation
- getSavedLocation
- clearLocation

## Privacy

- For MVP store geolocation in localStorage only.
- Do not send exact user coordinates to breeders.
- Do not show exact breeder address publicly.
- Public listing shows city/country + approximate distance.
