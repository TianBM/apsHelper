import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { Text, Button, View } from '@tarojs/components';
import { AtIcon } from 'taro-ui'

import './index.scss'

export default class Optioncard extends Component{

    constructor(props){
        super(props);
    }

    navigatorTo(url){
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

    render(){
        const { url, title } = this.props
        return(
            
            <View onClick={this.navigatorTo.bind(this, url)} >
                <AtIcon value='clock' size='30' color='#F00' />
                <Text>{title}</Text>
            </View>
        )
    }
}