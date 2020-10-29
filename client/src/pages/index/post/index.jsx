import React, { Component } from 'react'
import { View, Button, Text, Editor } from '@tarojs/components'

import './index.scss'

export default class Poster extends Component {

    render(){ 
        return(
            <Editor className='editor' />
        )
    } 
}