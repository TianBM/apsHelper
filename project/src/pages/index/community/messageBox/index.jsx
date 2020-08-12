import React, { Component } from 'react'
import { View, Button, Text, Image, RichText, Icon } from '@tarojs/components'

import './index.scss'
import { AtIcon } from 'taro-ui'

export default class MessageBox extends Component {

    constructor(props){
        super(props)
        this.state={

        }
    }

    render () {
        const { circle, author, logo, content, location, comment, share, time, action } = this.props
        return (
        <View className='mainBox'>
            <View className='top'>
                <Image className='logo' src={ logo } />
                <Text className='circle'>{circle}</Text>
                <View className='bottom'>
                    <Text>{author}</Text>
                    <Text className='action'>{action}</Text>
                    <Text className='time'>{time}</Text>
                    <Text className='location'>{location}</Text>
                </View>
            </View>
            <View className='contentBox'>
                <RichText className='richText' nodes={content} />
            </View>
            <View className='bottomBox'>
                <AtIcon className='icon' value='share' />
            </View>
        </View>
        )
    }
}