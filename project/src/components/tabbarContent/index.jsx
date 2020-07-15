import React, { Component } from 'react'
export default class Content extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return React.Children.map(this.props.children,( element,index )=>{
            return(
                index===this.props.current?element:null
            )
        })
    }
}