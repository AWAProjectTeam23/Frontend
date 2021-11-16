import React from 'react'
import Mainbar from './Mainbar'
import Mainbody from './Mainbody'
import data from './data.json'
import products from './datamenu.json'
import RestaurantBodyView from './RestaurantBodyView'

export default class Mainpage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: data.items,
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
                    <Mainbar searchChange={this.onSearchFieldChange}/>
                </div>
                    <div>
                        <Mainbody items={ this.state.items.filter((item) => item.name.toLowerCase().includes(this.state.productSearchString.toLowerCase())) }
                        products={ this.state.product.filter((item) => item.name.toLowerCase().includes(this.state.productSearchString.toLowerCase()))}
                        />
                    </div>
            </div>
        )
    }
}
    
