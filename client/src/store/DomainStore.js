import { observable, action } from 'mobx'

class DomainStore {
    @observable 
    language = "zh_CN";

    
}

export default new DomainStore()