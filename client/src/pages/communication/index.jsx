import React, { Component } from 'react'
import { View, Image, Text, Editor, ScrollView, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { styled } from 'linaria/react'
import { AtTabs, AtTabsPane } from 'taro-ui'

import UserMsg from './userMsg'

import add from '../../icons/iconfont/add.png'

export default class Communication extends Component {

    constructor(props){
        super(props)
        this.state = {
            tabs: 0
        }
    }

    navigatorTo(url){
        Taro.navigateTo({
            url: url,
            })
    }

    handleTabs(value){
        this.setState({
            tabs: value
        })
    }


    render(){ 
        const { tabs } = this.state
        const tabList = [{ title:'消息' },{title:'通知'}]
        return (
        <Background>
            <AtTabs current={tabs} tabList={tabList} onClick={this.handleTabs.bind(this)}>
                <AtTabsPane current={tabs} index={0}>
                    <MsgView>
                        <UserMsg 
                            avatar=''
                            author='测试'
                            time='test'
                        />
                    </MsgView>
                </AtTabsPane>
                <AtTabsPane current={tabs} index={1}>
                    <MsgView>

                    </MsgView>
                </AtTabsPane>
            </AtTabs>    
            <EditorBtn src={add} onClick={this.navigatorTo.bind(this,'/pages/editor/index')} />
        </Background>
        )
    } 
}

const MsgView = styled(ScrollView)`
    height:100%;
    width: 100%
`

const Background = styled(View)`
    position: absolute;
    height:100%;
    width:100%;
    background-color:#F2F2F2;
`

const EditorBtn = styled(Image)`
    position: fixed;
    height: 90rpx;
    width: 90rpx;
    border-radius: 45rpx;
    bottom: 7%;
    right: 10%;
    text-align: center;
`