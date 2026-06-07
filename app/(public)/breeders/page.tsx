import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const breederApplicationSchema = z.object({
  name: z.string().min(2),
  city: z.string().min(2),
  phone: z.string().min(6),
  about: z.string().min(10)
});

const steps = [
  "Заполняете заявку и рассказываете о питомнике.",
  "MaineCoonCity проверяет базовую информацию и условия объявлений.",
  "Котята проходят модерацию перед публикацией.",
  "Комиссия сервиса для партнерских объявлений составляет 7%."
];

export const metadata = {
  title: "Заводчикам"
};

export default function BreedersPage() {
  void breederApplicationSchema;

  return (
    <main className="relative overflow-hidden bg-cream/94 py-16">
      <div data-scroll-depth="0.16" data-scroll-fade="false" className="pointer-events-none absolute -left-20 top-8 h-72 w-72 rounded-full bg-gold/16 blur-3xl" />
      <div className="container-page grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
        <section data-reveal-depth>
          <Badge tone="forest">для заводчиков</Badge>
          <h1 className="mt-5 font-serif text-5xl font-semibold text-pine md:text-6xl">
            Партнерский каталог без публичного телефона заводчика
          </h1>
          <p className="mt-5 leading-8 text-stone">
            Заводчик получает закрытый кабинет, модерацию объявлений, заявки и
            аккуратную витрину. Публичная связь проходит через MaineCoonCity.
          </p>
          <div className="mt-8 grid gap-3">
            {steps.map((step, index) => (
              <div key={step} data-reveal-depth className="rounded-md border border-forest-700/10 bg-white/50 p-4">
                <b className="text-gold">0{index + 1}</b>
                <span className="ml-3 text-sm text-charcoal/76">{step}</span>
              </div>
            ))}
          </div>
        </section>
        <form data-reveal-depth className="forest-card rounded-md p-6">
          <h2 className="font-serif text-3xl text-pine">Заявка на подключение</h2>
          <div className="mt-5 grid gap-4">
            {[
              ["name", "Имя"],
              ["city", "Город"],
              ["phone", "Контакт для MaineCoonCity"]
            ].map(([name, label]) => (
              <label key={name} className="grid gap-2 text-sm font-medium text-pine">
                {label}
                <input name={name} className="rounded-md border border-forest-700/15 bg-cream px-4 py-3 outline-none focus:border-pine" />
              </label>
            ))}
            <label className="grid gap-2 text-sm font-medium text-pine">
              О питомнике
              <textarea name="about" rows={5} className="rounded-md border border-forest-700/15 bg-cream px-4 py-3 outline-none focus:border-pine" />
            </label>
            <label className="flex gap-3 text-sm leading-6 text-stone">
              <input type="checkbox" className="mt-1" />
              Согласен, что публичные обращения покупателей идут через
              MaineCoonCity, а условия подтверждаются перед сделкой.
            </label>
            <Button type="button">Отправить заявку</Button>
          </div>
        </form>
      </div>
    </main>
  );
}
