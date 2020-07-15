import { observable } from 'mobx'

const tabbarStore = observable({
    tabbar: [],
    current:0,
    init(){
        this.tabbar = [{ title: '社区' },
                     { title: '名校' },
                     { title: '通讯' },
                     { title: '我的' }]
    },
    changeTabState(newState){
        if(newState){
            this.tabbar[newState.key] = newState.value
        }
    },
    changeCurrent(value){
        this.pageurl = this.tabbar[value].pageurl
        this.current = value
    }
})

export default tabbarStore