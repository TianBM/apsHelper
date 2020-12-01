import { types, onSnapshot } from 'mobx-state-tree'
import Taro from '@tarojs/taro'

import UserModel from './UserModel'
import StreamModel from '../pages/community/StreamModel'

import { wx, cloud } from '../functions/api'

const RemoteLogger = types
.model('RemoteLogger')
.actions(self=>({
    remoteLog(logInfo){
        console.log(logInfo)
    }
}))

const Notification = types
.model('Notification')
.views(self=>({
    notification(type,message,duration){
        Taro.atMessage({
            'message': message,
            'type': type,
            'duration': duration
        })
    }
}))

const WxAuth = types
.model(
    'Auth',{
        'scope.userInfo': types.optional( types.boolean, false ),
        'scope.address': types.optional( types.boolean, false ),
        'scope.invoice': types.optional( types.boolean, false ),
        'scope.invoiceTitle': types.optional( types.boolean, false ),
    }
)

const Community = types
.model(
    'Community',{
        Stream: StreamModel
    }
)

const Mine = types
.model(
    'Mine',{
        user: UserModel
    }
)
.actions(self=>({
    setUserInfoFromOpenType(openData){
        self.user.setUserFromWechat(openData)
        wx.requestOpenId().then(res=>{
            self.user.setOpenId(res.code)
        })
        cloud.registUser({user:self.user})
    }
}))

const UiModel = types
.model(
    'UiModel',{
        language: types.string,
        user: types.reference(UserModel),
        auth: WxAuth,
        Community: Community,
        Mine: Mine
    }
)
.actions(self=>({
    setLanguage(newLang){
        self.language = newLang
    },
    initApp(){
        cloud.fetchStream()
        .then(res=>{
            self.Community.Stream.setStream(res.result)
        })
        wx.requestSettingInfo()
        .then(res=>{
            self.setAuth(res.authSetting)
            if(res.authSetting['scope.userInfo']){
                    wx.requestUserInfo().then(res=>{
                        self.user.setUserFromWechat(res.userInfo)
                    wx.requestOpenId().then(res=>{
                        self.user.setOpenId(res.code)
                    })
                })
            }
        })
    },
    setAuth(newAuth){
        self.auth = newAuth
    },
}))

const Store = UiModel.create({
    language: 'zh_CN',
    auth:{
        'scope.userInfo': false,
        'scope.address': false,
        'scope.invoice': false,
        'scope.invoiceTitle': false,
    },
    user: '0',
    Mine:{
        user: {
            id: '0',
            hasUser:false,
            backgroundImage:'https://cos-1256179601.cos.ap-guangzhou.myqcloud.com/blog/3d5db16670462e5c6ecd5c1e290aa11c.jpg',
            name: '点击登录',
            sex: 0,
            age: 0,
            country: '未设置',
            province: '未设置',
            city: '未设置',
            language: '未设置',
        },
    },
    Community:{
        Stream:{
            messages: [],
            bottomAlert: false,
            bottomAlertInfo: ''
        }
    }
})

export default Store

