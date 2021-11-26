import React from 'react'
import Mainbar from './Mainbar'
import Mainbody from './Mainbody'
import data from './data.json'
import products from './datamenu.json'
import axios from 'axios'

export default class Mainpage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: data.items,
            product: products.items,
            CreateAccountNameValue:"",
            CreateAccountPasswordValue: "",
            LoginNameValue:"",
            LoginPasswordValue: "",
            productSearchString: "",
            createManagerCheck:false,
            loginManagerCheck:false
        }
    }

componentDidMount=()=>{
    axios.get("http://localhost:4000/hold")
    .then((Response)=>{
        this.setState({items:Response})
    })
    .catch((err)=>{console.log(err)})
}

GetRestaurantProducts=(id)=>{
    console.log(id)
    axios.get("http://localhost:4000/:"+id)
    .then((Response)=>{
        this.setState({product:Response})
    })
    .catch((err)=>{console.log(err)})
}


CreateNameAccount=(event)=>{
    this.setState({CreateAccountNameValue:event.target.value})
    console.log(event.target.value)
}
CreatePasswordInput=(event)=>{
    this.setState({CreateAccountPasswordValue:event.target.value})
    console.log(event.target.value)
}
AccountCreate=()=>{
    if(this.state.createManagerCheck===true){
        axios.post("http://localhost:4000/hold")
        .then(Response=>{
            
        })
        .catch(err=>{
            console.log(err)
        })
        console.log(this.state.CreateAccountNameValue)
        console.log(this.state.CreateAccountPasswordValue)
        console.log('Restaurant manager account')
        console.log(this.state.createManagerCheck) 
    }
    else{
        axios.post("http://localhost:4000/hold")
        .then(Response=>{

        })
        .catch((err)=>{
            console.log(err)
        })
        console.log(this.state.CreateAccountNameValue)
        console.log(this.state.CreateAccountPasswordValue)
    }
}
LoginName=(event)=>{
    this.setState({LoginNameValue:event.target.value})
    console.log(event.target.value)
}
LoginPasswordInput=(event)=>{
    this.setState({LoginPasswordValue:event.target.value})
    console.log(event.target.value)
}
Login=()=>{
    if(this.state.loginManagerCheck===true){
        axios.post("http://localhost:4000/hold")
        .then(Response=>{

        })
        .catch(err=>{
            console.log(err)
        })
        console.log(this.state.LoginNameValue)
        console.log(this.state.LoginPasswordValue)
        console.log('Restaurant manager account')
        console.log(this.state.loginManagerCheck) 
    }
    else{
        axios.post("http://localhost:4000/hold")
        .then(Response=>{

        })
        .catch(err=>{
            console.log(err)
        })
        console.log(this.state.LoginNameValue)
        console.log(this.state.LoginPasswordValue)
    }
}
onSearchFieldChange=(event)=>{
    console.log('Keyboard event');
    console.log(event.target.value);
    this.setState({ productSearchString: event.target.value });
}
restaurantMenuButton=(id)=>{
    this.GetRestaurantProducts(id)
}
managerCheckChange=()=>{
    if(this.state.createManagerCheck===false){
    this.setState({createManagerCheck:true})
    }
    else{
        this.setState({createManagerCheck:false})
    }
}
managerLoginCheckChange=()=>{
    if(this.state.loginManagerCheck===false){
    this.setState({loginManagerCheck:true})
    }
    else{
        this.setState({loginManagerCheck:false})
    }
}
    render(){
        return (
            <div>
                <div>
                    <Mainbar searchChange={this.onSearchFieldChange}/>
                </div>
                <div>
                    <Mainbody items={ this.state.items.filter((item) => item.name.toLowerCase().includes(this.state.productSearchString.toLowerCase())) }
                    products={ this.state.product.filter((item) => item.name.toLowerCase().includes(this.state.productSearchString.toLowerCase()))} 
                    products={this.state.product}
                    CreateAccountInputs={this.state.CreateAccountNameValue}
                    CreateAccountPassword={this.state.CreateAccountPasswordValue}
                    AccountCreate={this.AccountCreate}
                    CreateNameAccount={this.CreateNameAccount}
                    CreatePasswordInput={this.CreatePasswordInput}
                    LoginInputs={this.state.LoginNameValue}
                    LoginPasswordInputs={this.state.LoginPasswordValue}
                    Login={this.Login}
                    LoginName={this.LoginName}
                    LoginPasswordInput={this.LoginPasswordInput}
                    restaurantMenuButton={this.restaurantMenuButton}
                    createManagerCheck={this.state.createManagerCheck}
                    managerCheckChange={this.managerCheckChange}
                    loginManagerCheck={this.state.loginManagerCheck}
                    managerLoginCheckChange={this.managerLoginCheckChange}
                    />
                 </div>
            </div>
        )
    }
}
    
