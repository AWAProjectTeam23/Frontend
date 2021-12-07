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
            selectValue: [],
            CategoryValues:[],
            RestaurantType:[{Type:"Buffet"},{Type:"Fast food"},{Type:"Fast casual"},{Type:"Casual dining"},{Type:"Fine dining"}],
            PriceLevel:[{Level:"€"},{Level:"€€"},{Level:"€€€"},{Level:"€€€€"}],
            ProductInputValue:[{Restaurant:"",Category:"",Name:"",Description:"",Price:""}],
            RestaurantInputValue:[{Name:"",Address:"",OperatingHours:"",RestaurantType:"",PriceLevel:""}],
            CategoryInputValue:"",
            ManagerID:this.props.AccountId,
            Token:this.props.Token,
            selectfile:null
        }
    }

    componentDidMount=()=>{
        this.getRestaurants(this.state.ManagerID)
        if(this.state.CategoryValues.length>=1){
            let Array=[...this.state.ProductInputValue]
            Array[0].Category=this.state.CategoryValues[0].Category
            this.setState({ProductInputValue:Array})
        }
        if(this.state.selectValue.length>=1){
            let Array=[...this.state.ProductInputValue]
            Array[0].Restaurant=this.state.selectValue[0].name
            this.setState({ProductInputValue:Array})
        }
    }

    getRestaurants=(id)=>{
        axios.get("http://localhost:8080/public/restaurants",{params:{"manager_id":id}})
        .then(Response=>{
            console.log(Response)
            this.setState({selectValue:Response.data}/*,()=>this.getReceiveOrder(this.state.selectValue[0].Id)*/
            ,()=>this.getHistory(this.state.selectValue))
        })
        .catch(err=>{
            console.log(err)
        })
    }

    getHistory=(Id)=>{
        console.log(Id)
        let getid=Id.id
        axios.get("http://localhost:8080/public/OrderHistory/"+getid)
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
        let body={}
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
        console.log(this.state.selectfile)
    }

    RestaurantCreate=()=>{
        axios.post("http://localhost:8080/public/CreateRestaurant",{
            restaurantName:this.state.RestaurantInputValue[0].Name,
            address:this.state.RestaurantInputValue[0].Address,
            open_hour:this.state.RestaurantInputValue[0].OperatingHours,
            image:this.state.selectfile,
            style:this.state.RestaurantInputValue[0].RestaurantType,
            pricelevel:this.state.RestaurantInputValue[0].PriceLevel,
            manager_id:this.state.ManagerID
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
        console.log(this.state.selectfile)
        console.log(this.state.RestaurantInputValue[0].RestaurantType)
        console.log(this.state.RestaurantInputValue[0].PriceLevel)
    }

    selectChange=(event)=>{
        this.getReceiveOrder(event.target.value)
        this.getHistory(event.target.value)
    }

    filechange=(event)=>{
        this.setState({selectfile:event.target.files[0]})
        console.log(this.state.selectfile)
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
                selectfile={this.state.selectfile}
                OrderConfirmed={this.OrderConfirmed}
                CategoryCreate={this.CategoryCreate}
                ProductCreate={this.ProductCreate}
                RestaurantCreate={this.RestaurantCreate}
                InputChange={this.InputChange}
                ProductInputChange={this.ProductInputChange}
                RestaurantInputChange={this.RestaurantInputChange}
                filechange={this.filechange}
                />
                </div>
            </div>
            
        )
    }
    
}
