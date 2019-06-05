import { initI18n, t, getLocale, setLocale } from './index'

const TRANSLATIONS = { en: { title: 'Magazine' }, ru: { title: 'Журнал' } }
describe('Create instance testing', () => {
  test('get nested path', () => {
    initI18n('en', TRANSLATIONS)

    expect(t(['title'])).toBe(TRANSLATIONS.en.title);
  });
})

describe('Locale getter/setter methods', () => {
  beforeAll(() => {
    initI18n('en', TRANSLATIONS)
  })
  test('get current locale', () => {
    expect(getLocale()).toBe('en');
  });

  test('set current locale', () => {
    setLocale('ru')
    expect(getLocale()).toBe('ru');
  });

  test('use new locale', () => {
    setLocale('ru')
    expect(t(['title'])).toBe(TRANSLATIONS.ru.title);
  });
})
