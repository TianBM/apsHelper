import React, { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'

import './index.scss'

import SettingBox from './settingCard'
import OptionCard from './optionCard'

export default class Mine extends Component {

    componentDidMount(){

    }

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
                    title='个人管理'
                    icon='user'
                    />
                <OptionCard
                    url='/pages/userInfo/index'
                    title='设置中心'
                    icon='equalizer'
                />
            </SettingBox>
            <SettingBox>
                <OptionCard
                    url='/pages/userInfo/index'
                    title='帮助'
                    icon='help'
                />
                <OptionCard
                    url='/pages/userInfo/index'
                    title='添加到我的小程序'
                    icon='star'
                />
            </SettingBox>
        </View>
        )
    } 
}