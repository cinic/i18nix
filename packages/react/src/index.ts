import { ReactNode, Component } from 'react'
import { initI18n } from 'i18nix'

const { getLocale, getTranslations, setLocale, addTranslations, subscribe, t } = initI18n()

subscribe('setLocale', () => BaseComponent.update())
subscribe('addTranslations', () => BaseComponent.update())

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

export class Translate extends BaseComponent<{ value: string[] | string, [key: string]: any }> {
  render() {
    const { value, ...otherProps } = this.props

    return t(value, otherProps)
  }
}

export class I18n extends BaseComponent<{ render: () => ReactNode }> {
  render = this.props.render
}

export { getLocale, getTranslations, setLocale, addTranslations, subscribe, t }