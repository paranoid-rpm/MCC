import { NearbyKittensSection } from "@/components/geo/nearby-kittens-section";
import { allKittens } from "@/lib/mock-data";

export const metadata = {
  title: "Каталог котят"
};

export default function KittensPage() {
  return (
    <main className="relative overflow-hidden bg-[#070907]/92 pb-20 pt-28">
      <section data-reveal-depth className="container-page pb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-gold">
          catalog
        </p>
        <h1 className="mt-3 font-serif text-5xl font-semibold uppercase leading-[0.9] text-cream md:text-7xl">
          Каталог мейн-кунов
        </h1>
        <p className="mt-5 max-w-3xl leading-7 text-cream/62">
          Поиск, город, радиус, документы, доставка и сортировка по расстоянию. Телефон заводчика публично не показывается: связь проходит через MaineCoonCity.
        </p>
      </section>
      <NearbyKittensSection kittens={allKittens} title="Все котята рядом" />
    </main>
  );
}
