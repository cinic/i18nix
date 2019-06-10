# i18nix-react
React component for i18nix


# Getting started

```bash
npm config set registry http://repo.fxdd.com/nexus/content/groups/npm-all/
yarn add i18nix i18nix-react
```

Then u need to create an instance of i18n

```typescript
// @lib/i18n.ts
import { initI18n } from 'i18nix'

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

initI18n(defaultLocale, translations)
```

Than u can use ```Translate``` component:

```typescript
// App.tsx
import { Translate as T } from 'i18nix-react'
import '@lib/i18n'

export const App = () => (
  <div>
    <h1><T path={['title']} /></h1>
    {/* Or u can use string as path */}
    <T path='title' />
    {/* additional attributes are passed as an interpolation object */}
    <T path='orderCreated' amount="5000" />
  </div>
)
```
