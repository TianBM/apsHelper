import React, { Component } from 'react'
import { View, Image, Text, Editor, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { styled } from 'linaria/react'
import { AtIcon } from 'taro-ui'

export default class Communication extends Component {

    constructor(props){
        super(props)
        this.state = {
        }
    }

    navigatorTo(url){
        Taro.navigateTo({
            url: url,
            // events: {
            //     // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
            //     acceptDataFromOpenedPage: function(data) {

            //     },
            //     someEvent: function(data) {

            //     }
            // },
            // success: function (res) {
            //     // 通过eventChannel向被打开页面传送数据
            //     // res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
            //     }
            })
    }


    render(){ 
        return (
        <Background>
            <SystemMsg>
                <SystemIcon><AtIcon size='45' value='bell' /> </SystemIcon>
                <SystemMsgTitle>系统通知</SystemMsgTitle>
                <SystemMsgContent>暂时没有新通知</SystemMsgContent>
            </SystemMsg>
            <ScrollView>
                
            </ScrollView>
            <EditorBtn onClick={this.navigatorTo.bind(this,'/pages/editor/index')}>
                {/* <AtIcon size='25' value='add' /> */}
                <View>发布</View>
            </EditorBtn>
        </Background>
        )
    } 
}

const Background = styled(View)`
    height:100%;
    width:100%;
    background-color:#F2F2F2;
`

const SystemMsg = styled(View)`
    height: 100rpx;
    width: 100%;
    display: grid;
    grid-template-rows: 50% 50%;
    grid-template-columns: 13% 87%;
    background-color:#FDFDFD;
    margin: 10rpx 0 10rpx 0;
`

const SystemIcon = styled(View)`
    grid-row: 1/3;
    grid-column: 1/2;
`

const SystemMsgTitle = styled(Text)`
    grid-row: 1/2;
    grid-column: 2/3;
    font-size:30rpx;
    height: 50rpx;
    line-height: 50rpx;
`

const SystemMsgContent = styled(Text)`
    grid-row: 2/3;
    grid-column: 2/3;
    font-size:25rpx;
    height: 50rpx;
    line-height: 50rpx;
    color: #b1b0b0F2;
`

const EditorBtn = styled(View)`
    position: fixed;
    bottom: 15%;
    right: 15%;
    text-align: center;
`