import { getPath } from './lib/get-path'
import { interpolate } from './lib/interpolate'
import { mergeDeep } from './lib/merge'
import { isObject } from './lib/is-object'

type Keys = 'locale' | 'translations'
type Events = 'setLocale' | 'addTranslations'
const subscribers = new Map<Events, any[]>([['setLocale', []], ['addTranslations', []]])
const settings = new Map<Keys, any>()

export function initI18n(locale = 'en', translations = {}) {
  settings.set('locale', locale)
  settings.set('translations', translations)
  
  const subscribe = (event: Events, fn: Function) => {
    const index = (subscribers.get(event)?.push(fn) || 0) - 1

    return function unsubscribe() {
      subscribers.get(event)?.splice(index, 1)
    }
  }

  return { getLocale, getTranslations, setLocale, addTranslations, t, subscribe }
}

function addTranslations(translations: { [key: string]: any }) {
  settings.set('translations', mergeDeep(getTranslations(), translations))
  subscribers.get('addTranslations')?.forEach(event => event())
}

function getTranslations(): { [key: string]: any } {
  return settings.get('translations')
}

function setLocale(locale: string) {
  settings.set('locale', locale)
  subscribers.get('setLocale')?.forEach(event => event())
}

function getLocale(): string {
  return settings.get('locale')
}

function t(path: string[] | string, interpolation?: {}) {
  const normalizePath = typeof path === 'string' ? path.split('.') : path
  const localeTranslations = getTranslations()[getLocale()] || getTranslations()['en']
  const translation = getPath(normalizePath, localeTranslations) || ''

  if (translation === '') console.warn('Path has a empty value in:', (settings.get('locale') || 'en'), normalizePath.join('.'))
  if (translation === undefined) console.warn('Path not found in:', (settings.get('locale') || 'en'), normalizePath.join('.'))
  if (isObject(translation)) console.warn('Path should not be an object in:', (settings.get('locale') || 'en'), normalizePath.join('.'))

  return interpolation ? interpolate(translation as string, interpolation) : translation
}
