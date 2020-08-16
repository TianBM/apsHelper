import React, { Component } from 'react'
import { View, Button, Text, Image, RichText, Icon } from '@tarojs/components'
import Taro from '@tarojs/taro'

import './index.scss'
import { AtIcon } from 'taro-ui'

export default class MessageBox extends Component {

    constructor(props){
        super(props)
        this.state={

        }
    }

    navigatorTo(url,parm){
        Taro.navigateTo({
            url: url,
            events: {
                // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
                acceptDataFromOpenedPage: function(data) {
                console.log(data)
                },
                someEvent: function(data) {
                console.log(data)
                }
            },
            success: function (res) {
                // 通过eventChannel向被打开页面传送数据
                res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
            }
            })
    }

    render () {
        const { circle, author, logo, content, location, commentParm, share, time, action } = this.props
        return (
        <View className='mainBox'>
            <View className='top'>
                <Image className='logo' src={ logo } />
                <Text className='circle'>{circle}</Text>
                <View className='bottom'>
                    <Image className='userLogo' src={logo} />
                    <Text className='author'> {author} {action} {time} {location}</Text>
                </View>
            </View>
            <View className='contentBox'>
                <RichText className='richText' nodes={content} />
            </View>
            <View className='bottomBox'>
                <AtIcon onClick={this.navigatorTo.bind(this,'/pages/comment/index' ,commentParm)} className='icon' size='16' value='mail' />
                <AtIcon className='icon' size='16' value='share' />   
            </View>
        </View>
        )
    }
}