import React, { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'

import { AtTabBar } from 'taro-ui'

import { Community } from './community'

import './index.scss'

@inject('store')
@observer
class Index extends Component {
  componentWillMount () { }

  componentDidMount () {
    const { tabbarStore } = this.props.store
    tabbarStore.init()
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick (value) {
    const { tabbarStore } = this.props.store
    tabbarStore.changeCurrent(value)
  }

  render () {
    const { tabbarStore: { tabbar,current,pagename } } = this.props.store
    return (
      <View className='index'>
        <View className='content'>
          {pagename}
        </View>
        <View className='bottombar'>
          <AtTabBar
            fixed
            tabList={tabbar}
            onClick={this.handleClick.bind(this)}
            current={current}
          />
        </View>
      </View>
    )
  }
}

export default Index
