import React, { Component } from 'react'
import Customerbar from './Customerbar'
import Customerbody from './Customerbody'
import data from './data.json'
import products from './datamenu.json'

export default class Customerpage extends Component {
    constructor(props){
        super(props)
        this.state = {
            items: data.items,
            product: products.items
        }
    }
    render(){
        return (
            <div>
                <div>
                    <Customerbar/>
                </div>
                <div>
                    <Customerbody items={this.state.items} products={this.state.product}/>
                </div>
            </div>
        )
    }
    
}
