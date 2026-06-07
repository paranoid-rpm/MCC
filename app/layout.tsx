import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MaineCoonCity — мейн-куны северного леса",
    template: "%s | MaineCoonCity"
  },
  description:
    "Премиальный каталог мейн-кунов с геопоиском, радиусом и единым контактом MaineCoonCity."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
