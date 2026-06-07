"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileCheck2, MapPin, Phone, Star, Truck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DistanceBadge } from "@/components/catalog/distance-badge";
import type { Kitten } from "@/lib/mock-data";
import { mccContact } from "@/lib/mock-data";

export function AnimatedKittenCard({
  kitten,
  distance
}: {
  kitten: Kitten;
  distance?: number | null;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="group overflow-hidden rounded-2xl border border-cream/12 bg-[#0b0f0c]/84 shadow-[0_28px_90px_rgba(0,0,0,.28)] backdrop-blur-xl"
    >
      <Link href={`/kittens/${kitten.slug}`} className="block">
        <div className="relative aspect-[4/4.7] overflow-hidden bg-charcoal">
          <Image
            src={kitten.image}
            alt={`Мейн-кун ${kitten.name}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/12 to-transparent" />
          <div className="absolute left-4 top-4 flex gap-2">
            <Badge tone={kitten.status === "Доступен" ? "gold" : "cream"}>
              {kitten.status}
            </Badge>
            {kitten.hasWcf ? <Badge tone="forest">WCF</Badge> : null}
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h3 className="font-serif text-4xl font-semibold text-cream">
                  {kitten.name}
                </h3>
                <p className="mt-1 flex items-center gap-2 text-sm text-cream/70">
                  <MapPin size={15} />
                  {kitten.city}
                </p>
              </div>
              <p className="text-right text-xl font-semibold text-gold">
                {kitten.price.toLocaleString("ru-RU")} ₽
              </p>
            </div>
          </div>
        </div>
      </Link>

      <div className="grid gap-4 p-5">
        <div className="grid grid-cols-2 gap-2 text-xs text-cream/72">
          <span className="rounded-lg border border-cream/10 bg-cream/[0.06] px-3 py-2">
            {kitten.gender}, {kitten.age}
          </span>
          <span className="rounded-lg border border-cream/10 bg-cream/[0.06] px-3 py-2">
            {kitten.color}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          <DistanceBadge distance={distance} />
          <Badge tone="stone">
            <Star size={13} /> {kitten.rating.toFixed(1)}
          </Badge>
          <Badge tone="stone">
            <Truck size={13} /> доставка
          </Badge>
          <Badge tone="stone">
            <FileCheck2 size={13} /> документы
          </Badge>
        </div>

        <p className="text-sm leading-6 text-cream/62">
          {kitten.documents.join(", ")} · {kitten.delivery[0]}. Контакт только через MaineCoonCity.
        </p>

        <div className="grid grid-cols-2 gap-3">
          <Button asChild variant="secondary" className="rounded-lg">
            <Link href={`/kittens/${kitten.slug}`}>
              Подробнее <ArrowRight size={16} />
            </Link>
          </Button>
          <Button asChild variant="gold" className="rounded-lg">
            <a href={mccContact.phoneHref}>
              <Phone size={16} />
              Позвонить
            </a>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
