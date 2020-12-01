import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import Taro from '@tarojs/taro'
import './themes/custom-theme.scss'
import 'taro-ui/dist/style/index.scss'
import 'taro-skeleton/dist/index.css' // 引入组件样式

import UiStore from './store/UiStore'

import './app.scss'

const store = {
  UiStore
}

class App extends Component {
  componentDidMount () {
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init()
    }
  }

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
