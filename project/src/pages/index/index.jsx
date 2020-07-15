import React, { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'

import { AtTabBar } from 'taro-ui'


import TabContent from '../../components/tabbarContent'
import Community from './community'
import Communication from './communication'
import Schools from './schools'
import Mine from './mine'

import './index.scss'

@inject('store')
@observer
class Index extends Component {

  componentDidMount () {
    const { tabbarStore } = this.props.store
    tabbarStore.init()
  }

  handleClick (value) {
    const { tabbarStore } = this.props.store
    tabbarStore.changeCurrent(value)
  }

  render () {
    const { tabbarStore: { tabbar,current,pageurl } } = this.props.store
    return (
      <View className='index'>
        <View className='content'>
          <TabContent current={current}>
            <Community />
            <Communication />
            <Schools />
            <Mine />
          </TabContent>
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
