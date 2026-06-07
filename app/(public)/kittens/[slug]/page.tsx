import Image from "next/image";
import { notFound } from "next/navigation";
import { Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedKittenCard } from "@/components/catalog/animated-kitten-card";
import { allKittens, mccContact } from "@/lib/mock-data";

export function generateStaticParams() {
  return allKittens.map((kitten) => ({ slug: kitten.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const kitten = allKittens.find((item) => item.slug === slug);
  return { title: kitten ? `${kitten.name} - мейн-кун` : "Котенок" };
}

export default async function KittenPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const kitten = allKittens.find((item) => item.slug === slug);
  if (!kitten) notFound();

  const similar = allKittens
    .filter((item) => item.slug !== kitten.slug && item.city === kitten.city)
    .slice(0, 3);

  return (
    <main className="relative overflow-hidden bg-[#070907]/92 py-28">
      <div data-scroll-depth="0.16" data-scroll-fade="false" className="pointer-events-none absolute -right-28 top-20 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="container-page grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
        <div data-scroll-depth="0.08" data-scroll-fade="false" className="grid gap-3">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-charcoal">
            <Image src={kitten.image} alt={`Мейн-кун ${kitten.name}`} fill priority className="object-cover" />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {kitten.gallery.map((image) => (
              <div key={image} className="relative aspect-[4/3] overflow-hidden rounded-xl bg-charcoal">
                <Image src={image} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        <aside data-reveal-depth className="forest-card h-fit rounded-2xl p-7">
          <div className="flex flex-wrap gap-2">
            <Badge tone="gold">{kitten.status}</Badge>
            <Badge tone="forest">{kitten.city}</Badge>
            {kitten.hasWcf ? <Badge tone="forest">WCF</Badge> : null}
          </div>
          <h1 className="mt-5 font-serif text-6xl font-semibold text-cream">
            {kitten.name}
          </h1>
          <p className="mt-3 text-2xl font-semibold text-gold">
            {kitten.price.toLocaleString("ru-RU")} ₽
          </p>
          <p className="mt-5 leading-7 text-cream/68">{kitten.description}</p>
          <div className="mt-6 grid gap-3 text-sm text-cream/68">
            <p><b>Возраст:</b> {kitten.age}</p>
            <p><b>Пол:</b> {kitten.gender}</p>
            <p><b>Окрас:</b> {kitten.color}</p>
            <p><b>Заводчик:</b> {kitten.breeder}</p>
            <p><b>Документы:</b> {kitten.documents.join(", ")}</p>
            <p><b>Здоровье:</b> {kitten.health}</p>
            <p><b>Родители:</b> {kitten.parents}</p>
            <p><b>Доставка:</b> {kitten.delivery.join(", ")}</p>
          </div>
          <Button asChild size="lg" variant="gold" className="mt-7 w-full rounded-xl">
            <a href={mccContact.phoneHref}>
              <Phone size={18} />
              Позвонить MaineCoonCity
            </a>
          </Button>
          <p className="mt-4 text-xs leading-5 text-cream/52">
            Публично указан только контакт MaineCoonCity. Условия документов, доставки, резерва и гарантий подтверждаются перед сделкой.
          </p>
        </aside>
      </div>

      <section data-reveal-depth className="container-page mt-16">
        <h2 className="font-serif text-5xl text-cream">Похожие котята</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {(similar.length ? similar : allKittens.slice(0, 3)).map((item) => (
            <AnimatedKittenCard key={item.id} kitten={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
