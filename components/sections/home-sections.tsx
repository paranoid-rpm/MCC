import Link from "next/link";
import { CheckCircle2, FileCheck2, MapPin, ShieldCheck, Truck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MotionSection } from "@/components/sections/motion-section";
import { faq, reviews } from "@/lib/mock-data";

const features = [
  ["Единый контакт", "Публичная связь проходит через MaineCoonCity, без телефона заводчика в карточке."],
  ["Геопоиск", "Каталог сортирует котят по расстоянию, выбранному городу и радиусу."],
  ["Честные условия", "Документы, доставка, резерв и гарантии подтверждаются перед сделкой."]
];

const featureIcons = [ShieldCheck, MapPin, FileCheck2];

export function TrustBadges() {
  return (
    <section className="relative overflow-hidden bg-[#070907] py-14">
      <div data-scroll-depth="0.18" data-scroll-fade="false" className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-gold/8 to-transparent blur-2xl" />
      <div className="container-page grid gap-3 md:grid-cols-3">
        {features.map(([title, text], index) => {
          const Icon = featureIcons[index];
          return (
            <div key={title} data-reveal-depth className="forest-card rounded-2xl p-6">
              <div className="mb-5 text-gold">
                <Icon size={24} />
              </div>
              <h3 className="font-serif text-3xl text-cream">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-cream/62">{text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    "Выбираете город или разрешаете геолокацию.",
    "Смотрите котят в удобном радиусе и фильтруете каталог.",
    "Связываетесь с MaineCoonCity, чтобы подтвердить условия.",
    "Документы, резерв и доставка фиксируются перед сделкой."
  ];

  return (
    <MotionSection className="relative overflow-hidden bg-[#0b0f0c]">
      <div data-scroll-depth="0.2" data-scroll-fade="false" className="pointer-events-none absolute -right-20 top-12 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
      <div className="container-page">
        <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-gold">process</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold uppercase leading-[0.9] text-cream md:text-7xl">
              Как это работает
            </h2>
          </div>
          <p className="max-w-2xl text-cream/62">
            Мы сохраняем премиальный выбор спокойным: меньше обещаний, больше проверяемых условий и ясный путь до резерва.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step} data-reveal-depth className="rounded-2xl border border-cream/12 bg-cream/[0.055] p-5">
              <Badge tone="gold">0{index + 1}</Badge>
              <p className="mt-5 text-sm leading-6 text-cream/68">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

export function PopularKittensIntro() {
  return (
    <section className="relative overflow-hidden bg-[#070907] py-10">
      <div data-scroll-depth="0.16" data-scroll-fade="false" className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-pine/28 to-transparent" />
      <div data-reveal-depth className="container-page rounded-2xl border border-cream/12 bg-[linear-gradient(135deg,rgba(244,239,229,.08),rgba(200,169,105,.08))] p-6 md:p-8">
        <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <Badge tone="gold">popular listings</Badge>
            <h2 className="mt-4 font-serif text-4xl text-cream md:text-5xl">
              Популярные котята в dark luxury каталоге
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-cream/62">
              Карточки построены как destination panels: крупное фото, расстояние, документы, цена и быстрый контакт MaineCoonCity.
            </p>
          </div>
          <Button asChild variant="gold" className="rounded-xl">
            <Link href="/kittens">Открыть каталог</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function BreedAndBreederBlocks() {
  return (
    <MotionSection className="relative overflow-hidden bg-[#070907]">
      <div data-scroll-depth="0.12" data-scroll-fade="false" className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-moss/10 to-transparent blur-2xl" />
      <div className="container-page grid gap-5 lg:grid-cols-2">
        <div data-reveal-depth className="rounded-2xl border border-cream/12 bg-[#101d18] p-8 text-cream">
          <Badge tone="cream">О породе</Badge>
          <h2 className="mt-5 font-serif text-5xl leading-none">Большой характер северного кота</h2>
          <p className="mt-5 leading-7 text-cream/68">
            Мейн-кун взрослеет спокойно, требует пространства, регулярного ухода за шерстью и внимательного выбора питания. Мы честно показываем, кому эта порода подходит.
          </p>
          <Button asChild variant="gold" className="mt-7 rounded-xl">
            <Link href="/maine-coon">Узнать о породе</Link>
          </Button>
        </div>
        <div data-reveal-depth className="rounded-2xl border border-gold/18 bg-[#16120c] p-8">
          <Badge tone="gold">Заводчикам</Badge>
          <h2 className="mt-5 font-serif text-5xl leading-none text-cream">
            Партнерский каталог с комиссией 7%
          </h2>
          <p className="mt-5 leading-7 text-cream/68">
            У заводчика есть закрытый кабинет, модерация объявлений и заявки. Публичные обращения идут через MaineCoonCity.
          </p>
          <Button asChild className="mt-7 rounded-xl">
            <Link href="/breeders">Подключиться</Link>
          </Button>
        </div>
      </div>
    </MotionSection>
  );
}

export function ReviewsAndFaq() {
  return (
    <MotionSection className="relative overflow-hidden bg-[#0b0f0c] text-cream">
      <div data-scroll-depth="0.18" data-scroll-fade="false" className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-cream/8 blur-3xl" />
      <div className="container-page grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <Badge tone="cream">Доверие</Badge>
          <h2 className="mt-5 font-serif text-5xl uppercase leading-[0.92] md:text-7xl">
            Спокойный выбор без громких обещаний
          </h2>
          <p className="mt-5 leading-7 text-cream/62">
            Мы не преувеличиваем партнерские гарантии. Помогаем проверить важную информацию, а условия подтверждаются перед сделкой.
          </p>
        </div>
        <div className="grid gap-4">
          {reviews.map((review) => (
            <div key={review.name} data-reveal-depth className="rounded-2xl border border-cream/10 bg-cream/[0.055] p-5">
              <p className="text-cream/76">"{review.text}"</p>
              <p className="mt-3 text-sm font-semibold text-gold">{review.name}</p>
            </div>
          ))}
          <div className="mt-4 grid gap-3">
            {faq.map((item) => (
              <details key={item.question} className="rounded-2xl border border-cream/10 bg-cream/[0.055] p-5">
                <summary className="cursor-pointer font-semibold">{item.question}</summary>
                <p className="mt-3 text-sm leading-6 text-cream/62">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

export function AssuranceStrip() {
  return (
    <section className="border-y border-cream/10 bg-black/35 py-5 text-cream">
      <div className="container-page flex flex-wrap items-center justify-center gap-5 text-sm text-cream/72">
        <span className="inline-flex items-center gap-2"><CheckCircle2 size={16} /> Без клиентского кабинета</span>
        <span className="inline-flex items-center gap-2"><Truck size={16} /> Доставка указана в карточке</span>
        <span className="inline-flex items-center gap-2"><Users size={16} /> Связь через MaineCoonCity</span>
        <span className="inline-flex items-center gap-2"><FileCheck2 size={16} /> Условия подтверждаются перед сделкой</span>
      </div>
    </section>
  );
}
