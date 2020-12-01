import React, { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { styled } from 'linaria/react'
import { getCurrentInstance } from '@tarojs/taro'

export default class Detail extends Component {

  componentDidMount () {
    console.log(getCurrentInstance().router.params)
  }

  render () {
    return (
      <Background>
          信息详情页
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