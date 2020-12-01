import React, { Component } from 'react'
import { View, Button, Text, Image } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import { styled } from 'linaria/react'
import Taro,{ getCurrentInstance } from '@tarojs/taro'
import { AtList, AtListItem } from 'taro-ui'

@inject('store')
@observer
export default class UserInfo extends Component {

  componentDidMount(){
    console.log(this.props)
  }

  chooseAvatar(){
    Taro.chooseImage({
      count: 1
    })
    .then(res=>{
      console.log(res)
    })
    .catch(err=>{
      console.log(err)
    })
  }

  render () {
    const { avatarUrl } = this.props.store.UiStore.user
    return (
      <Background>
        <AtList>
          <AtListItem
            title='头像'
            thumb={avatarUrl}
            onClick={this.chooseAvatar.bind(this)}
          />
          <AtListItem >
            test
            </AtListItem>
        </AtList>
      </Background>
    )
  }
}

const Background = styled(View)`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #f2f2f2;
`
