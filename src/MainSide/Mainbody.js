import { render } from '@testing-library/react';
import React from 'react'

export default class Mainbody extends React.Component{
    constructor(props){
        super(props)
        this.state={
        }
    }
    
    render(){
        if(this.props.mode===0){
            return (
                <div>
                    restaurant
                </div>
            )
        }
        if(this.props.mode===1){
            return (
                <div>
                    createaccount
                </div>
            )
        }
        if(this.props.mode===2){
            return (
                <div>
                    loginaccount
                </div>
            )
        }
        
    }
    
}
