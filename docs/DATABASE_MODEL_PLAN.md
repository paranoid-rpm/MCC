# Database model plan

## Tables

- users
- breeder_profiles
- kittens
- kitten_photos
- breeds
- parent_cats
- documents
- reservation_requests
- reviews
- delivery_options
- cities
- admin_settings
- commission_records
- moderation_events

## Roles

- ADMIN
- BREEDER

No CLIENT role.

## Kittens important fields

- id
- slug
- name
- breed_id
- breeder_id
- status
- price_amount
- price_currency
- gender
- birth_date
- age_label
- color
- description
- health_info
- documents_info
- city
- region
- country
- lat
- lng
- geo_point geometry(Point, 4326)
- delivery_worldwide
- delivery_countrywide
- delivery_local_pickup
- delivery_courier
- is_good_hands
- is_published
- moderation_status
- created_at
- updated_at

## Geo

MVP:
- Haversine in `lib/geo.ts`
- coordinates in mock data

Production:
- PostGIS extension
- geography/geometry point
- distance queries
- spatial index
