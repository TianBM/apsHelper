import { observable, action } from 'mobx'
import Taro from '@tarojs/taro'

export default class userStore {

    constructor(rootStore){
        this.rootStore = rootStore
    }

    @observable 
    userInfo = {}

    @observable 
    authInfo = {}

    @observable
    hasInfo = false

    @action.bound
    initUserInfo(){
        const that = this
        Taro.getSetting({
            success: res => {
              const authInfo = res.authSetting
              that.setAuth(authInfo)   
              if(authInfo['scope.userInfo']){
                Taro.getUserInfo({
                    success: res => {
                        that.setUserInfo(res.userInfo)
                    }
                })
              }
            }
          })
    }

    @action.bound
    setAuth(Auth){
        if(Auth){
            this.authInfo = Auth
        }
    }

    @action.bound
    setUserInfo(userInfo){
        if(userInfo){
            this.userInfo = userInfo
            this.hasInfo = true
        }
    }
}