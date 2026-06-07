# AGENTS.md — MaineCoonCity V2

Ты работаешь над **абсолютно новым проектом** MaineCoonCity V2.

Не опирайся на старый проект как на визуальный референс.  
Считать старый розовый/cloud/fantasy стиль неудачным.

## Роль

Работай как команда:

- principal product architect
- senior Next.js full-stack architect
- senior GSAP/Lenis parallax engineer
- premium visual designer
- marketplace UX architect
- geo-search/PostGIS engineer
- Russian conversion copywriter
- QA/performance/accessibility engineer

Работай автономно.  
Не задавай вопросы, если можно принять сильное разумное решение.

## Концепция V2

**MaineCoonCity — мейн-куны северного леса.**

Визуальный стиль:
- северный лес
- горы
- хвойные деревья
- туман
- солнечные лучи
- дерево, мох, хвоя
- крупный благородный Maine Coon
- дорогой premium marketplace
- естественный, атмосферный, не мультяшный

Не использовать:
- приторный cloud-city
- розовый fantasy
- дешёвый AI look
- шаблонный SaaS
- нейрослоп

## Технологический стек

- TypeScript
- Next.js App Router
- Tailwind CSS
- shadcn/ui + Radix UI
- GSAP ScrollTrigger
- Lenis
- Motion
- PostgreSQL + PostGIS
- Drizzle ORM
- Better Auth
- Cloudinary
- Zod
- React Hook Form

## Роуты

Публичные:
- `/`
- `/kittens`
- `/kittens/[slug]`
- `/maine-coon`
- `/breeders`
- `/contacts`

Закрытые:
- `/breeder/dashboard`
- `/breeder/kittens`
- `/breeder/requests`
- `/breeder/documents`
- `/breeder/settings`
- `/admin`
- `/admin/breeders`
- `/admin/kittens`
- `/admin/moderation`
- `/admin/requests`
- `/admin/settings`

## Public navbar

Публичное меню содержит только:
- Главная
- Котята
- О породе
- Заводчикам
- Контакты

Нельзя показывать в публичном navbar:
- Админка
- Кабинет
- Dashboard
- Login, если он выглядит как клиентский кабинет

## Бизнес-логика

- Клиентского личного кабинета нет.
- Заводчик имеет личный кабинет.
- Админ имеет админку.
- Во всех публичных карточках показывается только контакт MaineCoonCity.
- Телефон заводчика публично запрещён.
- Комиссия сервиса: 7%.
- Партнёрские гарантии не преувеличивать.
- Для партнёрских объявлений писать: условия документов, доставки, резерва и гарантий указываются в карточке и подтверждаются перед сделкой.

## Главная фишка

Сайт должен иметь настоящий **forest parallax scrolling**:

- layered scene
- mountains/deep forest layer
- middle forest layer
- fog/light rays layer
- foreground branches/particles layer
- Maine Coon hero layer
- transition into catalog cards
- smooth scroll
- mobile-safe simplification
- `prefers-reduced-motion`

Если hero выглядит как обычный баннер — это провал.

## Геопоиск

Каталог должен показывать ближайших котят:

- browser geolocation
- manual city selection
- radius filter
- sort by distance
- Haversine fallback
- PostGIS-ready architecture
- localStorage for MVP location
- no exact breeder address public

## Критерии готовности

Перед финалом:
- `npm run lint`
- `npm run build`
- проверить mobile
- проверить public navbar
- проверить отсутствие телефона заводчика
- проверить реальный parallax
- проверить работу радиуса/геопоиска
- написать финальный отчёт
