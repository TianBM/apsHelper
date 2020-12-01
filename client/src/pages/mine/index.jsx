import React, { Component } from 'react'
import { View, Image, Button, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import { styled } from 'linaria/react'
import { AtList, AtListItem } from "taro-ui"
import Taro from '@tarojs/taro'

@inject('store')
@observer
export default class Mine extends Component {

    constructor(props){
        super(props)
        this.Model = this.props.store.UiStore.Mine
        this.state={
            isLogin:false
        }
    }

    componentDidMount(){    
        this.setUserInfoFromStore();
    }

    handleNavi(url){
        Taro.navigateTo({
            url:url
        })
    }

    setUserInfoFromStore(){
        if(this.Model.user.hasUser){
            this.setState({
                isLogin:true
            })
        }
    }

    setUserInfoFromOpenData(e){
        if(!this.state.isLogin){
            const result = e.detail.errMsg.indexOf('ok')
            if(result>0){
                this.Model.setUserInfoFromOpenType(e.detail.userInfo)
                this.setState({
                    isLogin:true
                })
            }
        }
    }

    render(){ 
        const { backgroundImage, avatarUrl, name } = this.Model.user
        const { isLogin } = this.state
        return( 
        <Background>
            <Button style={btnStyle} animation={this.animBack} disabled={isLogin} openType='getUserInfo' onGetUserInfo={this.setUserInfoFromOpenData.bind(this)}>
                <BackgroundImg src={backgroundImage} />
                <Avatar src={avatarUrl} />
                <User>{name}</User>      
            </Button>
            <AtList>
                <AtListItem
                    title='个人管理'
                    iconInfo={{value:'user'}}
                    onClick={this.handleNavi.bind(this,'/pages/userInfo/index')}
                />
                <AtListItem
                    title='设置中心'
                    iconInfo={{value:'equalizer'}}
                    onClick={this.handleNavi.bind(this,'/pages/settingCenter/index')}
                />
            </AtList>
            <AtList>
                <AtListItem
                    title='帮助'
                    iconInfo={{value:'help'}}
                    onClick={this.handleNavi.bind(this,'/pages/helpInfo/index')}
                />
            </AtList>
        </Background>
        )
    } 
}

const Background = styled(View)`
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #F2F2F2;
    display: flex;
    flex-flow:column wrap;
    
`

const btnStyle = {
    height: '400rpx',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexFlow:'column wrap',
    textAlign: 'center',
    backgroundColor: '#FDFDFD'
}

const UserInfo = styled(Button)`
    height: 400rpx;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    text-align: center;
    background-color: #FDFDFD;
`

const BackgroundImg = styled(Image)`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 400rpx;
    z-index: 1;
    filter: blur(6px);
`

const Avatar = styled(Image)`
    width: 150rpx;
    height: 150rpx;
    border-radius: 75rpx;
    z-index: 11;
`

const User = styled(Text)`
    width: 100%;
    font-size: 50rpx;
    z-index: 11;
    color: black;
`

const Description = styled(Text)`
    width: 100%;
    font-size: 30rpx;
    z-index: 11;
    color: black;
`