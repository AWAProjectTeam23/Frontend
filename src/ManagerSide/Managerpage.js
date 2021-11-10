import React, { Component } from 'react'
import { Routes,Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Managerbar from './Managerbar'
import Managerbody from './Managerbody'

export default class Managerpage extends Component {
    constructor(props){
        super(props);
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
