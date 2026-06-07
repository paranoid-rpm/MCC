import { DashboardPage } from "@/components/layout/dashboard-page";

export default function Page() {
  return <DashboardPage title="Админка" description="Модерация, заводчики, объявления, заявки и комиссия сервиса." items={["Заводчики", "Объявления", "Модерация", "Заявки", "Отзывы", "Комиссия 7%"]} />;
}
