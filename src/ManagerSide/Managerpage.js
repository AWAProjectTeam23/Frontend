import React, { Component } from 'react'
import Managerbar from './Managerbar'
import Managerbody from './Managerbody'
import data from './data.json'
import historyData from './History.json'

export default class Managerpage extends Component {
    constructor(props){
        super(props);
        this.state={
            item: data.order,
            history: historyData.history,
            selectValue:[{name:"a"},{name:"b"},{name:"c"},{name:"d"}],
            selectedValue:""
        }
    }

    selectChange=(value)=>{
        this.setState({selectedValue:value});
    }

    render(){
        return (
            <div>
                <div>
                     <Managerbar selectValue={this.state.selectValue} selectChange={this.selectChange} selectedValue={this.state.selectedValue}/>
                </div>
                <div>
                <Managerbody items={this.state.item} history={this.state.history}/>
                </div>
            </div>
            
        )
    }
    
}
