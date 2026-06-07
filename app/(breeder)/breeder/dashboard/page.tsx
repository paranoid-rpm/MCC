import { DashboardPage } from "@/components/layout/dashboard-page";

export default function Page() {
  return <DashboardPage title="Кабинет заводчика" description="Обзор объявлений, заявок, документов и доставки." items={["Мои объявления", "Добавить котёнка", "Заявки", "Документы", "Профиль", "Доставка"]} />;
}
