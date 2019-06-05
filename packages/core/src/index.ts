import { getPath } from './lib/get-path'
import { interpolate } from './lib/interpolate'

const LOCALE_KEY = 'locale'
const TRANSLATIONS_KEY = 'translations'

const settings = new Map()

export function createInstance(locale = 'en', translations = {}) {
  settings.set(LOCALE_KEY, locale).set(TRANSLATIONS_KEY, translations)

  return {
    get locale() {
      return settings.get(LOCALE_KEY)
    },
    set locale(locale) {
      settings.set(LOCALE_KEY, locale)
    },
    get translations() {
      return settings.get(TRANSLATIONS_KEY)
    },
    set translations(translations) {
      settings.set(TRANSLATIONS_KEY, translations)
    },
    t
  }
}

export function t(path: string[], interpolation?: {}) {
  const localeTranslations = settings.get(TRANSLATIONS_KEY)[settings.get(LOCALE_KEY)] || settings.get(TRANSLATIONS_KEY)['en']
  const translation = getPath(path, localeTranslations) || ''
  !translation && console.warn('Path not found in:', (settings.get(LOCALE_KEY) || 'en'), path.join('.'))

  return interpolation ? interpolate(translation as string, interpolation) : translation
}
