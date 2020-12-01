import React, { Component } from 'react'
import { View, ScrollView } from '@tarojs/components'
import { AtSearchBar, message } from 'taro-ui'
import { styled } from 'linaria/react'
import Skeleton from 'taro-skeleton'
import { inject,observer, Provider} from 'mobx-react'

import MessageBox from './messageBox'

import { cloud } from '../../functions/api'

@inject('store')
@observer
export default class Community extends Component {

    constructor(props){
        super(props)
        const { UiStore:{ Community } } = this.props.store
        this.Model = Community
        this.state = {
            isRefreshing: false,
            loadingState: true,
            searchKeyWord: '',
        }
    }

    componentDidMount(){
        const { UiStore } = this.props.store
        const that = this
        this.setState({
            loadingState: true
        },()=>{
            UiStore.initApp()
            that.setState({
                loadingState: false
            })
        })
    }

    onRefesh(){
        const that = this
        this.setState({
            isRefreshing: true,
            loadingState: true
        },()=>{
            cloud.fetchStreamUpdate().then(res=>{
                that.Model.Stream.setStream(res.result)
                that.setState({
                    isRefreshing: false,
                    loadingState: false
                })
            })
        }) 
    }

    onSearch(){
        const that = this
        const { searchKeyWord } = this.state
        this.setState({
            loadingState: true
        },()=>{
            cloud.searchStream(searchKeyWord).then(res=>{
                that.Model.setStream(res.result)
                that.setState({
                    loadingState: false
                })
            })
        })
    }

    onKeywordsChange(newwords){
        this.setState({
            searchKeyWord: newwords
        })
    }

    onSearchFocus(){
        this.setState({
            focus:true
        })
    }

    onSearchBlur(){
        this.setState({
            searchKeyWord:'',
            focus:false
        })
    }

    render(){ 
        const { messages, bottomAlert, bottomAlertInfo } = this.Model.Stream
        const { isRefreshing, loadingState, searchKeyWord } = this.state
        return (
            <Background>
                <AtSearchBar
                  styled='width: 100%;height: 100rpx;'
                  value={searchKeyWord}
                  onChange={this.onKeywordsChange.bind(this)}
                  onActionClick={this.onSearch.bind(this)}
                />
                <MsgView 
                  scrollY
                  refresherEnabled={true}
                  refresherThreshold={45}
                  refresherTriggered={isRefreshing}
                  onRefresherRefresh={this.onRefesh.bind(this)}
                >
                    <Messages messages={messages} loadingState={loadingState} bottomAlert={bottomAlert} bottomAlertInfo={bottomAlertInfo} />
                </MsgView>
            </Background>
        )
    } 
}

const Messages = observer((props)=>{
    const { messages, loadingState,bottomAlert,bottomAlertInfo } = props
    return(
        <Skeleton
            title
            avatar
            row={3}
            loading={loadingState}
        >
            {
                messages?
                messages.map(( msg )=><MessageBox key={msg._id} parms={msg}  />)
                :null
            }
            {/* <BottomAlert visibility={bottomAlert?'show':'hidden'}>{bottomAlertInfo}</BottomAlert> */}
        </Skeleton>
    )
})

const BottomAlert = styled(View)`
    visibility: ${props => props.visibility};
    width: 100%;
    text-align: center;
    color: #a3a0a0;
`;

const MsgView = styled(ScrollView)`  
    width: 100%;
    height: 94%;
`

const Background = styled(View)`
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #f2f2f2;
`