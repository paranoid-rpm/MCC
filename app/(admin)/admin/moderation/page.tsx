import { DashboardPage } from "@/components/layout/dashboard-page";

export default function Page() {
  return <DashboardPage title="Модерация" description="Проверка текста, фото, документов и условий." items={["Очередь", "Нужны правки", "Одобрено"]} />;
}
