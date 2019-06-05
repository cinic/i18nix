import { t, BaseComponent } from 'i18nix'

export class Translate extends BaseComponent<{ path: string[] | string, [key: string]: any }> {
  render() {
    const { path, ...otherProps } = this.props

    return t(path, otherProps)
  }
}
