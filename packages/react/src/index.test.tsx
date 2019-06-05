import * as React from 'react'
import { shallow } from 'enzyme'
import { initI18n, setLocale } from 'i18nix'
import { Translate } from './index'

const locale = 'en'
const TRANSLATIONS = { en: { title: 'Nike'}, ru: { title: 'Найк'}}

describe('Render component', () => {
  beforeAll(() => initI18n(locale, TRANSLATIONS))

  test('Translate with path as string', () => {
    const translate = shallow(
      <Translate path="title" />,
    )

    expect(translate.text()).toEqual(TRANSLATIONS.en.title)
  })

  test('Rerender Translate component', () => {
    const translate = shallow(
      <Translate path={['title']} />,
    )
    setLocale('ru')

    expect(translate.text()).toEqual(TRANSLATIONS.ru.title)
  })
})
