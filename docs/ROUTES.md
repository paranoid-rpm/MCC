# Routes

## Public

- `/`
- `/kittens`
- `/kittens/[slug]`
- `/maine-coon`
- `/breeders`
- `/contacts`

Public navbar:
- Главная
- Котята
- О породе
- Заводчикам
- Контакты

## Hidden/auth-only

Breeder:
- `/breeder/dashboard`
- `/breeder/kittens`
- `/breeder/requests`
- `/breeder/documents`
- `/breeder/settings`

Admin:
- `/admin`
- `/admin/breeders`
- `/admin/kittens`
- `/admin/moderation`
- `/admin/requests`
- `/admin/settings`

These routes must NOT be shown in public navbar.
