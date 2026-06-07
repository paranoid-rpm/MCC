import Link from "next/link";

const items = [
  ["Обзор", "/breeder/dashboard"],
  ["Котята", "/breeder/kittens"],
  ["Заявки", "/breeder/requests"],
  ["Документы", "/breeder/documents"],
  ["Настройки", "/breeder/settings"]
];

export default function BreederLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#f7f4ed]">
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-forest-700/10 bg-cream p-6 md:block">
        <p className="font-serif text-2xl text-pine">MaineCoonCity</p>
        <p className="mt-1 text-sm text-stone">Кабинет заводчика</p>
        <nav className="mt-8 grid gap-2">
          {items.map(([label, href]) => (
            <Link key={href} href={href} className="rounded-md px-3 py-2 text-sm hover:bg-forest-100">
              {label}
            </Link>
          ))}
        </nav>
      </aside>
      <section className="md:pl-64">{children}</section>
    </main>
  );
}
