# i18nix
Smallest i18n lib

# Getting started

```bash
npm config set registry http://repo.fxdd.com/nexus/content/repositories/npm-all
yarn add i18nix
```

Then u need to create an instance of i18n

```typescript
// @lib/i18n.ts
import { createInstance } from 'i18nix'
const defaultLocale = 'en'
const translations = {
  en: {
    title: 'Simple app',
    orderCreated: 'Pending order created with amount: %{amount}.'
  },
  ru: {
    title: 'Просто апп',
    orderCreated: 'Отложенный ордер с общей суммой %{amount}, создан.'
  }
}

export const i18n = createInstance(defaultLocale, translations)
```

Than u can import ```i18n``` at any component:

```typescript
// App.tsx
import { i18n } from '@lib/i18n'

export const App = () => (
  <div>
    <h1>{i18n.t(['title'])}</h1>
  </div>
)
```

When u need an interpolate a params u can use second param of ```t``` method:

```typescript
i18n.t(['orderCreated'], { amount: 5000 })
```

For get/set locale use:

```typescript
import { i18n } from '@lib/i18n'

i18n.locale = 'ru'
i18n.t(['title'])
i18n.locale === 'ru'
```
