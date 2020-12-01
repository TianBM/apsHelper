import React, { Component } from 'react'
import { View, Text, Image, RichText } from '@tarojs/components'
import { AtIcon, AtTag } from 'taro-ui'
import { styled } from 'linaria/react'
import Taro from '@tarojs/taro'
import { observer } from 'mobx-react'

import './index.scss'

@observer
export default class MessageBox extends Component {

    constructor(props){
        super(props)
        this.Model = this.props.parms
    }

    handleNavi(url){
        Taro.navigateTo({
        url: url,
        })
    }

    render () {
        const { author, authorAvater, content, location, commentParm, time, action, _id, tags, shottime, like, tapLike, focus, tapFocus } = this.Model
        return (
        <Message>
            <MessageTitleGrid>
                <AuthorAvater src={authorAvater} />
                <Author>{author}</Author> 
                <Focus onClick={tapFocus.bind(this)}> {focus?'已关注':'关注'}</Focus>
                <AuthorDesc>在{shottime}{action}</AuthorDesc>
            </MessageTitleGrid>
            <MessageContent onClick={this.handleNavi.bind(this,'/pages/detail/index?id='+_id,commentParm)}>
                <ContentShower nodes={content} />
            </MessageContent>
            <MessageBottom>
                <Tags tags={tags} />
                <MessageButton>
                    <IconBox><AtIcon onClick={tapLike.bind(this)} size='18' value={like?'heart-2':'heart'} /></IconBox>
                    <IconBox><AtIcon size='18' value='share' /></IconBox>
                </MessageButton>
            </MessageBottom> 
        </Message>
        )
    }
}

function Tags(props){
    const { tags } = props
    return(
        <MessageTags>
            <IconBox><AtIcon size='18' value='tag' /></IconBox>
            {
                tags?   
                tags.map(tag=>{<IconBox><AtTag type='primary' size='small' circle onClick={console.log('点击了'+tag.name)}>{tag.name}</AtTag></IconBox> })
                :null
            }    
        </MessageTags>   
    )
}

const IconBox = styled(View)`
    margin: 0 10rpx 0 10rpx;
    display:inline;
`

const ContentShower = styled(RichText)`
    width: 96%;
    max-height:400rpx;
    word-wrap:break-word;
    word-break:normal;
    overflow:hidden;
    text-overflow:ellipsis;
`


const Focus = styled(View)`
    grid-row: 1/2;
    grid-column: 3/4;
    margin: 0 90rpx 0 0;
    display: flex;
    align-items: center; 
    justify-content: center;
    flex-flow:column wrap;
    text-align: center;
    height: 45rpx;
    width: 105rpx;
    border: 1rpx solid grey;
    border-radius: 10rpx;
`

const Message = styled(View)`
    margin: 0 0 10rpx 0;
    width: 100%;
    background-color: #FDFDFD;
    padding: 20rpx 0 20rpx 0;
    max-height: 500rpx;
`

const MessageTitleGrid = styled(View)`
    display: grid;
    grid-template-rows: 50% 50%;
    grid-template-columns: 14% 68% 18%;
    height: 100rpx;
`

const AuthorAvater = styled(Image)`
    grid-row: 1/3;
    grid-column: 1/2;
    height: 90rpx;
    width: 90rpx;
    border-radius: 45rpx;
    margin: 5rpx;
    src: ${props=>props.src};
`

const Author = styled(Text)`
    grid-row: 1/2;
    grid-column: 2/3;
    font-size: 35rpx;
    height: 50rpx;
    line-height: 50rpx;
`

const AuthorDesc = styled(Text)`
    grid-row: 2/3;
    grid-column: 2/3;
    font-size: 25rpx;
    height: 50rpx;
    line-height: 50rpx;
`

const MessageContent = styled(View)`
    padding: 10rpx 2% 10rpx 2%;
    max-height: 300rpx;
`

const MessageBottom = styled(View)`
    height: 40rpx;
    width: 100%;
`

const MessageButton = styled(View)`
    float: right;
    margin-right: 20rpx;
`

const MessageTags = styled(View)`
    float:left;
    margin-left: 20rpx;
`