import React, { Component } from 'react'
import Customerbar from './Customerbar'
import Customerbody from './Customerbody'
import data from './data.json'
import historyData from './history.json'
import products from './datamenu.json'
import RestaurantBodyView from './RestaurantBodyView'
import axios from 'axios'

export default class Customerpage extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            history: [],
            ActiveOrders:[],
            product: [],
            productSearchString: "",
            categorySearch:"",
            categories:[],
            DeliveryLocation:"",
            ShoppingCartItems:[],
            TotalCost:0,
            ShoppingCartOpen:false,
            RestaurantID:"",
            OrderWarning:""
        }
    }

    categorySearchChange=(event)=>{
        if(this.state.categorySearch===event.target.value){
            this.setState({categorySearch:""})
        }else{
            this.setState({categorySearch:event.target.value})
        }
    }

    OrderWarningText=(bool)=>{
        if(bool===false){
            this.setState({OrderWarning:"There was a problem in sending the order. Fill all the info boxes and try again"})
        }else{
            this.setState({OrderWarning:""})
        }
    }

    componentDidMount=()=>{
        this.getRestaurants()
        this.getHistory()
        this.getActiveOrders()
    }

    getcategory=(id)=>{
            console.log(this.state.product)
        let Array=[]
        for(let i=0;i<this.state.items.length;i++){
            if(id===this.state.items[i].restaurantId){
                let arr=this.state.items[i].category
                arr.forEach(element=>{
                    if(!Array.includes(element.categoryName)){
                        console.log(element.categoryName)
                        Array.push(element.categoryName)
                    }
                });
                this.setState({categories:Array})
        }
    }
    }

    getRestaurants=()=>{
        axios.get("http://localhost:8080/public")
        .then((Response)=>{
            console.log(Response.data)
            let array=Response.data
            array.forEach(element => {
                if(element.priceLevel==="1"){
                    element.priceLevel="€"
                }else if(element.priceLevel==="2"){
                    element.priceLevel="€€"
                }else if(element.priceLevel==="3"){
                    element.priceLevel="€€€"
                }else if(element.priceLevel==="4"){
                    element.priceLevel="€€€€"
                }
            });
            
            this.setState({items:array})
        })
        .catch((err)=>{console.log(err)})
    }

    getHistory=()=>{
        let header={Authorization:'Bearer '+sessionStorage.getItem('Token')}
        axios.get("http://localhost:8080/customer/OrderHistory",{headers:header})
        .then(Response=>{
            let array=Response.data.filter(element=> element.order_status==5)
            console.log(array)
            this.setState({history:array})
        })
        .catch(err=>{
            console.log(err)
        })
    }

    getActiveOrders=()=>{
        let header={Authorization:'Bearer '+sessionStorage.getItem('Token')}
        axios.get("http://localhost:8080/customer/OrderStatus",{headers:header})
        .then(Response=>{
            this.setState({ActiveOrders:Response.data})
        })
        .catch(err=>{
            console.log(err)
        })
    }

    inputDeliveryLocation=(event)=>{
        this.setState({DeliveryLocation:event.target.value})
    }

    ConfirmOrder=()=>{
        let product=[]
        for(let i=0;i<this.state.ShoppingCartItems.length;i++){
            product.push({product_uuid:this.state.ShoppingCartItems[i].item_id,
                productQuantity:1})
        }
        console.log(this.state.RestaurantID)
        let header={Authorization:'Bearer '+sessionStorage.getItem('Token')}
        axios.post("http://localhost:8080/customer/ShoppingCart",{
            restaurant_uuid:this.state.RestaurantID,
            delivery_location:this.state.DeliveryLocation,
            totalPrice:this.state.TotalCost.toString(),
            orderProducts:product //Array sisältää tuote tiedot
        },{headers:header})
        .then(Response=>{
            if(Response===true){
                this.getActiveOrders()
                this.OrderWarningText(true)
            }
        })
        .catch(err=>{
            this.setState({OrderInfo:"Order was not send"})
            this.OrderWarningText(false)
            console.log(err)
        })
        console.log(this.state.RestaurantID+this.state.CustomerID)
        this.OrderWarningText(true)
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
        console.log(Id)
        for(let i=0;i<this.state.product.length;i++){
            if(this.state.product[i].item_id===Id){
                let Array=[...this.state.ShoppingCartItems]
                Array.push({item_id:this.state.product[i].item_id,
                    image:this.state.product[i].image,
                    Name:this.state.product[i].name,
                    Description:this.state.product[i].productDescription,
                    Price:this.state.product[i].pricePer,
                })
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
        axios.get("http://localhost:8080/public/prod/"+id)
        .then(Response=>{
            this.setState({product:Response.data})
            this.getcategory(id)
            this.setState({RestaurantID:id})
        })
        .catch(err=>{
            console.log(err)
        })
        this.clearSearchBar()
     }


    OrderDelivered=(id)=>{
        axios.post(""+id)
        .then(Response=>{
            console.log(Response)
            this.getActiveOrders()
            this.getHistory()
        })
        .catch(err=>{
            console.log(err)
        })
        let Array=[...this.state.ActiveOrders]
        for(let i=0;i<Array.length;i++){
            if(Array[i].OrderNumber===id){
                Array[i].OrderDelivered=true
                this.setState({ActiveOrders:Array})
            }
        }
    }
    clearSearchBar=()=>{
        this.setState({ productSearchString:""});
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
                    getRestaurants={this.getRestaurants}
                    Logout={this.props.Logout}
                    ShoppingCartItems={this.state.ShoppingCartItems}
                    TotalCost={this.state.TotalCost}
                    ShoppingCartOpen={this.state.ShoppingCartOpen}
                    OrderWarning={this.state.OrderWarning}
                    clearSearchBar={this.clearSearchBar}
                    />
                </div>
                    <div>
                        <Customerbody 
                        items={ this.state.items.filter((item) => item.restaurantName.toLowerCase().includes(this.state.productSearchString.toLowerCase())) }
                        products={ this.state.product.filter((item) => item.name.toLowerCase().includes(this.state.productSearchString.toLowerCase())
                            && item.categoryName.toLowerCase().includes(this.state.categorySearch.toLowerCase()))}
                        history={this.state.history}
                        ActiveOrders={this.state.ActiveOrders}
                        addToShoppingCart={this.addToShoppingCart}
                        restaurantMenuButton={this.restaurantMenuButton}
                        OrderDelivered={this.OrderDelivered}
                        categorySearchChange={this.categorySearchChange}
                        categories={this.state.categories}                  
                        />
                    </div>
            </div>
        )
    }
}
    

