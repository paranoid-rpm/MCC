import { DashboardPage } from "@/components/layout/dashboard-page";

export default function Page() {
  return <DashboardPage title="Объявления" description="Управление котятами в каталоге." items={["Опубликованы", "Черновики", "Архив"]} />;
}
