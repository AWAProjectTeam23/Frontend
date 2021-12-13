import React from "react";
import Mainpage from "./MainSide/Mainpage";
import Customerpage from "./CustomerSide/Customerpage";
import Managerpage from "./ManagerSide/Managerpage";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import MOrderHistory from './ManagerSide/OrderHistory'
import ReceiveOrder from './ManagerSide/ReceiveOrder'
import CreateProduct from'./ManagerSide/CreateProduct'
import CreateRestaurant from './ManagerSide/CreateRestaurant'
import CreateCategory from './ManagerSide/CreateCategory'
import CRestaurantbody from "./CustomerSide/Restaurantbody";
import CRestaurantMenu from "./CustomerSide/RestaurantMenu";
import COrderHistory from "./CustomerSide/OrderHistory";
import CReceiveDelivery from "./CustomerSide/ReceiveDelivery";
import RestaurantBody from './MainSide/RestaurantBody';
import RestaurantMenu from './MainSide/RestaurantMenu';
import CreateAccount from './MainSide/CreateAccount';
import LoginAccount from './MainSide/LoginAccount';
import axios from "axios";
import { encode } from "base-64";

class App extends React.Component{
  constructor(props){
    super(props);
    let navigate=
    this.state={
      Manager:false,
      LoginNameValue:"",
      LoginPasswordValue: "",
      LoginWarning:"",
      buttonPressed:false
    }
  }


  LoginWarningText=(bool)=>{
    if(bool===false){
      this.setState({LoginWarning:"User name or password was wrong please try again"})
    }else{
      this.setState({LoginWarning:""})
    }
  }

  Login=()=>{
    const encoded=encode(this.state.LoginNameValue+":"+this.state.LoginPasswordValue)
    const header={Authorization:`Basic ${encoded}`}
    if(this.state.Manager===true){
        axios.post("https://awa-project.herokuapp.com/login",null,{headers:header})
        .then(Response=>{
          sessionStorage.setItem("Token",Response.data.access_token)
          this.LoginWarningText(true)
          this.setState({buttonPressed:true})
          return true
        })
        .catch(err=>{
            console.log(err)
            this.LoginWarningText(false)
            return false
        })
    }
    else{
        const encoded=encode(this.state.LoginNameValue+":"+this.state.LoginPasswordValue)
        const header={Authorization:`Basic ${encoded}`}
        axios.post("https://awa-project.herokuapp.com/login",null,{headers:header})
        .then(Response=>{
          sessionStorage.setItem("Token",Response.data.access_token)
          this.LoginWarningText(true)
          this.setState({buttonPressed:true})
          return true
        })
        .catch(err=>{
            console.log(err)
            this.LoginWarningText(false)
            return false
        })
    }
  }

LoginName=(event)=>{
  this.setState({LoginNameValue:event.target.value})
}
LoginPasswordInput=(event)=>{
  this.setState({LoginPasswordValue:event.target.value})
}
managerLoginCheckChange=()=>{
  if(this.state.Manager===false){
  this.setState({Manager:true})
  }
  else{
      this.setState({Manager:false})
  }
}

Logout=()=>{
  sessionStorage.setItem("Token",null)
  this.setState({buttonPressed:false})
  this.setState({Manager:false})
  this.setState({LoginNameValue:""})
  this.setState({LoginPasswordValue:""})
}

  
render(){
  let manager=this.state.Manager
  let press=this.state.buttonPressed
  let view;
  if(manager===false && press===true){
    view=
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Customerpage Logout={this.Logout}/>}>
            <Route path="/" element={<CRestaurantbody/>}/>
            <Route path="/RestaurantMenu" element={<CRestaurantMenu/>}/>
            <Route path="/OrderHistory" element={<COrderHistory/>}/>
            <Route path="/OrderStatus" element={<CReceiveDelivery/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  }
  else if(manager===true && press===true){
    view=
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Managerpage Logout={this.Logout}/>}>
              <Route path="/" element={<ReceiveOrder/>}/>
              <Route path="/History" element={<MOrderHistory/>}/>
              <Route path="/CreateProduct" element={<CreateProduct/>}/>
              <Route path="/CreateRestaurant" element={<CreateRestaurant/>}/>
              <Route path="/CreateCategory" element={<CreateCategory/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
  }else{
    view=
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage Login={this.Login}
           LoginName={this.state.LoginNameValue}
           LoginPassword={this.state.LoginPasswordValue}
           LoginWarning={this.state.LoginWarning}
           LoginNameChange={this.LoginName}
           LoginPasswordChange={this.LoginPasswordInput}
           Managercheck={this.managerLoginCheckChange}/>}>
            <Route path="/" element={<RestaurantBody/>}/>
            <Route path="/RestaurantMenu" element={<RestaurantMenu/>}/>
            <Route path="/CreateAccount" element={<CreateAccount/>}/>
            <Route path="/login" element={<LoginAccount/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  }
    return(<div>{view}</div>)
 }
}

  

export default App;
