CREATE EXTENSION IF NOT EXISTS postgis;

-- Production-ready nearby query sketch. MVP uses lib/geo.ts Haversine on mock data.
SELECT
  kittens.*,
  ST_Distance(
    ST_SetSRID(ST_MakePoint(kittens.lng::double precision, kittens.lat::double precision), 4326)::geography,
    ST_SetSRID(ST_MakePoint($1, $2), 4326)::geography
  ) / 1000 AS distance_km
FROM kittens
WHERE kittens.is_published = true
  AND ST_DWithin(
    ST_SetSRID(ST_MakePoint(kittens.lng::double precision, kittens.lat::double precision), 4326)::geography,
    ST_SetSRID(ST_MakePoint($1, $2), 4326)::geography,
    $3 * 1000
  )
ORDER BY distance_km ASC;
