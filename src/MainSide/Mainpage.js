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
            product: products.items
    }
}

    render(){
        return (
            <div>
                <div>
                    <Mainbar/>
                </div>
                <div>
                    <Mainbody items={this.state.items} products={this.state.product}/>
                </div>
            </div>
        )
    }
    
}
    
