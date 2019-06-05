import { Component } from 'react'
import { getPath } from './lib/get-path'
import { interpolate } from './lib/interpolate'

const LOCALE_KEY = 'locale'
const TRANSLATIONS_KEY = 'translations'

const settings = new Map()

export function initI18n(locale = 'en', translations = {}) {
  setLocale(locale)
  setTranslations(translations)

  return { setLocale, setTranslations, getLocale, getTranslations, t }
}

export class BaseComponent<T> extends Component<T, any> {
  static instances = new Set<BaseComponent<any>>()
  static update = () => BaseComponent.instances.forEach(instance => instance.forceUpdate())

  componentDidMount() {
    BaseComponent.instances.add(this)
  }

  componentWillUnmount() {
    BaseComponent.instances.delete(this)
  }
}

export function setTranslations(translations: { [key: string]: any }) {
  settings.set(TRANSLATIONS_KEY, translations)
  BaseComponent.update()
}

export function getTranslations() {
  return settings.get(TRANSLATIONS_KEY)
}

export function setLocale(locale: string) {
  settings.set(LOCALE_KEY, locale)
  BaseComponent.update()
}

export function getLocale() {
  return settings.get(LOCALE_KEY)
}

export function t(path: string[] | string, interpolation?: {}) {
  const normalizePath = typeof path === 'string' ? path.split('.') : path
  const localeTranslations = getTranslations()[getLocale()] || getTranslations()['en']
  const translation = getPath(normalizePath, localeTranslations) || ''
  !translation && console.warn('Path not found in:', (settings.get(LOCALE_KEY) || 'en'), normalizePath.join('.'))

  return interpolation ? interpolate(translation as string, interpolation) : translation
}
