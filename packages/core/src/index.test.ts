import { initI18n, t, getLocale, setLocale, setTranslations, getTranslations } from './index'
import { mergeDeep } from './lib/merge'

const TRANSLATIONS = { en: { title: 'Magazine' }, ru: { title: 'Журнал' } }
describe('Create instance testing', () => {
  describe('get nested path', () => {
    test('expect Magazine', () => {
      initI18n('en', TRANSLATIONS)
  
      expect(t(['title'])).toBe(TRANSLATIONS.en.title);
    });
  })
})

describe('Locale getter/setter methods', () => {
  beforeAll(() => {
    initI18n('en', TRANSLATIONS)
  })

  describe('get locale', () => {
    test('expect en', () => {
      expect(getLocale()).toBe('en');
    });
  })

  describe('set locale', () => {
    test('expect ru', () => {
      setLocale('ru')
      expect(getLocale()).toBe('ru');
    });
  })

  describe('use new locale', () => {
    test('expect Журнал', () => {
      setLocale('ru')
      expect(t(['title'])).toBe(TRANSLATIONS.ru.title);
    });
  })
  
  describe('add translations', () => {
    test('expect merged translations', () => {
      const translations = { en: { title: 'New Yorker', header: 'Magazine' } }
      setTranslations(translations)
      expect(getTranslations()).toStrictEqual(mergeDeep(TRANSLATIONS, translations))
    })
  })
})
