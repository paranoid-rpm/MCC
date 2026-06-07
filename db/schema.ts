import {
  boolean,
  integer,
  numeric,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  uuid
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const userRole = pgEnum("user_role", ["ADMIN", "BREEDER"]);
export const kittenStatus = pgEnum("kitten_status", [
  "AVAILABLE",
  "RESERVED",
  "MOVING_SOON",
  "GOOD_HANDS"
]);
export const moderationStatus = pgEnum("moderation_status", [
  "DRAFT",
  "PENDING",
  "APPROVED",
  "REJECTED"
]);

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name").notNull(),
  role: userRole("role").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull()
});

export const breederProfiles = pgTable("breeder_profiles", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").references(() => users.id).notNull(),
  displayName: text("display_name").notNull(),
  city: text("city").notNull(),
  country: text("country").notNull(),
  publicDescription: text("public_description"),
  internalPhone: text("internal_phone"),
  rating: numeric("rating", { precision: 3, scale: 2 }).default("0").notNull(),
  commissionPercent: integer("commission_percent").default(7).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull()
});

export const breeds = pgTable("breeds", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
  description: text("description")
});

export const cities = pgTable("cities", {
  id: serial("id").primaryKey(),
  city: text("city").notNull(),
  region: text("region"),
  country: text("country").notNull(),
  lat: numeric("lat", { precision: 10, scale: 7 }).notNull(),
  lng: numeric("lng", { precision: 10, scale: 7 }).notNull(),
  geoPoint: text("geo_point").notNull()
});

export const kittens = pgTable("kittens", {
  id: uuid("id").defaultRandom().primaryKey(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  breedId: integer("breed_id").references(() => breeds.id),
  breederId: uuid("breeder_id").references(() => breederProfiles.id).notNull(),
  status: kittenStatus("status").default("AVAILABLE").notNull(),
  priceAmount: integer("price_amount").notNull(),
  priceCurrency: text("price_currency").default("RUB").notNull(),
  gender: text("gender").notNull(),
  birthDate: timestamp("birth_date", { withTimezone: true }),
  ageLabel: text("age_label").notNull(),
  color: text("color").notNull(),
  description: text("description").notNull(),
  healthInfo: text("health_info"),
  documentsInfo: text("documents_info"),
  city: text("city").notNull(),
  region: text("region"),
  country: text("country").notNull(),
  lat: numeric("lat", { precision: 10, scale: 7 }).notNull(),
  lng: numeric("lng", { precision: 10, scale: 7 }).notNull(),
  geoPoint: text("geo_point").notNull(),
  deliveryWorldwide: boolean("delivery_worldwide").default(false).notNull(),
  deliveryCountrywide: boolean("delivery_countrywide").default(false).notNull(),
  deliveryLocalPickup: boolean("delivery_local_pickup").default(true).notNull(),
  deliveryCourier: boolean("delivery_courier").default(false).notNull(),
  isGoodHands: boolean("is_good_hands").default(false).notNull(),
  isPublished: boolean("is_published").default(false).notNull(),
  moderationStatus: moderationStatus("moderation_status").default("DRAFT").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull()
});

export const kittenPhotos = pgTable("kitten_photos", {
  id: uuid("id").defaultRandom().primaryKey(),
  kittenId: uuid("kitten_id").references(() => kittens.id).notNull(),
  url: text("url").notNull(),
  alt: text("alt").notNull(),
  sortOrder: integer("sort_order").default(0).notNull()
});

export const parentCats = pgTable("parent_cats", {
  id: uuid("id").defaultRandom().primaryKey(),
  kittenId: uuid("kitten_id").references(() => kittens.id).notNull(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  documentsInfo: text("documents_info")
});

export const documents = pgTable("documents", {
  id: uuid("id").defaultRandom().primaryKey(),
  kittenId: uuid("kitten_id").references(() => kittens.id),
  breederId: uuid("breeder_id").references(() => breederProfiles.id),
  type: text("type").notNull(),
  status: moderationStatus("status").default("PENDING").notNull(),
  privateUrl: text("private_url")
});

export const reservationRequests = pgTable("reservation_requests", {
  id: uuid("id").defaultRandom().primaryKey(),
  kittenId: uuid("kitten_id").references(() => kittens.id).notNull(),
  customerName: text("customer_name").notNull(),
  customerContact: text("customer_contact").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull()
});

export const reviews = pgTable("reviews", {
  id: uuid("id").defaultRandom().primaryKey(),
  displayName: text("display_name").notNull(),
  city: text("city"),
  text: text("text").notNull(),
  rating: integer("rating").notNull(),
  isPublished: boolean("is_published").default(false).notNull()
});

export const deliveryOptions = pgTable("delivery_options", {
  id: uuid("id").defaultRandom().primaryKey(),
  kittenId: uuid("kitten_id").references(() => kittens.id).notNull(),
  title: text("title").notNull(),
  description: text("description")
});

export const adminSettings = pgTable("admin_settings", {
  id: serial("id").primaryKey(),
  key: text("key").notNull().unique(),
  value: text("value").notNull()
});

export const commissionRecords = pgTable("commission_records", {
  id: uuid("id").defaultRandom().primaryKey(),
  breederId: uuid("breeder_id").references(() => breederProfiles.id).notNull(),
  kittenId: uuid("kitten_id").references(() => kittens.id),
  percent: integer("percent").default(7).notNull(),
  amount: integer("amount").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull()
});

export const moderationEvents = pgTable("moderation_events", {
  id: uuid("id").defaultRandom().primaryKey(),
  actorId: uuid("actor_id").references(() => users.id).notNull(),
  kittenId: uuid("kitten_id").references(() => kittens.id),
  event: text("event").notNull(),
  note: text("note"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull()
});

export const postgisSetupSql = sql`
  CREATE EXTENSION IF NOT EXISTS postgis;
  -- Production expression example:
  -- ST_SetSRID(ST_MakePoint(lng, lat), 4326)
  -- CREATE INDEX kittens_geo_idx ON kittens USING GIST (geo_point);
`;
