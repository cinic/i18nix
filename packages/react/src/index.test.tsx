import * as React from 'react'
import { shallow } from 'enzyme'
import { I18n, Translate, setLocale, t, addTranslations } from './index'

const translations = { en: { title: 'Nike' }, ru: { title: 'Найк' } }
setLocale('en')
addTranslations(translations)

describe('Render component', () => {
  describe('Translate with value as string', () => {
    const value = translations.en.title
    
    test(`Expect ${value}`, () => {
      const translate = shallow(
        <Translate value='title' />,
      )
  
      expect(translate.text()).toEqual(value)
    })
  })

  describe('Translate with value as array', () => {
    const value = translations.en.title
    
    test(`Expect ${value}`, () => {
      const translate = shallow(
        <Translate value={['title']} />,
      )
  
      expect(translate.text()).toEqual(value)
    })
  })

  describe('Translate update by setLocale', () => {
    const value = translations.ru.title
    
    afterAll(() => {
      setLocale('en')
    })
    
    test(`Expect ${value}`, () => {
      const translate = shallow(
        <Translate value={['title']} />,
      )
      
      setLocale('ru')
      
      expect(translate.text()).toEqual(value)
    })
  })

  describe('Translate update by addTranslations', () => {
    const title = 'Newbie'
    const translation = { en: { title }}
    
    test(`Expect ${title}`, () => {
      const translate = shallow(
        <Translate value={['title']} />,
      )
      
      addTranslations(translation)
      
      expect(translate.text()).toEqual(title)
    })
  })

  describe('Rerender I18n', () => {
    const value = translations.ru.title

    test(`Expect ${value}`, () => {
      const translate = shallow(
        <I18n render={() => t('title')} />,
      )
      
      setLocale('ru')
  
      expect(translate.text()).toEqual(value)
    })
  })
})
