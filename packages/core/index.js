import { getPath } from './lib/get-path'
import { interpolate } from './lib/interpolate'

const LOCALE_KEY = 'locale'
const TRANSLATIONS_KEY = 'translations'

const settings = new Map()

export function createInstance(locale = 'en', translations = { en: {} }) {
  settings.set(LOCALE_KEY, locale).set(TRANSLATIONS_KEY, translations)

  return {
    get locale() {
      return settings.get(LOCALE_KEY)
    },
    set locale(locale) {
      return settings.set(LOCALE_KEY, locale)
    },
    get translations() {
      return settings.get(TRANSLATIONS_KEY)
    },
    set translations(translations) {
      return settings.set(TRANSLATIONS_KEY, translations)
    },
    t
  }
}

function t(path, interpolation) {
  let translation
  const localeTranslations = settings.get(TRANSLATIONS_KEY)[settings.get(LOCALE_KEY)] || settings.get(TRANSLATIONS_KEY)['en']
  
  try {
    translation = getPath(path, localeTranslations)
  } catch (err) {
    return console.warn('Path not found in:', (settings.get(LOCALE_KEY) || 'en'), path.join('.'))
  }

  return interpolation ? interpolate(translation, interpolation) : translation
}
