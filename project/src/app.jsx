import React, { Component } from 'react'
import { Provider } from 'mobx-react'

import tabbarStore from './store/tabbar'

import './app.scss'
// import './themes/custom-theme.scss'
import 'taro-ui/dist/style/index.scss'

const store = {
  tabbarStore
}

class App extends Component {
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 就是要渲染的页面
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
