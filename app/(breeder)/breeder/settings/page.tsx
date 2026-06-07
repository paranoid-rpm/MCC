import { DashboardPage } from "@/components/layout/dashboard-page";

export default function Page() {
  return <DashboardPage title="Настройки заводчика" description="Профиль, доставка и параметры публикации." items={["Профиль", "Доставка", "Безопасность"]} />;
}
