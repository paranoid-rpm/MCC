import { DashboardPage } from "@/components/layout/dashboard-page";

export default function Page() {
  return <DashboardPage title="Мои котята" description="Управление объявлениями заводчика." items={["Черновики", "На модерации", "Опубликованы"]} />;
}
