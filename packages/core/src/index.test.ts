import { createInstance } from './index'

const TRANSLATIONS = { en: { title: 'Magazine' }, ru: { title: 'Журнал' } }
describe('Create instance testing', () => {
  test('get nested path', () => {
    const i18n = createInstance('en', TRANSLATIONS)

    expect(i18n.t(['title'])).toBe(TRANSLATIONS.en.title);
  });
})

describe('Locale getter/setter methods', () => {
  test('get current locale', () => {
    const i18n = createInstance('en', TRANSLATIONS)

    expect(i18n.locale).toBe('en');
  });

  test('set current locale', () => {
    const i18n = createInstance('en', TRANSLATIONS)
    i18n.locale = 'ru'
    expect(i18n.locale).toBe('ru');
  });

  test('use new locale', () => {
    const i18n = createInstance('en', TRANSLATIONS)
    i18n.locale = 'ru'
    expect(i18n.t(['title'])).toBe(TRANSLATIONS.ru.title);
  });
})
