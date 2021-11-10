import React from 'react'
import Mainbar from './Mainbar'
import Mainbody from './Mainbody'
import data from './data.json'

export default class Mainpage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: data.items
    }
}

    render(){
        return (
            <div>
                <div>
                    <Mainbar/>
                </div>
                <div>
                    <Mainbody items={this.state.items}/>
                </div>
            </div>
        )
    }
    
}
