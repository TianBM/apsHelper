import React, { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'

import './index.scss'

import SettingBox from './settingCard'
import OptionCard from './optionCard'

export default class Mine extends Component {

    render(){ 
        return( 
        <View className='background'>
            <View className='usershow'>
                <Image className='avatar' src='https://jdc.jd.com/img/200' />
                <View className='name'>用户名</View>
                <View className='description'>个人介绍</View>
            </View>
            <SettingBox>
                <OptionCard 
                    url='/pages/userInfo/index'
                    title='选项一'
                    />
                <OptionCard
                    url='/pages/userInfo/index'
                    title='选项二'
                />
            </SettingBox>
            <SettingBox>
                <OptionCard
                    url='/pages/userInfo/index'
                    title='选项三'
                />
            </SettingBox>
        </View>
        )
    } 
}