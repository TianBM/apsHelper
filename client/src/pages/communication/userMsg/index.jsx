import { View, Image, Text } from '@tarojs/components'
import React, { Component } from 'react'
import { styled } from 'linaria/react'

export default class UserMsg extends Component{

    render(){
        const { avatar, author, content,  time } = this.props
        return(
            <MessageBox>
                <Avatar src={avatar} />
                <Author>{author}</Author>
                <Content>{content}</Content>
                <Time>{time}</Time>
            </MessageBox>
        )
    }
}

const MessageBox = styled(View)`
    margin: 0 0 10rpx 0;
    width: 100%;
    background-color: #FDFDFD;
    padding: 20rpx 0 20rpx 0;
    max-height: 500rpx;

    display: grid;
    grid-template-rows: 30% 70%;
    grid-template-columns: 14% 68% 18%;
`

const Avatar = styled(Image)`
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
    grid-column: 2/3
`

const Content = styled(Text)`
    grid-row: 2/3;
    grid-column: 2/3
`

const Time = styled(Text)`
    grid-column: 3/4;
    grid-row: 1/3;
`