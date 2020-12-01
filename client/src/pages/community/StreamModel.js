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
    _id: types.identifier,
    tags: types.array(Tag),
    shottime: types.string,
    like: types.boolean,
    focus: types.boolean,
    }
)
.actions(self=>({
    tapLike(){
        self.like = !self.like
    },
    tapFocus(){
        self.focus = !self.focus
    }
}))

const StreamModel = types
.model(
    'StreamModel',{
    messages: types.array(Message),
    bottomAlert: types.boolean,
    bottomAlertInfo: types.string,
    }
)
.actions(self=>({
    appendStream(newMsgs){
        self.messages = self.messages.concat(newMsgs)
    },
    setStream(newMsgs){
        self.messages = newMsgs
    }
}))

export default StreamModel