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
            history: historyData.history.map(element => {return {...element, OrderDelivered:false, OrderStatus:"Waiting delivery"}}),
            product: products.items,
            productSearchString: "",
            DeliveryLocation:"",
            ShoppingCartItems:[],
            TotalCost:0,
            ShoppingCartOpen:false
        }
    }

    inputDeliveryLocation=(event)=>{
        this.setState({DeliveryLocation:event.target.value})
    }

    ConfirmOrder=()=>{
        console.log(this.state.DeliveryLocation)
        console.log(this.state.TotalCost)
        for(let i=0;i<this.state.ShoppingCartItems.length;i++){
            console.log(this.state.ShoppingCartItems[i].Id)
        }
    }

    TotalCostCount(){
        let Cost=0
        for(let i=0;i<this.state.ShoppingCartItems.length;i++){
            Cost+=Number(this.state.ShoppingCartItems[i].Price)
        }
        Cost=Number(Cost.toFixed(2))
        console.log(Cost)
        this.setState({TotalCost:Cost})
    }

    addToShoppingCart=(Id)=>{
        for(let i=0;i<this.state.product.length;i++){
            if(this.state.product[i].id===Id){
                let Array=[...this.state.ShoppingCartItems]
                Array.push({Id:this.state.product[i].id,image:this.state.product[i].image,Name:this.state.product[i].name,Description:this.state.product[i].description,Price:this.state.product[i].price})
                this.setState({ShoppingCartItems:Array},()=>{this.TotalCostCount()})
            }
        } 
    }

    removeFromShoppingCart=(idDelete)=>{
        for(let i=0;i<this.state.ShoppingCartItems.length;i++){
            if(this.state.ShoppingCartItems[i].Id===idDelete){
                let Array=[...this.state.ShoppingCartItems]
                Array.splice(i,1)
                return this.setState({ShoppingCartItems:Array},()=>{this.TotalCostCount()})
            }
        }
        console.log("no Item Found")
    }

    openShoppingCart=()=>{
        if(this.state.ShoppingCartOpen===false){
            this.setState({ShoppingCartOpen:true})
        }
        else{
            this.setState({ShoppingCartOpen:false})
        }
    }

    onSearchFieldChange = (event) => {
        console.log('Keyboard event');
        console.log(event.target.value);
        this.setState({ productSearchString: event.target.value });
    }
    restaurantMenuButton=(id)=>{
         console.log(id);
     }

     ChangeOrderStatus=(id)=>{
        let Array=[...this.state.history]
        for(let i=0;i<this.state.history.length;i++){
            if(this.state.history[i].OrderNumber===id){
                if(this.state.history[i].OrderStatus==="Waiting delivery"){
                    Array[i].OrderStatus="Delivered"
                    this.setState({history:Array})
                }
            }
        }
    }

    OrderDelivered=(id)=>{
        let Array=[...this.state.history]
        for(let i=0;i<Array.length;i++){
            if(Array[i].OrderNumber===id){
                Array[i].OrderDelivered=true
                this.setState({history:Array},()=>this.ChangeOrderStatus(id))
            }
        }
    }
        render(){
        <>
          <RestaurantBodyView/>
        </>
        return (
            <div>
                <div>
                    <Customerbar 
                    searchChange={this.onSearchFieldChange} 
                    openShoppingCart={this.openShoppingCart}
                    removeFromShoppingCart={this.removeFromShoppingCart}
                    DeliveryLocation={this.inputDeliveryLocation}
                    ConfirmOrder={this.ConfirmOrder}
                    ShoppingCartItems={this.state.ShoppingCartItems}
                    TotalCost={this.state.TotalCost}
                    ShoppingCartOpen={this.state.ShoppingCartOpen}/>
                </div>
                    <div>
                        <Customerbody 
                        items={ this.state.items.filter((item) => item.name.toLowerCase().includes(this.state.productSearchString.toLowerCase())) }
                        products={ this.state.product.filter((item) => item.name.toLowerCase().includes(this.state.productSearchString.toLowerCase()))}
                        history={this.state.history}
                        addToShoppingCart={this.addToShoppingCart}
                        restaurantMenuButton={this.restaurantMenuButton}
                        OrderDelivered={this.OrderDelivered}
                        />
                    </div>
            </div>
        )
    }
}
    

