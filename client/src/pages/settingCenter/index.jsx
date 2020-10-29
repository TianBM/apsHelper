import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { observer, inject } from 'mobx-react'

import './index.scss'

@inject('store')
@observer
class SettingCenter extends Component {

  render () {
    return (
      <View>
          设置中心
      </View>
    )
  }
}

export default SettingCenter
