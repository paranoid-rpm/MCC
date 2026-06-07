import { Badge } from "@/components/ui/badge";

const blocks = [
  ["Характер", "Мейн-кун обычно дружелюбен, наблюдателен и любит быть рядом, не требуя постоянного внимания."],
  ["Размер", "Порода крупная: важны пространство, устойчивые когтеточки и спокойная адаптация дома."],
  ["Уход", "Нужны регулярное вычесывание, контроль когтей, уход за ушами и плановые визиты к ветеринару."],
  ["Питание", "Рацион подбирают по возрасту, активности и рекомендациям заводчика или ветеринара."],
  ["Документы", "Метрика, ветпаспорт и условия передачи указываются в карточке и подтверждаются перед сделкой."],
  ["Переезд", "Котенок готов к переезду после базовой социализации и ветеринарных процедур по возрасту."]
];

export const metadata = {
  title: "О породе мейн-кун"
};

export default function MaineCoonPage() {
  return (
    <main className="relative overflow-hidden bg-cream/94 py-16">
      <div data-scroll-depth="0.1" data-scroll-fade="false" className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gold/20 to-transparent blur-2xl" />
      <div data-reveal-depth className="container-page">
        <Badge tone="gold">breed guide</Badge>
        <h1 className="mt-5 max-w-3xl break-words font-serif text-4xl font-semibold text-pine md:text-6xl">
          Мейн-кун: крупный, спокойный, внимательный
        </h1>
        <p className="mt-5 max-w-3xl leading-8 text-stone">
          Эта порода подходит тем, кто готов к большому коту, регулярному уходу
          и честному разговору о здоровье, документах и условиях переезда.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {blocks.map(([title, text]) => (
            <article key={title} data-reveal-depth className="forest-card rounded-md p-6">
              <h2 className="font-serif text-3xl text-pine">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-charcoal/72">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
