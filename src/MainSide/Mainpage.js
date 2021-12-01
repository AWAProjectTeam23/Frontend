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
            productSearchString: "",
            createManagerCheck:false,
            CreateWarning:""
        }
    }

CreateWarningText=(bool)=>{
    if(bool==false){
        this.setState({CreateWarning:"There was a problem in the account creation. Fill both of the boxes and try again"})
    }else{
        this.setState({CreateWarning:""})
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
        /*axios.post("http://localhost:4000/hold")
        .then(Response=>{
            this.CreateWarningText(false)
        })
        .catch(err=>{
            console.log(err)
        })*/
        
        console.log(this.state.CreateAccountNameValue)
        console.log(this.state.CreateAccountPasswordValue)
        console.log('Restaurant manager account')
        console.log(this.state.createManagerCheck) 
    }
    else{
        /*axios.post("http://localhost:4000/hold")
        .then(Response=>{

        })
        .catch((err)=>{
            console.log(err)
        })*/
        this.CreateWarningText(true)
        console.log(this.state.CreateAccountNameValue)
        console.log(this.state.CreateAccountPasswordValue)
    }
}

onSearchFieldChange=(event)=>{
    console.log('Keyboard event');
    console.log(event.target.value);
    this.setState({ productSearchString: event.target.value });
}
restaurantMenuButton=(id)=>{
    this.clearSearchBar()
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
clearSearchBar=()=>{
    this.setState({ productSearchString:""});
}

    render(){
        return (
            <div>
                <div>
                    <Mainbar 
                    searchChange={this.onSearchFieldChange}
                    clearSearchBar={this.clearSearchBar}/>
                </div>
                <div>
                    <Mainbody items={ this.state.items.filter((item) => item.name.toLowerCase().includes(this.state.productSearchString.toLowerCase())) }
                    products={ this.state.product.filter((item) => item.name.toLowerCase().includes(this.state.productSearchString.toLowerCase()))} 
                    CreateAccountInputs={this.state.CreateAccountNameValue}
                    CreateAccountPassword={this.state.CreateAccountPasswordValue}
                    AccountCreate={this.AccountCreate}
                    CreateNameAccount={this.CreateNameAccount}
                    CreatePasswordInput={this.CreatePasswordInput}
                    LoginInputs={this.props.LoginNameChange}
                    LoginPasswordInputs={this.props.LoginPassword}
                    Login={this.props.Login}
                    LoginName={this.props.LoginName}
                    LoginPasswordInput={this.props.LoginPasswordChange}
                    restaurantMenuButton={this.restaurantMenuButton}
                    createManagerCheck={this.state.createManagerCheck}
                    managerCheckChange={this.managerCheckChange}
                    managerLoginCheckChange={this.props.Managercheck}
                    LoginWarning={this.props.LoginWarning}
                    CreateWarning={this.state.CreateWarning}
                    />
                 </div>
            </div>
        )
    }
}
    
