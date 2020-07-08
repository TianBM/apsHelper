import { observable } from 'mobx'

const tabbarStore = observable({
    list: {},
    tabbar: [],
    current:0,
    pageName:'',
    init(){
        this.list = {0: { title: '社区', pagename:'community' },
                     1: { title: '名校',pagename:'schools' },
                     2: { title: '通讯',pagename:'communication' },
                     3: { title: '我的',pagename:'mine' }}
        this.pagename = 'community'
        this.buildNewBar(this.list)
    },
    changeTabState(newState){
        if(newState){
            this.list[newState.key] = newState.value
            this.buildNewBar(this.list)
        }
    },
    buildNewBar(list){
        if(list){
            let newBar = []
            for(var key in list){
                newBar.push(list[key])
            }
            this.tabbar = newBar
        }
    },
    changeCurrent(value){
        this.pagename = this.list[value].pagename
        this.current = value
    }
})

export default tabbarStore