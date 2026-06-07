import type { GeoLocation } from "@/lib/geo";

export type KittenStatus = "Доступен" | "Резерв" | "Скоро переезд" | "В добрые руки";

export type Kitten = {
  id: string;
  slug: string;
  name: string;
  price: number;
  status: KittenStatus;
  gender: "кот" | "кошка";
  age: string;
  color: string;
  city: string;
  region: string;
  country: string;
  lat: number;
  lng: number;
  breeder: string;
  rating: number;
  documents: string[];
  hasWcf: boolean;
  delivery: string[];
  image: string;
  gallery: string[];
  description: string;
  health: string;
  parents: string;
  createdAt: string;
};

export const mccContact = {
  phoneLabel: "+7 900 000-00-00",
  phoneHref: "tel:+79000000000",
  telegram: "Telegram: @mainecooncity",
  whatsapp: "WhatsApp: подключается"
};

export const cities: GeoLocation[] = [
  { city: "Москва", country: "Россия", lat: 55.7558, lng: 37.6173 },
  { city: "Санкт-Петербург", country: "Россия", lat: 59.9311, lng: 30.3609 },
  { city: "Казань", country: "Россия", lat: 55.7961, lng: 49.1064 },
  { city: "Екатеринбург", country: "Россия", lat: 56.8389, lng: 60.6057 },
  { city: "Минск", country: "Беларусь", lat: 53.9006, lng: 27.559 },
  { city: "Алматы", country: "Казахстан", lat: 43.2389, lng: 76.8897 }
];

const kittenImages = Array.from(
  { length: 16 },
  (_, index) => `/images/kittens/kitten-${String(index + 1).padStart(2, "0")}.webp`
);

const baseCopy =
  "Партнерское объявление: условия документов, доставки, резерва и гарантий указаны в карточке и подтверждаются перед сделкой. Связь проходит через MaineCoonCity.";

export const kittens: Kitten[] = [
  {
    id: "k-001",
    slug: "nord-cedar",
    name: "Норд",
    price: 145000,
    status: "Доступен",
    gender: "кот",
    age: "3 месяца",
    color: "черный серебристый мрамор",
    city: "Москва",
    region: "Москва",
    country: "Россия",
    lat: 55.7558,
    lng: 37.6173,
    breeder: "Cedar Valley",
    rating: 4.9,
    documents: ["метрика", "ветпаспорт"],
    hasWcf: true,
    delivery: ["самовывоз", "курьер по РФ"],
    image: kittenImages[0],
    gallery: kittenImages.slice(0, 4),
    description: "Спокойный крупный котенок с уверенным характером. " + baseCopy,
    health: "Обработки по возрасту, вакцинация по графику, ветпаспорт.",
    parents: "Родители с родословными, данные проверяются перед передачей.",
    createdAt: "2026-05-17"
  },
  {
    id: "k-002",
    slug: "taiga-mira",
    name: "Мира",
    price: 132000,
    status: "Доступен",
    gender: "кошка",
    age: "4 месяца",
    color: "голубой дым",
    city: "Санкт-Петербург",
    region: "Ленинградская область",
    country: "Россия",
    lat: 59.9311,
    lng: 30.3609,
    breeder: "Northern Mist",
    rating: 4.8,
    documents: ["метрика", "WCF"],
    hasWcf: true,
    delivery: ["самовывоз", "доставка обсуждается"],
    image: kittenImages[1],
    gallery: [kittenImages[1], kittenImages[2], kittenImages[0]],
    description: "Любопытная кошка с плотной шерстью и мягким темпераментом. " + baseCopy,
    health: "Осмотрена ветеринаром, готовность к переезду уточняется.",
    parents: "Отец крупного типа, мать с устойчивым породным темпераментом.",
    createdAt: "2026-05-11"
  },
  {
    id: "k-003",
    slug: "cedar-runa",
    name: "Руна",
    price: 118000,
    status: "Скоро переезд",
    gender: "кошка",
    age: "2,5 месяца",
    color: "черепаховый дым",
    city: "Казань",
    region: "Татарстан",
    country: "Россия",
    lat: 55.7961,
    lng: 49.1064,
    breeder: "Forest Line",
    rating: 4.7,
    documents: ["ветпаспорт"],
    hasWcf: false,
    delivery: ["курьер по РФ"],
    image: kittenImages[2],
    gallery: [kittenImages[2], kittenImages[3], kittenImages[1]],
    description: "Аккуратная кошка с живым интересом к людям. " + baseCopy,
    health: "Первичная обработка выполнена, вакцинация по возрасту.",
    parents: "Информация о родителях доступна при обсуждении резерва.",
    createdAt: "2026-05-08"
  },
  {
    id: "k-004",
    slug: "moss-ivar",
    name: "Ивар",
    price: 99000,
    status: "Резерв",
    gender: "кот",
    age: "5 месяцев",
    color: "красный мрамор",
    city: "Екатеринбург",
    region: "Свердловская область",
    country: "Россия",
    lat: 56.8389,
    lng: 60.6057,
    breeder: "Moss Ridge",
    rating: 4.9,
    documents: ["метрика", "ветпаспорт"],
    hasWcf: true,
    delivery: ["самовывоз", "авиа обсуждается"],
    image: kittenImages[3],
    gallery: [kittenImages[3], kittenImages[0], kittenImages[1]],
    description: "Уверенный кот с выразительной мордой и крепким костяком. " + baseCopy,
    health: "Полный ветеринарный пакет по возрасту.",
    parents: "Родители живут в питомнике, возможны дополнительные фото.",
    createdAt: "2026-05-02"
  }
];

