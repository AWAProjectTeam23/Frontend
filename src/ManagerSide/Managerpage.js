import React, { Component } from 'react'
import Managerbar from './Managerbar'
import Managerbody from './Managerbody'
import data from './data.json'
import historyData from './History.json'
import axios from 'axios'


export default class Managerpage extends Component {
    constructor(props){
        super(props);
        this.state={
            item: [],
            history: [],
            selectValue: data.Restaurants,
            CategoryValues:[],
            RestaurantType:[{Type:"Buffet"},{Type:"Fast food"},{Type:"Fast casual"},{Type:"Casual dining"},{Type:"Fine dining"}],
            PriceLevel:[{Level:"€"},{Level:"€€"},{Level:"€€€"},{Level:"€€€€"}],
            ProductInputValue:[{Restaurant:"",Category:"",Name:"",Description:"",Price:"",Image:""}],
            RestaurantInputValue:[{Name:"",Address:"",OperatingHours:"",Image:"",RestaurantType:"",PriceLevel:""}],
            CategoryInputValue:"",
            ManagerID:""
        }
    }

    componentDidMount=()=>{
        //this.getRestaurants(ManagerID)
    }

    getRestaurants=(id)=>{
        axios.get(""+id)
        .then(Response=>{
            this.setState({selectValue:Response},()=>this.getReceiveOrder(this.state.selectValue[0].Id)
            ,()=>this.getHistory(this.state.selectValue[0].Id))
        })
        .catch(err=>{
            console.log(err)
        })
    }

    getHistory=(id)=>{
        console.log(id)
        axios.get("http://localhost:4000/hold")
        .then(Response=>{
            this.setState({history:Response})
        })
        .catch(err=>{
            console.log(err)
        })
    }

    getReceiveOrder=(id)=>{
        console.log(id)
        axios.get("http://localhost:4000/hold")
        .then(Response=>{
            this.setState({item:Response})
        })
        .catch(err=>{
            console.log(err)
        })
    }

    ChangeOrderStatus=(id)=>{
        axios.post(""+id)
        .then(Response=>{
            
        })
        .catch(err=>{
            console.log(err)
        })
        let Array=[...this.state.item]
        for(let i=0;i<this.state.item.length;i++){
            if(this.state.item[i].OrderNumber===id){
                if(this.state.item[i].OrderStatus==="Waiting Confirmation"){
                    Array[i].OrderStatus="Received"
                    this.setState({item:Array})
                }
            }
        }
    }

    OrderConfirmed=(id)=>{
        let Array=[...this.state.item]
        for(let i=0;i<Array.length;i++){
            if(Array[i].OrderNumber===id){
                Array[i].OrderConfirmed=true
                this.setState({item:Array},()=>this.ChangeOrderStatus(id))
            }
        }
    }

    InputChange=(event)=>{
        this.setState({CategoryInputValue:event.target.value})
        console.log(event.target.value)
    }

    ProductInputChange=(event)=>{
        const value = event.target.value
        const name = event.target.name
        let Array=[...this.state.ProductInputValue]
        Array[0][name]=value
        this.setState({ProductInputValue:Array})
        console.log(name)
        console.log(event.target.value)
    }

    RestaurantInputChange=(event)=>{
        const value = event.target.value
        const name = event.target.name
        let Array=[...this.state.RestaurantInputValue]
        Array[0][name]=value
        this.setState({RestaurantInputValue:Array})
        console.log(event.target.value)
    }

    CategoryCreate=()=>{
        axios.post("http://localhost:4000/hold")
        .then(Response=>{
            console.log(Response)
        })
        .catch(err=>{
            console.log(err)
        })
        console.log(this.state.CategoryInputValue)
    }

    ProductCreate=()=>{
        axios.post("http://localhost:4000/hold",{
            Restaurant:this.state.ProductInputValue[0].Restaurant,
            Category:this.state.ProductInputValue[0].Category,
            Name:this.state.ProductInputValue[0].Name,
            Description:this.state.ProductInputValue[0].Description,
            Price:this.state.ProductInputValue[0].Price,
            Image:this.state.ProductInputValue[0].Image
        })
        .then(Response=>{
            console.log(Response)
        })
        .catch(err=>{
            console.log(err)
        })
        console.log(this.state.ProductInputValue[0].Restaurant)
        console.log(this.state.ProductInputValue[0].Category)
        console.log(this.state.ProductInputValue[0].Name)
        console.log(this.state.ProductInputValue[0].Description)
        console.log(this.state.ProductInputValue[0].Price)
        console.log(this.state.ProductInputValue[0].Image)
    }

    RestaurantCreate=()=>{
        axios.post("http://localhost:4000/hold",{
            Name:this.state.RestaurantInputValue[0].Name,
            Address:this.state.RestaurantInputValue[0].Address,
            OperatingHours:this.state.RestaurantInputValue[0].OperatingHours,
            Image:this.state.RestaurantInputValue[0].Image,
            RestaurantType:this.state.RestaurantInputValue[0].RestaurantType,
            PriceLevel:this.state.RestaurantInputValue[0].PriceLevel
        })
        .then(Response=>{
            console.log(Response)
        })
        .catch(err=>{
            console.log(err)
        })
        console.log(this.state.RestaurantInputValue[0].Name)
        console.log(this.state.RestaurantInputValue[0].Address)
        console.log(this.state.RestaurantInputValue[0].OperatingHours)
        console.log(this.state.RestaurantInputValue[0].Image)
        console.log(this.state.RestaurantInputValue[0].RestaurantType)
        console.log(this.state.RestaurantInputValue[0].PriceLevel)
    }

    selectChange=(event)=>{
        this.getReceiveOrder(event.target.value)
        this.getHistory(event.target.value)
    }

    

    render(){
        return (
            <div>
                <div>
                     <Managerbar selectValue={this.state.selectValue} 
                     selectChange={this.selectChange}
                     getHistory={this.getHistory}
                     getReceiveOrder={this.getReceiveOrder}
                     Logout={this.props.Logout}/>
                </div>
                <div>
                <Managerbody 
                items={this.state.item} 
                history={this.state.history}
                CategoryInputs={this.state.CategoryInputValue}
                ProductInputs={this.state.ProductInputValue}
                RestaurantInputs={this.state.RestaurantInputValue}
                SelectValue={this.state.selectValue}
                CategoryValues={this.state.CategoryValues}
                RestaurantType={this.state.RestaurantType}
                PriceLevel={this.state.PriceLevel}
                OrderConfirmed={this.OrderConfirmed}
                CategoryCreate={this.CategoryCreate}
                ProductCreate={this.ProductCreate}
                RestaurantCreate={this.RestaurantCreate}
                InputChange={this.InputChange}
                ProductInputChange={this.ProductInputChange}
                RestaurantInputChange={this.RestaurantInputChange}
                />
                </div>
            </div>
            
        )
    }
    
}
