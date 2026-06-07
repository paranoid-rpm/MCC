import { DashboardPage } from "@/components/layout/dashboard-page";

export default function Page() {
  return <DashboardPage title="Заявки" description="Покупатели и заявки заводчиков." items={["Покупатели", "Заводчики", "История"]} />;
}
