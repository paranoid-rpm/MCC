import { DashboardPage } from "@/components/layout/dashboard-page";

export default function Page() {
  return <DashboardPage title="Заявки" description="Обращения покупателей через MaineCoonCity." items={["Новые", "В работе", "Закрытые"]} />;
}
