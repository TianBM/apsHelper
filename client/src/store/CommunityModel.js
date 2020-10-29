import { types, onSnapshot } from "mobx-state-tree"

const Tag = types
.model(
    'Tag',{
        name: types.string,
        url: types.string
    }
)
.actions(self=>({
    tapTag(){
        console.log('taped' + self.name)
    }
}))

const Message = types
.model(
    'Message',{
    author: types.string,
    authorAvater: types.string,
    content: types.string,
    location: types.string,
    time: types.string,
    action: types.string,
    _id: types.string,
    tags: types.array(Tag),
    shottime: types.string,
    like: types.boolean,
    }
)
.actions(self=>({
    tapLike(){
        self.like = !self.like
    }
}))

const StreamModel = types
.model(
    'StreamModel',{
    messages: types.array(Message),
    searchKeyWord: types.string,
    bottomAlert: types.boolean,
    bottomAlertInfo: types.string,
    }
)
.actions(self=>({
    updateStream(newStream){
        self.isRefreshing = true
        newStream.forEach(message=>{
            self.messages.unshift(message)
        })
        self.isRefreshing = false
    },
    initStream(newStream){
        self.messages = newStream
    },
    onChangeKeywords(keywords){
        self.searchKeyWord = keywords
    },
    onSearch(event){
        console.log(self.searchKeyWord)
    }
}))

const Store = StreamModel.create({
    messages:[],
    searchKeyWord:'',
    loadingState:true,
    bottomAlert:false,
    bottomAlertInfo:'',
    isRefreshing:false
})

export default Store