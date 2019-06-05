import { t, BaseComponent } from 'i18nix'

// initI18n('en', { en: { title: 'Zoom', btn: 'Update', change: 'CHange locale' }, ru: { title: 'Зууум', btn: 'Обновить', change: 'Изменить локаль' } })

export class Translate extends BaseComponent<{ path: string[] | string, [key: string]: any }> {
  render() {
    const { path, ...otherProps } = this.props

    return t(path, otherProps)
  }
}

// const App = () => {
//   const [state, setState] = React.useState(true)
//   const List = () => (
//     <div>
//       <Translate path={['title']} />
//       <br />
//       <Translate path={['btn']} />
//       <br />
//       <Translate path='title' />
//       <button onClick={() => { setLocale('ru'); console.log('locale', getLocale()) }}><Translate path={['change']} /></button>
//       <button onClick={() => { setLocale('en'); console.log('locale', getLocale()) }}>en</button>
//     </div>
//   )

//   return (
//     <div>
//       {state && <List />}
//       <button onClick={() => setState(!state)}>Tooggle instances</button>
//     </div>
//   )
// }
// const container = () => document.getElementById('app')
// console.log('container', container())
// ReactDOM.render(<App />, container())
