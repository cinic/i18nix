import React, { Component, Fragment } from 'react'
import { t } from 'i18nix'

export default class Translate extends Component<any, any> {
  render() {
    const { value, ...otherProps } = this.props;
    const translation = t(value, otherProps);

    return (
      <Fragment>{translation}</Fragment>
    );
  }
}