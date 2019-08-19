import { ReactNode } from 'react'
import { t, BaseComponent } from 'i18nix'

export class Translate extends BaseComponent<{ value: string[] | string, [key: string]: any }> {
  render() {
    const { value, ...otherProps } = this.props

    return t(value, otherProps)
  }
}

export class I18n extends BaseComponent<{ render: () => ReactNode }> {
  render = this.props.render
}
