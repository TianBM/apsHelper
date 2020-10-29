import React, { Component } from 'react'
import { View, ScrollView } from '@tarojs/components'
import { AtSearchBar, message } from 'taro-ui'
import { styled } from 'linaria/react'
import Skeleton from 'taro-skeleton'
import { inject,observer} from 'mobx-react'

import MessageBox from './messageBox'

import api from '../../../functions/api/community'

@inject('store')
@observer
export default class Community extends Component {

    constructor(props){
        super(props)
        const { UiStore:{ CommunityModel } } = this.props.store
        this.Model = CommunityModel
        this.state = {
            isRefreshing: false,
            loadingState: false
        }
    }

    componentDidMount(){
        this.setState({
            loadingState: false
        })
    }

    handleRefesh(){
        const that = this
        this.setState({
            isRefreshing: true
        },()=>{
            api.fetchStreamUpdate().then(res=>{
                that.Model.updateStream(res.result)
                that.setState({
                    isRefreshing: false
                })
            })
        }) 
    }

    render(){ 
        const { searchKeyWord, onChangeKeywords, onSearch, messages, bottomAlert, bottomAlertInfo} = this.Model
        const { isRefreshing, loadingState } = this.state
        return (
            <Background>
                <AtSearchBar
                  styled='width: 100%;height: 100rpx;'
                  value={searchKeyWord}
                  onChange={onChangeKeywords.bind(this)}
                  onActionClick={onSearch.bind(this)}
                />
                <MsgStream 
                  scrollY
                  refresherEnabled={true}
                  refresherThreshold={45}
                  refresherTriggered={isRefreshing}
                  onRefresherRefresh={this.handleRefesh.bind(this)}
                >
                    <Skeleton
                      title
                      avatar
                      row={3}
                      loading={loadingState}
                    >
                    {messages.map(( element )=><MessageBox key={element._id} parms={element}  />)}
                    <BottomAlert visibility={bottomAlert?'show':'hidden'}>{bottomAlertInfo}</BottomAlert>
                    </Skeleton>
                    {Array(5).fill(0).map((element,index) => <Skeleton key={index} title avatar row={3} loading={loadingState}></Skeleton>)}
                    
                </MsgStream>
            </Background>
        )
    } 
}

const BottomAlert = styled(View)`
    visibility: ${props => props.visibility};
    width: 100%;
    height: 15%;
    text-align: center;
    color: #a3a0a0;
    margin-top: 15rpx;
`;

const MsgStream = styled(ScrollView)`
    width: 100%;
    height: 90%;
`

const Background = styled(View)`
    height: 100%;
    width: 100%;
    background-color: #F2F2F2;
`