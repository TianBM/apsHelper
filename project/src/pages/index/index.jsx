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

  constructor(props){
    super(props)
    this.state = {
      current: 0
    }
  }

  handleClick (value) {
    this.setState({
      current: value
    })
  }

  render () {
    // const { tabbarStore: { tabbar,current,pageurl } } = this.props.store
    const { current } = this.state
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
        <AtTabBar
          className='bottombar'
          fixed
          tabList={[
          { title: '社区', iconType: 'streaming' },
          { title: '名校库', iconType: 'folder' },
          { title: '消息', iconType: 'message' },
          { title: '我的', iconType: 'user' }
        ]}
          onClick={this.handleClick.bind(this)}
          current={current}
          iconSize='22'
          fontSize='12'
        />
      </View>
    )
  }
}

export default Index
