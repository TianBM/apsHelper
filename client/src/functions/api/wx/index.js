import Taro from '@tarojs/taro'

export default {
    requestSettingInfo(){
        return Taro.getSetting()
    },
    requestUserInfo(){
        return Taro.getUserInfo()
    },
    requestOpenId(){
        return Taro.login()
    },
}