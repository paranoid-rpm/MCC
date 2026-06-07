import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mccContact } from "@/lib/mock-data";

export const metadata = {
  title: "Контакты"
};

export default function ContactsPage() {
  return (
    <main className="relative overflow-hidden bg-cream/94 py-16">
      <div data-scroll-depth="0.12" data-scroll-fade="false" className="pointer-events-none absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-moss/18 to-transparent blur-2xl" />
      <div className="container-page grid min-w-0 gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <section data-reveal-depth className="min-w-0">
          <Badge tone="gold">contact</Badge>
          <h1 className="mt-5 break-words font-serif text-5xl font-semibold text-pine">
            Связь проходит через MaineCoonCity
          </h1>
          <p className="mt-5 leading-8 text-stone">
            Напишите или позвоните, чтобы уточнить котенка, документы, доставку
            и резерв. Телефоны заводчиков публично не публикуются.
          </p>
          <Button asChild size="lg" className="mt-8">
            <a href={mccContact.phoneHref}>
              <Phone size={18} />
              {mccContact.phoneLabel}
            </a>
          </Button>
          <p className="mt-4 text-sm text-stone">{mccContact.telegram}</p>
          <p className="mt-1 text-sm text-stone">{mccContact.whatsapp}</p>
          <p className="mt-1 text-sm text-stone">Ежедневно 10:00–20:00</p>
        </section>
        <form data-reveal-depth className="forest-card min-w-0 rounded-md p-6">
          <h2 className="font-serif text-3xl text-pine">Написать нам</h2>
          <div className="mt-5 grid gap-4">
            <input placeholder="Ваше имя" className="rounded-md border border-forest-700/15 bg-cream px-4 py-3 outline-none focus:border-pine" />
            <input placeholder="Телефон или Telegram" className="rounded-md border border-forest-700/15 bg-cream px-4 py-3 outline-none focus:border-pine" />
            <textarea placeholder="Какой котёнок заинтересовал?" rows={6} className="rounded-md border border-forest-700/15 bg-cream px-4 py-3 outline-none focus:border-pine" />
            <Button type="button">Отправить</Button>
          </div>
        </form>
      </div>
    </main>
  );
}
