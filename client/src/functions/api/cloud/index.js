import Taro from '@tarojs/taro'

export default {
    registUser(data){
        Taro.cloud.callFunction({
            name:'registUser',
            data:data    
        })
    },
    fetchStream(){
        return Taro.cloud.callFunction({
            name:'initStream',
            data:{
    
            }
        })
    },
    fetchStreamUpdate(){
        return Taro.cloud.callFunction({
            name:'updateStream',
            data:{
    
            }
        })
    },
    searchStream(keywords){
        return Taro.cloud.callFunction({
            name:'updateStream',
            data:{
                keywords:keywords
            }
        })
    }
}
