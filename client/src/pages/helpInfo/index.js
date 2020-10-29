import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { observer, inject } from 'mobx-react'

import './index.scss'

@inject('store')
@observer
class HelpInfo extends Component {

  render () {
    return (
      <View>
          帮助页
      </View>
    )
  }
}

export default HelpInfo
