import React, { Component } from 'react'
import Managerbar from './Managerbar'
import Managerbody from './Managerbody'
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
            ProductInputValue:[{Restaurant:" ",Category:" ",Name:" ",Description:" ",Price:" "}],
            RestaurantInputValue:[{Name:"",Address:"",OperatingHours:"",RestaurantType:"",PriceLevel:""}],
            CategoryInputValue:null,
            RestaurantInputId:null,
            ManagerID:this.props.AccountId,
            Token:this.props.Token,
            selectfile:null
        }
    }

    componentDidMount=()=>{
        console.log(this.state.ProductInputValue)
        this.getRestaurants()
        this.getReceiveOrder()
        this.getHistory()
    }

    getRestaurants=()=>{
        axios.get("https://awa-project.herokuapp.com/manager/restaurants",{headers:{Authorization:'Bearer '+sessionStorage.getItem("Token")}})
        .then(Response=>{
            this.setState({selectValue:Response.data},()=>this.getcategory())
        })
        .catch(err=>{
            console.log(err)
        })
    }

    getcategory=()=>{
        if(CategoryValues===[]){
        let array=this.state.selectValue[0].category
        this.setState({CategoryValues:array})
        }
    }

    getHistory=()=>{
        let header={Authorization:'Bearer '+sessionStorage.getItem("Token")}
        axios.get("https://awa-project.herokuapp.com/manager/OrderStatus",{headers:header})
        .then(Response=>{
            let array=Response.data.filter(element=> element.order_status===5)
            array.forEach(element => {
                element.order_status="Delivered"
            });
            this.setState({history:array})
        })
        .catch(err=>{
            console.log(err)
        })
    }

    getReceiveOrder=()=>{
        let header={Authorization:'Bearer '+sessionStorage.getItem("Token")}
        axios.get("https://awa-project.herokuapp.com/manager/OrderStatus",{headers:header})
        .then(Response=>{
            let array=Response.data.filter(element=> element.order_status<5)
            for(let i=0;i<array.length;i++){
                if(array[i].order_status===1){
                    array[i].order_status="Received"
                }else if(array[i].order_status===2){
                    array[i].order_status="Preparing"
                }else if(array[i].order_status===3){
                    array[i].order_status="Ready for delivery"
                }else if(array[i].order_status===4){
                    array[i].order_status="Delivering"
                }
            }
            this.setState({item:array})
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
            if(Array[i].order_id===id){
                let status
                if(Array[i].order_status==="Received"){
                    status=2
                }else if(Array[i].order_status==="Preparing"){
                    status=3
                }else if(Array[i].order_status==="Ready for delivery"){
                    status=4
                }
                let data={order_id:Array[i].order_id,orderStatusCode:status}
                let header={Authorization:'Bearer '+sessionStorage.getItem('Token')}
                axios.post("https://awa-project.herokuapp.com/manager/Orders",data,{headers:header})
                .then(Response=>{
                    console.log(Response)
                    this.getReceiveOrder()
                })
                .catch(err=>{
                    console.log(err)
                })
            }
        }
    }

    InputChange=(event)=>{
        this.setState({CategoryInputValue:event.target.value})
    }

    ProductInputChange=(event)=>{
        const value = event.target.value
        const name = event.target.name
        let Array=[...this.state.ProductInputValue]
        Array[0][name]=value
        this.setState({ProductInputValue:Array})
    }

    RestaurantInputChange=(event)=>{
        const value = event.target.value
        const name = event.target.name
        let Array=[...this.state.RestaurantInputValue]
        Array[0][name]=value
        this.setState({RestaurantInputValue:Array})
    }

    CategoryCreate=()=>{
        let restid
        if(this.state.RestaurantInputId===null){
            restid=this.state.selectValue[0].restaurantId
        }else{
            restid=this.state.RestaurantInputId
        }
        let header={Authorization:'Bearer '+sessionStorage.getItem('Token')}
        axios.post("https://awa-project.herokuapp.com/manager/addCategory",{restaurantId:restid,
        categoryName:this.state.CategoryInputValue},
        {headers:header})
        .then(Response=>{
            console.log(Response)
            this.getRestaurants()
        })
        .catch(err=>{
            console.log(err)
        })
    }

    ProductCreate=()=>{
        const fd= new FormData();
        fd.append("image",this.state.selectfile)
        fd.append('category_uuid',this.state.ProductInputValue[0].Category)
        fd.append('productName',this.state.ProductInputValue[0].Name)
        fd.append('product_description',this.state.ProductInputValue[0].Description)
        fd.append('price',this.state.ProductInputValue[0].Price)
        let header={Authorization:'Bearer '+sessionStorage.getItem("Token")}
        axios.post("https://awa-project.herokuapp.com/manager/addNewProduct",fd,{headers:header})
        .then(Response=>{
            console.log(Response)
            this.getRestaurants()
        })
        .catch(err=>{
            console.log(err)
        })
    }

    RestaurantCreate=()=>{
        
        let header={Authorization:'Bearer '+sessionStorage.getItem("Token")}
        const fd= new FormData();
        fd.append("image",this.state.selectfile)
        fd.append('restaurantName',this.state.RestaurantInputValue[0].Name)
        fd.append('address',this.state.RestaurantInputValue[0].Address)
        fd.append('operating_hours',this.state.RestaurantInputValue[0].OperatingHours)
        if(this.state.RestaurantInputValue[0].RestaurantType===""){
            fd.append('style',this.state.RestaurantType[0].Type)
        }else{
            fd.append('style',this.state.RestaurantInputValue[0].RestaurantType)
        }
        if(this.state.RestaurantInputValue[0].PriceLevel===""){
            fd.append('priceLevel',this.state.PriceLevel[0].Level.length)
        }else{
            fd.append('priceLevel',this.state.RestaurantInputValue[0].PriceLevel.length)
        }
        
        axios.post("https://awa-project.herokuapp.com/manager/CreateRestaurant",fd,{headers:header})
        .then(Response=>{
            console.log(Response)
            this.getRestaurants()
        })
        .catch(err=>{
            console.log(err)
        })
    }

    selectChange=(event)=>{
        this.setState({RestaurantInputId:event.target.value})
        this.getReceiveOrder()
        this.getHistory()
        for(let i=0;i<this.state.selectValue.length;i++){
            if(event.target.value===this.state.selectValue[i].restaurantId){
                if(this.state.selectValue[i].category.length>0){
                let array=this.state.selectValue[i].category
                this.setState({CategoryValues:array})
                }else{
                    let array=[]
                    this.setState({CategoryValues:array})
                }
            }
        }
        for(let i=0;i<this.state.selectValue.length;i++){
            if(this.state.selectValue[i].restaurantId===event.target.value){
                if(this.state.selectValue[i].category.length>0){
                let array=[...this.state.ProductInputValue]
                array.Category=this.state.selectValue[i].category[0].category_Id
                this.setState({ProductInputValue:array})
                }else{
                    let array=[...this.state.ProductInputValue]
                    this.setState({ProductInputValue:array})
                }
            }
        }
    }

    filechange=(event)=>{
        let img=event.target.files[0]
        this.setState({selectfile:img})
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
