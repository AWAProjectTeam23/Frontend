import React, { Component } from 'react'
import Managerbar from './Managerbar'
import Managerbody from './Managerbody'

export default class Managerpage extends Component {
    constructor(props){

    }

    render(){
        return (
            <div>
                <div>
                    <Managerbar/>
                </div>
                <div>
                    <Managerbody/>
                </div>
            </div>
        )
    }
    
}
