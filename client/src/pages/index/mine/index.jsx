import React, { Component } from 'react'
import { View, Image, Button } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import Taro from '@tarojs/taro'

import './index.scss'

import SettingBox from './settingBox'
import OptionCard from './optionCard'

@inject('store')
@observer
export default class Mine extends Component {

    constructor(props){
        super(props)
        this.state={
            avatarUrl:'https://jdc.jd.com/img/200',
            backgroundImage:'https://cos-1256179601.cos.ap-guangzhou.myqcloud.com/blog/3d5db16670462e5c6ecd5c1e290aa11c.jpg',
            userName:'点击登录',
            description:'',
            isLogin:false
        }
    }

    componentDidMount(){    
        this.setUserInfoFromStore();
    }

    setUserInfoFromStore(){
        const { UiStore:{ UserStore: { hasInfo, userInfo } } } = this.props.store
        if(hasInfo){
            this.setState({
                avatarUrl:userInfo['avatarUrl'],
                userName: userInfo['nickName'],
                isLogin:true
            })
        }
    }

    setUserInfoFromOpenType(e){
        const { isLogin } = this.state
        if(!isLogin){
            const userInfo = e.detail.userInfo
            this.setState({
                avatarUrl:userInfo['avatarUrl'],
                userName: '',
                isLogin:true
            })
        }
    }

    render(){ 
        const { avatarUrl, backgroundImage, userName, description, isLogin } = this.state
        return( 
        <View className='background'>
            <Button disabled={isLogin} className='usershow' openType='getUserInfo' onGetUserInfo={this.setUserInfoFromOpenType.bind(this)}>
                <Image className='backgroundImg' src={backgroundImage} />
                <Image className='avatar' src={avatarUrl} />
                <View className='name'>{userName}</View>
                <View className='description'>{description}</View>
            </Button>
            <SettingBox>
                <OptionCard 
                    url='/pages/userInfo/index'
                    title='个人管理'
                    icon='user'
                    />
                <OptionCard
                    url='/pages/settingCenter/index'
                    title='设置中心'
                    icon='equalizer'
                />
            </SettingBox>
            <SettingBox>
                <OptionCard
                    url='/pages/helpInfo/index'
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