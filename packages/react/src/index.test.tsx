import * as React from 'react'
import { shallow } from 'enzyme'
import { initI18n, setLocale, t } from 'i18nix'
import { Translate, I18n } from './index'

const locale = 'en'
const TRANSLATIONS = { en: { title: 'Nike' }, ru: { title: 'Найк' } }

describe('Render component', () => {
  beforeAll(() => initI18n(locale, TRANSLATIONS))

  test('Translate with value as string', () => {
    const translate = shallow(
      <Translate value="title" />,
    )

    expect(translate.text()).toEqual(TRANSLATIONS.en.title)
  })

  test('Rerender Translate component', () => {
    const translate = shallow(
      <Translate value={['title']} />,
    )
    setLocale('ru')

    expect(translate.text()).toEqual(TRANSLATIONS.ru.title)
  })

  test('Rerender I18n component', () => {
    const translate = shallow(
      <I18n render={() => t('title')} />,
    )
    setLocale('ru')

    expect(translate.text()).toEqual(TRANSLATIONS.ru.title)
  })
})
