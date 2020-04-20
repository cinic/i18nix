import { ReactNode, Component } from 'react'
import { initI18n, Path } from 'i18nix'

type Props = { value: Path }

const { getLocale, getTranslations, setLocale, addTranslations, subscribe, t } = initI18n()

subscribe('setLocale', () => BaseComponent.update())
subscribe('addTranslations', () => BaseComponent.update())

class BaseComponent<T = {}> extends Component<T> {
  static instances = new Set<BaseComponent>()
  static update = () => BaseComponent.instances.forEach(instance => instance.forceUpdate())

  componentDidMount() {
    BaseComponent.instances.add(this)
  }

  componentWillUnmount() {
    BaseComponent.instances.delete(this)
  }
}

export class Translate extends BaseComponent<Props & {}> {
  render() {
    const { value, children: _, ...otherProps } = this.props

    return t(value, otherProps)
  }
}

export class I18n extends BaseComponent<{ render: () => ReactNode }> {
  render = this.props.render
}

export { getLocale, getTranslations, setLocale, addTranslations, subscribe, t }