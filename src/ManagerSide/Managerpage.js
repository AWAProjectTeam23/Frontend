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
            CategoryInputValue:null,
            RestaurantInputId:null,
            ManagerID:this.props.AccountId,
            Token:this.props.Token,
            selectfile:null
        }
    }

    componentDidMount=()=>{
        this.getRestaurants()
        
    }

    getRestaurants=(id)=>{
        axios.get("http://localhost:8080/manager/restaurants",{headers:{Authorization:'Bearer '+sessionStorage.getItem("Token")}})
        .then(Response=>{
            console.log(Response)
            this.setState({selectValue:Response.data}/*,()=>this.getReceiveOrder(this.state.selectValue[0].Id)
            ,()=>this.getHistory(this.state.selectValue)*/)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    getHistory=(Id)=>{
        console.log(Id)
        let getid=Id.restaurantId
        axios.get("http://localhost:8080/public/OrderHistory/",getid)
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
        console.log(this.state.RestaurantInputValue)
        let header={Authorization:'Bearer '+sessionStorage.getItem('Token')}
        axios.post("http://localhost:8080/manager/addCategory",{restaurantId:this.state.RestaurantInputId,
        categoryName:this.state.CategoryInputValue},
        {headers:header})
        .then(Response=>{
            console.log(Response)
            this.getRestaurants()
        })
        .catch(err=>{
            console.log(err)
        })
        console.log(this.state.CategoryInputValue)
    }

    ProductCreate=()=>{
        const fd= new FormData();
        fd.append("image",this.state.selectfile)
        fd.append('category_uuid',this.state.ProductInputValue[0].Category)
        fd.append('productName',this.state.ProductInputValue[0].Name)
        fd.append('product_description',this.state.ProductInputValue[0].Description)
        fd.append('price',this.state.ProductInputValue[0].Price)
        let header={Authorization:'Bearer '+sessionStorage.getItem("Token")}
        axios.post("http://localhost:8080/manager/addNewProduct",fd,{headers:header})
        .then(Response=>{
            console.log(Response)
            this.getRestaurants()
        })
        .catch(err=>{
            console.log(err)
        })
        console.log(this.state.ProductInputValue[0].Restaurant)
        console.log(this.state.ProductInputValue[0].Category)
        console.log(this.state.ProductInputValue[0].Name)
        console.log(this.state.ProductInputValue[0].Description)
        console.log(this.state.ProductInputValue[0].Price)
        console.log(fd)
    }

    RestaurantCreate=()=>{
        let header={Authorization:'Bearer '+sessionStorage.getItem("Token")}
        const fd= new FormData();
        fd.append("image",this.state.selectfile)
        fd.append('restaurantName',this.state.RestaurantInputValue[0].Name)
        fd.append('address',this.state.RestaurantInputValue[0].Address)
        fd.append('operating_hours',this.state.RestaurantInputValue[0].OperatingHours)
        fd.append('style',this.state.RestaurantInputValue[0].RestaurantType)
        fd.append('priceLevel',this.state.RestaurantInputValue[0].PriceLevel.length)
        axios.post("http://localhost:8080/manager/CreateRestaurant",fd,{headers:header})
        .then(Response=>{
            console.log(Response)
            this.getRestaurants()
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
        this.setState({RestaurantInputId:event.target.value})
       // this.getReceiveOrder(event.target.value)
       // this.getHistory(event.target.value)
        console.log(this.state.selectValue[2].category)
        for(let i=0;i<this.state.selectValue.length;i++){
            if(event.target.value===this.state.selectValue[i].restaurantId){
                let array=this.state.selectValue[i].category
                this.setState({CategoryValues:array})
            }
        }
        for(let i=0;i<this.state.selectValue.length;i++){
            if(this.state.selectValue[i].restaurantId===event.target.value){
                let array=[...this.state.ProductInputValue]
                array[0].Category=this.state.selectValue[i].category[0].category_Id
                this.setState({ProductInputValue:array})
            }
        }
    }

    filechange=(event)=>{
        let img=event.target.files[0]
        this.setState({selectfile:img})
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
