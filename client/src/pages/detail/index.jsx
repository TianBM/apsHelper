import React, { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { getCurrentInstance } from '@tarojs/taro'

import './index.scss'

export default class Detail extends Component {

  componentDidMount () {
    console.log(getCurrentInstance().router.params)
  }

  render () {
    return (
      <View>
          信息详情页
      </View>
    )
  }
}
