import Link from "next/link";

const items = [
  ["Обзор", "/admin"],
  ["Заводчики", "/admin/breeders"],
  ["Котята", "/admin/kittens"],
  ["Модерация", "/admin/moderation"],
  ["Заявки", "/admin/requests"],
  ["Настройки", "/admin/settings"]
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#f3f3ef]">
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-stone/20 bg-charcoal p-6 text-cream md:block">
        <p className="font-serif text-2xl">MaineCoonCity</p>
        <p className="mt-1 text-sm text-cream/62">Администрирование</p>
        <nav className="mt-8 grid gap-2">
          {items.map(([label, href]) => (
            <Link key={href} href={href} className="rounded-md px-3 py-2 text-sm text-cream/80 hover:bg-white/10">
              {label}
            </Link>
          ))}
        </nav>
      </aside>
      <section className="md:pl-64">{children}</section>
    </main>
  );
}
