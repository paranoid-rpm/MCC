import { DashboardPage } from "@/components/layout/dashboard-page";

export default function Page() {
  return <DashboardPage title="Документы" description="Метрики, ветпаспорта и подтверждения условий." items={["Метрики", "Ветпаспорта", "WCF"]} />;
}
