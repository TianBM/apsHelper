import React, { Component } from 'react'
import { View } from '@tarojs/components';

import './index.scss'

export default class SettingCard extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View className='box'>
            {React.Children.map(this.props.children,( element,index )=>{
                if( index <= this.props.children.length-1 ){
                    return(element?<View className='option'>{element}</View>:null)
                }else{
                    return(element)
                }
            })}
            </View>
        )
    }
}