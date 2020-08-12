import React, { Component } from 'react'
import { View, Button, Text, ScrollView, Icon } from '@tarojs/components'
import { AtSearchBar, AtIcon } from 'taro-ui'

import './index.scss'

import MessageBox from './messageBox'

export default class Community extends Component {

    constructor(props){
        super(props)
        this.state={
            value:''
        }
    }

    onChange(value){
        this.setState({
            value:value
        })
    }

    onSearch(value){

    }

    render(){ 
        const { value } = this.state
        return (
            <View className='background'>
                <AtSearchBar
                    className='searchBar'
                    value={value}
                    onChange={this.onChange.bind(this)}
                    onActionClick={this.onSearch.bind(this)}
                />
                <ScrollView 
                    className='Box2'
                    scrollY
                    enableBackToTop={true}
                >
                    <MessageBox 
                            logo='https://jdc.jd.com/img/200' 
                            content={`<div class="div_class">
                            <h1>Title</h1>
                            <p class="p">
                                Life is&nbsp;<i>like</i>&nbsp;a box of
                                <b>&nbsp;chocolates</b>.
                            </p>
                            </div>
                            `} 
                    circle='示例圈' author='示例作者' action='发布了' />
                    <MessageBox 
                            logo='https://jdc.jd.com/img/200' 
                            content={`<div class="div_class">
                            <h1>Title</h1>
                            <p class="p">
                                Life is&nbsp;<i>like</i>&nbsp;a box of
                                <b>&nbsp;chocolates</b>.
                            </p>
                            </div>
                            `} 
                    circle='示例圈' author='示例作者' action='发布了' />
                    <MessageBox 
                            logo='https://jdc.jd.com/img/200' 
                            content={`<div class="div_class">
                            <h1>Title</h1>
                            <p class="p">
                                Life is&nbsp;<i>like</i>&nbsp;a box of
                                <b>&nbsp;chocolates</b>.
                            </p>
                            </div>
                            `} 
                    circle='示例圈' author='示例作者' action='发布了' />
                    <MessageBox 
                            logo='https://jdc.jd.com/img/200' 
                            content={`<div class="div_class">
                            <h1>Title</h1>
                            <p class="p">
                                Life is&nbsp;<i>like</i>&nbsp;a box of
                                <b>&nbsp;chocolates</b>.
                            </p>
                            </div>
                            `} 
                    circle='示例圈' author='示例作者' action='发布了' />
                    <MessageBox 
                            logo='https://jdc.jd.com/img/200' 
                            content={`<div class="div_class">
                            <h1>Title</h1>
                            <p class="p">
                                Life is&nbsp;<i>like</i>&nbsp;a box of
                                <b>&nbsp;chocolates</b>.
                            </p>
                            </div>
                            `} 
                    circle='示例圈' author='示例作者' action='发布了' />
                    <MessageBox 
                            logo='https://jdc.jd.com/img/200' 
                            content={`<div class="div_class">
                            <h1>Title</h1>
                            <p class="p">
                                Life is&nbsp;<i>like</i>&nbsp;a box of
                                <b>&nbsp;chocolates</b>.
                            </p>
                            </div>
                            `} 
                    circle='示例圈' author='示例作者' action='发布了' />
                    <MessageBox 
                            logo='https://jdc.jd.com/img/200' 
                            content={`<div class="div_class">
                            <h1>Title</h1>
                            <p class="p">
                                Life is&nbsp;<i>like</i>&nbsp;a box of
                                <b>&nbsp;chocolates</b>.
                            </p>
                            </div>
                            `} 
                    circle='示例圈' author='示例作者' action='发布了' />
                    <View className='nothing'>没有更多啦 (=´ω｀=)</View>
                </ScrollView>
            </View>
        )
    } 
}