import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import { styled } from 'linaria/react'
import { AtTabBar } from 'taro-ui'


import TabSwicher from '../../components/TabSwicher'
import Community from './community'
import Message from './message'
import Services from './services'
import Mine from './mine'

import api from '../../functions/api/community'

@inject('store')
@observer
export default class Index extends Component {

  constructor(props){
    super(props)
    this.state = {
      current: 0
    }
  }

  componentDidMount(){
    const { UiStore:{ UserStore: { initUserInfo }, CommunityModel } } = this.props.store
    api.fetchStream().then(res=>{
      CommunityModel.initStream(res.result);
    })
    initUserInfo();
  }

  render () {
    const { UiStore:{tabCurrent, changeTab} } = this.props.store
    return (
      <Background>
        <TabSwicher current={tabCurrent}>
          <Community />
          <Services />
          <Message />
          <Mine />
        </TabSwicher>
        <AtTabBar
          fixed
          tabList={[
          { title: '社区', iconType: 'home' },
          { title: '服务', iconType: 'streaming' },
          { title: '消息', iconType: 'message' },
          { title: '我的', iconType: 'user' }
        ]}
          onClick={changeTab.bind(this)}
          current={tabCurrent}
          iconSize='22'
          fontSize='12'
        />
      </Background>
    )
  }
}

const Background = styled(View)`
  position: absolute;
  height: 100%;
  width: 100%;
`