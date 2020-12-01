import { types } from 'mobx-state-tree'

const UserModel = types
.model(
    'UserModel',{
        id: types.identifier,
        openid: '',
        backgroundImage: types.string,
        hasUser: types.boolean,
        name: '',
        sex: 0,
        age: 0,
        country: '',
        province: '',
        city: '',
        avatarUrl: 'https://jdc.jd.com/img/200',
        language: '',
    }
)
.actions(self=>({    
    setBackgroundImage(path){
        self.backgroundImage = path
    },
    setUserFromWechat(userInfo){
        self.name = userInfo['nickName']
        self.sex = userInfo['gender']
        self.country = userInfo['country']
        self.province = userInfo['province']
        self.city = userInfo['city']
        self.language = userInfo['language']
        self.avatarUrl = userInfo['avatarUrl']
        self.hasUser = true
    },
    setOpenId(openid){
        self.openid = openid
    }
}))

export default UserModel