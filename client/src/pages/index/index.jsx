import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import { styled } from 'linaria/react'
import { AtTabBar } from 'taro-ui'


// import TabSwicher from '../../components/TabSwicher'
// import Community from './community'
// import Message from './message'
// import Services from './services'
// import Mine from './mine'

import api from '../../functions/api'

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
    const { UiStore:{ MineModel, CommunityModel } } = this.props.store
    api.fetchStream().then(res=>{
      CommunityModel.setStream(res.result);
    })
    api.requestSettingInfo()
    .then(res=>{
      MineModel.setAuth(res.authSetting)
      if(res.authSetting['scope.userInfo']){
        api.requestUserInfo().then(res=>{
          MineModel.setUser(res.userInfo)
          api.requestOpenId().then(res=>{
            MineModel.setOpenId(res.code)
          })
        })
      }
    })
  }

  handleTabChange(newCurrent){
    this.setState({
      current: newCurrent
    })
  }

  render () {
    const { current } = this.state
    return (
      <Background>
        {/* <TabSwicher current={current}>
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
          onClick={this.handleTabChange.bind(this)}
          current={current}
          iconSize='22'
          fontSize='12'
        /> */}
      </Background>
    )
  }
}

const Background = styled(View)`
  height: 100%;
  width: 100%;
  background-color: #F2F2F2;
`