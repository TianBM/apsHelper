import Taro from '@tarojs/taro'

class CommunityApi{

    fetchStream(){
        return Taro.cloud.callFunction({
            name:'initStream',
            data:{
    
            }
        })
    }
    
    fetchStreamUpdate(){
        return Taro.cloud.callFunction({
            name:'initStream',
            data:{
    
            }
        })
    }

    searchStream(keywords){
        return Taro.cloud.callFunction({
            name:'initStream',
            data:{
                keywords:keywords
            }
        })
    }
}

export default new CommunityApi()