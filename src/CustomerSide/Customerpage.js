import React, { Component } from 'react'
import Customerbar from './Customerbar'
import Customerbody from './Customerbody'
import data from './data.json'
import historyData from './history.json'
import products from './datamenu.json'
import RestaurantBodyView from './RestaurantBodyView'

export default class Customerpage extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: data.items,
            history: historyData.history,
            product: products.items,
            productSearchString: "",
        }
    }
    onSearchFieldChange = (event) => {
        console.log('Keyboard event');
        console.log(event.target.value);
        this.setState({ productSearchString: event.target.value });
    }
        render(){
        <>
          <RestaurantBodyView/>
        </>
        return (
            <div>
                <div>
                    <Customerbar searchChange={this.onSearchFieldChange}/>
                </div>
                    <div>
                        <Customerbody items={ this.state.items.filter((item) => item.name.toLowerCase().includes(this.state.productSearchString.toLowerCase())) }
                        products={ this.state.product.filter((item) => item.name.toLowerCase().includes(this.state.productSearchString.toLowerCase()))}
                        items={this.state.item} 
                        history={this.state.history}
                        />
                    </div>
            </div>
        )
    }
}
    

