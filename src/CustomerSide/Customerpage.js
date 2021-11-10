import React, { Component } from 'react'
import Customerbar from './Customerbar'
import Customerbody from './Customerbody'

export default class Customerpage extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <div>
                    <Customerbar/>
                </div>
                <div>
                    <Customerbody/>
                </div>
            </div>
        )
    }
    
}
