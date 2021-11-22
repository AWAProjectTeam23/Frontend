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
            CreateAccountNameValue:"",
            CreateAccountPasswordValue: "",
            LoginNameValue:"",
            LoginPasswordValue: ""
            productSearchString: "",
        }
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
    console.log(this.state.CreateAccountNameValue)
    console.log(this.state.CreateAccountPasswordValue)
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
    console.log(this.state.LoginNameValue)
    console.log(this.state.LoginPasswordValue)
}
  
onSearchFieldChange = (event) => {
        console.log('Keyboard event');
        console.log(event.target.value);
        this.setState({ productSearchString: event.target.value });
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
                    />
                 </div>
            </div>
        )
    }
}
    
