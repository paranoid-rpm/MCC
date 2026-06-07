import { Badge } from "@/components/ui/badge";

export function DashboardPage({
  title,
  description,
  items
}: {
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <div className="min-h-screen p-6 md:p-10">
      <Badge tone="stone">закрытый раздел</Badge>
      <h1 className="mt-5 font-serif text-4xl text-pine">{title}</h1>
      <p className="mt-3 max-w-2xl text-stone">{description}</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <article key={item} className="rounded-md border border-forest-700/10 bg-white p-5">
            <h2 className="font-semibold text-pine">{item}</h2>
            <p className="mt-2 text-sm leading-6 text-stone">
              MVP-заглушка для будущей серверной логики, Better Auth и Drizzle.
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
