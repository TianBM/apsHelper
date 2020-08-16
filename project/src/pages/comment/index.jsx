import React, { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'

import './index.scss'

@inject('store')
@observer
class Comment extends Component {

  render () {
    return (
      <View>
          评论页
      </View>
    )
  }
}

export default Comment
