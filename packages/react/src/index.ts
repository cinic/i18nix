import { ReactNode } from 'react'
import { t, BaseComponent } from 'i18nix'

export class Translate extends BaseComponent<{ path: string[] | string, [key: string]: any }> {
  render() {
    const { path, ...otherProps } = this.props

    return t(path, otherProps)
  }
}

export class I18n extends BaseComponent<{ render: () => ReactNode }> {
  render = this.props.render
}
