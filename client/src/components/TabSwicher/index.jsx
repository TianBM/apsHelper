import React, { Component } from 'react'
export default class TabContent extends Component{

    render(){
        return React.Children.map(this.props.children,( element,index )=>{
            return(
                index===this.props.current?element:null
            )
        })
    }
}