const extraCities = [
  ["minsk-loki", "Локи", "Минск", "Беларусь", 53.9006, 27.559],
  ["almaty-saga", "Сага", "Алматы", "Казахстан", 43.2389, 76.8897],
  ["moscow-veda", "Веда", "Москва", "Россия", 55.8, 37.5],
  ["spb-borey", "Борей", "Санкт-Петербург", "Россия", 59.88, 30.41],
  ["kazan-elve", "Эльва", "Казань", "Россия", 55.74, 49.18],
  ["ekb-cedar", "Кедр", "Екатеринбург", "Россия", 56.89, 60.55],
  ["moscow-lara", "Лара", "Москва", "Россия", 55.7, 37.72],
  ["spb-frey", "Фрей", "Санкт-Петербург", "Россия", 59.96, 30.27],
  ["kazan-orda", "Орда", "Казань", "Россия", 55.83, 49.05],
  ["minsk-ares", "Арес", "Минск", "Беларусь", 53.85, 27.62],
  ["almaty-iris", "Ирис", "Алматы", "Казахстан", 43.19, 76.95],
  ["ekb-marta", "Марта", "Екатеринбург", "Россия", 56.8, 60.65]
] as const;

export const allKittens: Kitten[] = [
  ...kittens,
  ...extraCities.map((item, index): Kitten => ({
    id: `k-${String(index + 5).padStart(3, "0")}`,
    slug: item[0],
    name: item[1],
    price: 82000 + index * 7000,
    status:
      index % 5 === 0
        ? "В добрые руки"
        : index % 3 === 0
          ? "Скоро переезд"
          : "Доступен",
    gender: index % 2 === 0 ? "кот" : "кошка",
    age: `${3 + (index % 4)} месяца`,
    color: ["черный дым", "серебристый мрамор", "голубой солид", "браун табби"][index % 4],
    city: item[2],
    region: item[2],
    country: item[3],
    lat: item[4],
    lng: item[5],
    breeder: ["Cedar Valley", "Northern Mist", "Forest Line", "Moss Ridge"][index % 4],
    rating: 4.6 + (index % 4) / 10,
    documents: index % 2 === 0 ? ["метрика", "ветпаспорт"] : ["ветпаспорт"],
    hasWcf: index % 3 !== 0,
    delivery: index % 2 === 0 ? ["доставка по РФ"] : ["самовывоз", "доставка обсуждается"],
    image: kittenImages[(index + 4) % kittenImages.length],
    gallery: [
      kittenImages[(index + 4) % kittenImages.length],
      kittenImages[(index + 5) % kittenImages.length],
      kittenImages[(index + 6) % kittenImages.length]
    ],
    description: baseCopy,
    health: "Состояние здоровья и ветеринарные отметки проверяются перед передачей.",
    parents: "Информация о родителях доступна при обсуждении резерва.",
    createdAt: `2026-05-${String(20 - index).padStart(2, "0")}`
  }))
];

export const reviews = [
  {
    name: "Анна, Москва",
    text: "Понравилось, что связь шла через один контакт, а документы спокойно сверили до резерва."
  },
  {
    name: "Илья, Санкт-Петербург",
    text: "Каталог помог быстро понять, кто рядом, а где нужна доставка. Без лишнего давления."
  },
  {
    name: "Мария, Казань",
    text: "Условия по котенку подтвердили перед сделкой, все было прозрачно и по делу."
  }
];

export const faq = [
  {
    question: "Можно ли связаться напрямую с заводчиком?",
    answer:
      "Публичная связь проходит через MaineCoonCity. Так проще подтвердить условия, документы и этапы резерва."
  },
  {
    question: "Что означает комиссия 7%?",
    answer:
      "Для партнерских заводчиков комиссия сервиса составляет 7%. Для покупателя условия сделки подтверждаются заранее."
  },
  {
    question: "Геолокация обязательна?",
    answer:
      "Нет. Можно выбрать город вручную, а точные координаты сохраняются только в вашем браузере для MVP."
  }
];
