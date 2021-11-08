import React from 'react'
import Mainbar from './Mainbar'
import Mainbody from './Mainbody'

export default class Mainpage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            viewMode:0
        }
    }

    render(){
        return (
            <div>
                <div>
                    <Mainbar/>
                </div>
                <div>
                    <Mainbody mode={this.state.viewMode}/>
                </div>
            </div>
        )
    }
    
}
