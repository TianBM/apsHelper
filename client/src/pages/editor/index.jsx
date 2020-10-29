import React, { Component } from 'react'
import { View, Button, Editor, RichText } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { observer, inject } from 'mobx-react'

import './index.scss'

@inject('store')
@observer
export default class MsgEditor extends Component {

    constructor(props){
        super(props)
        this.state = {
            placeholder: '今天有什么想分享的呢',
            content:''
        }
    }

    editorReady(){
        Taro.createSelectorQuery().select('#editor').context((res) => {
            this.editorCtx = res.context
        }).exec()
    }

    undo(){
        this.editorCtx.undo()
    }

    postMessage(){
        const { UiStore:{UserStore:{ userInfo }} } = this.props.store
        const date = new Date()
        this.editorCtx.getContents({
            success: res => {
                Taro.cloud.callFunction({
                    name:'postMessage',
                    data:{
                        author:userInfo['nickName'],
                        authorAvater:userInfo['avatarUrl'],
                        action:'发布了',
                        time: date.toString(),
                        shottime: date.toDateString(),
                        location: '',
                        tags:[],
                        content:res.html
                    }
                }).then(res=>{
                    console.log(res)
                    const { result:{ errMsg } } = res
                    const result = errMsg.match(/collection.add:(\S*)/)[1]
                    if(result === 'ok'){
                        Taro.showToast({
                            title: '发送成功',
                            icon: 'success',
                            complete:res=>{
                                setTimeout(()=>{
                                    Taro.hideToast()
                                    Taro.navigateBack()
                                },1000)
                            }
                          })
                    }
                })
            }
        });
    }

    insertDivider(){
        this.editorCtx.insertDivider();
    }

    render(){ 
        const { placeholder, content} = this.state
        return (
        <View>
            <View>
                <Editor id='editor' className='editor' placeholder={placeholder} onReady={this.editorReady.bind(this)}></Editor>
                <Button onClick={this.postMessage.bind(this)}>发布</Button>
                <Button onClick={this.insertDivider.bind(this)}>分割线</Button>
                <Button type='warn' onClick={this.undo.bind(this)}>撤销</Button>
            </View>
        </View>
        )
    } 
}