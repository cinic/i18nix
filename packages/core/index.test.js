import { createInstance } from './'

describe('Create instance testing', () => {
  test('get nested path', () => {
    const i18n = createInstance('en', { en: { title: 'Magazine' }, ru: { title: 'Magazine' }})

    expect(i18n.t(['title'])).toBe('Magazine');
  });
})