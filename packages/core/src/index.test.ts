import { initI18n } from './index'
import { mergeDeep } from './lib/merge'

const TRANSLATIONS = { en: { title: 'Magazine' }, ru: { title: 'Журнал' } }

describe('i18n instance testing', () => {
  const { setLocale, addTranslations, t, subscribe } = initI18n('en', TRANSLATIONS)

  describe('get nested path', () => {
    test('expect Magazine', () => {  
      expect(t(['title'])).toBe(TRANSLATIONS.en.title)
    })
  })
  
  describe('subscribe setLocale', () => {
    const subscribers: number[] = []
    const callback = () => subscribers.push(Math.random())

    test('expect 1 subscribers', () => {
      subscribe('setLocale', callback)
      setLocale('ru')
      expect(subscribers).toHaveLength(1)
    })
  })

  describe('subscribe addTranslation', () => {
    const subscribers: number[] = []
    const callback = () => subscribers.push(Math.random())

    test('expect 1 subscribers', () => {
      subscribe('addTranslations', callback)
      addTranslations({ en: { header: 'Beeer' }})
      expect(subscribers).toHaveLength(1)
    })
  })
})

describe('Locale getter/setter methods', () => {
  const { getLocale, getTranslations, setLocale, addTranslations, t } = initI18n('en', TRANSLATIONS)
  
  describe('get locale', () => {
    test('expect en', () => {
      setLocale('en')
      expect(getLocale()).toBe('en')
    })
  })

  describe('set locale', () => {
    test('expect ru', () => {
      setLocale('ru')
      expect(getLocale()).toBe('ru')
    })
  })

  describe('use new locale', () => {
    test('expect Журнал', () => {
      setLocale('ru')
      expect(t(['title'])).toBe(TRANSLATIONS.ru.title)
    })
  })
  
  describe('add translations', () => {
    test('expect merged translations', () => {
      const translations = { en: { title: 'New Yorker', header: 'Magazine' } }
      addTranslations(translations)
      expect(getTranslations()).toStrictEqual(mergeDeep(TRANSLATIONS, translations))
    })
  })
})
