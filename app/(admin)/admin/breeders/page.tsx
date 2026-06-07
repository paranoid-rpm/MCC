import { DashboardPage } from "@/components/layout/dashboard-page";

export default function Page() {
  return <DashboardPage title="Заводчики" description="Проверка профилей и партнерских условий." items={["Новые", "Активные", "На проверке"]} />;
}
