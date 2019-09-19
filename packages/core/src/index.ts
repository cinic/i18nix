import { Component } from 'react'
import { getPath } from './lib/get-path'
import { interpolate } from './lib/interpolate'
import { mergeDeep } from './lib/merge'

type Keys = 'locale' | 'translations'
const settings = new Map<Keys, any>([['locale', 'en'], ['translations', {}]])

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
  settings.set('translations', mergeDeep(getTranslations(), translations))
  BaseComponent.update()
}

export function getTranslations() {
  return settings.get('translations')
}

export function setLocale(locale: string) {
  settings.set('locale', locale)
  BaseComponent.update()
}

export function getLocale() {
  return settings.get('locale')
}

export function t(path: string[] | string, interpolation?: {}) {
  const normalizePath = typeof path === 'string' ? path.split('.') : path
  const localeTranslations = getTranslations()[getLocale()] || getTranslations()['en']
  const translation = getPath(normalizePath, localeTranslations) || ''
  !translation && console.warn('Path not found in:', (settings.get('locale') || 'en'), normalizePath.join('.'))

  return interpolation ? interpolate(translation as string, interpolation) : translation
}
