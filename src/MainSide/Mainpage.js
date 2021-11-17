import React from 'react'
import Mainbar from './Mainbar'
import Mainbody from './Mainbody'
import data from './data.json'
import products from './datamenu.json'

export default class Mainpage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: data.items,
            product: products.items,
            CreateAccountInputValue:""
    }
}
InputChange=(event)=>{
    this.setState({CreateAccountInputValue:event.target.value})
    console.log(event.target.value)
}
CategoryCreate=()=>{
    console.log(this.state.CreateAccountInputValue)
}
    render(){
        return (
            <div>
                <div>
                    <Mainbar/>
                </div>
                <div>
                    <Mainbody 
                    items={this.state.items} 
                    products={this.state.product}
                    CreateAccountInputs={this.state.CreateAccountInputValue}
                    AccountCreate={this.AccountCreate}
                    />
                </div>
            </div>
        )
    }
    
}
    
