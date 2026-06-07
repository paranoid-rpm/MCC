import Link from "next/link";
import { mccContact } from "@/lib/mock-data";

export function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-[#070907] py-12 text-cream">
      <div className="container-page grid gap-8 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <p className="font-serif text-3xl">MaineCoonCity</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-cream/62">
            Премиальный каталог мейн-кунов от MaineCoonCity и партнерских заводчиков. Связь с покупателями проходит через единый контакт.
          </p>
        </div>
        <div className="grid gap-2 text-sm text-cream/72">
          <Link href="/kittens">Котята</Link>
          <Link href="/maine-coon">О породе</Link>
          <Link href="/breeders">Заводчикам</Link>
          <Link href="/contacts">Контакты</Link>
        </div>
        <div className="text-sm text-cream/72">
          <p className="font-semibold text-cream">Контакт MaineCoonCity</p>
          <a className="mt-2 block" href={mccContact.phoneHref}>
            {mccContact.phoneLabel}
          </a>
          <p className="mt-1">{mccContact.telegram}</p>
        </div>
      </div>
    </footer>
  );
}
