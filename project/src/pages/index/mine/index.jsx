import React, { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import { AtAvatar } from 'taro-ui'

import './index.scss'

export default class Mine extends Component {

    render(){ 
        return( 
        <View className='background'>
            <View className='usershow'>
                <Image className='avatar' src='https://jdc.jd.com/img/200' />
                <View className='name'>未知</View>
                <View className='description'>未知描述</View>
            </View>
            <View className='settings'></View>
            <View className='feedback'></View>
        </View>
        )
    } 
}