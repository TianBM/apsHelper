import React, { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'

import './index.scss'

@inject('store')
@observer
class UserInfo extends Component {

  render () {
    return (
      <View>
          用户页
      </View>
    )
  }
}

export default UserInfo
