import { observable, action } from 'mobx'
import communityModel from './CommunityModel'
import userStore from './userStore'

class UiStore {
    @observable
    CommunityModel
    @observable
    UserStore

    constructor(){
        this.CommunityModel = communityModel
        this.UserStore = new userStore()
    }

    @observable 
    language = "zh_CN";
    
    @observable
    tabCurrent = 0

    @action.bound
    changeTab(index){
        this.tabCurrent = index
    }

}

export default new UiStore()