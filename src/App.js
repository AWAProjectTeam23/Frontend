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


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      Token:"",
      AccountID:"",
      Manager:false,
      LoginNameValue:"",
      LoginPasswordValue: "",
      LoginWarning:""
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
    console.log(this.state.LoginNameValue+" "+this.state.LoginPasswordValue+" "+this.state.Manager)
    if(this.state.Manager===true){
        /*axios.post("http://localhost:8080/login",{
          header:{
            Authorization:"Basic "+this.state.LoginNameValue+":"+this.state.LoginPasswordValue
          }
        })
        .then(Response=>{
          this.setState({Token:Response.data.token},()=>this.getAccountID())
          this.LoginWarningText(true)
          return true
        })
        .catch(err=>{
            console.log(err)
            this.LoginWarningText(false)
            return false
        })*/
        this.setState({Token:"a"})
        this.setState({AccountID:"6a28cc3f-6add-46a2-b610-af16c871e2d6"})
        return true
    }
    else{
        /*axios.post("http://localhost:8080/login",{
          header:{
            Authorization:"Basic "+this.state.LoginNameValue+":"+this.state.LoginPasswordValue
          }
        })
        .then(Response=>{
          this.setState({Token:Response.data.Token},()=>this.getAccountID())
          this.LoginWarningText(true)
          return true
        })
        .catch(err=>{
            console.log(err)
            this.LoginWarningText(false)
            return false
        })*/
    }
  }

  getAccountID=()=>{
    axios.get("http://localhost:8080/getAccountId/",{
      headers:{
        Authorization:"Bearer "+this.state.Token
      },
      info:{
      username:this.state.LoginNameValue
      }
    })
    .then(Response=>{
      this.setState({AccountID:Response.data})
    })
    .catch(err=>{
      console.log(err)
    })
  }

LoginName=(event)=>{
  this.setState({LoginNameValue:event.target.value})
  console.log(event.target.value)
}
LoginPasswordInput=(event)=>{
  this.setState({LoginPasswordValue:event.target.value})
  console.log(event.target.value)
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
  this.setState({Token:""})
  this.setState({Manager:false})
  this.setState({LoginNameValue:""})
  this.setState({LoginPasswordValue:""})
}

  
render(){
  let manager=this.state.Manager
  let Token=this.state.Token
  let accountid=this.state.AccountID
  let view;
  if(manager===false && Token.length>0 && accountid.length>0){
    view=
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Customerpage Logout={this.Logout}
        AccountId={this.state.AccountID}
        Token={this.state.Token}
        />}>
            <Route path="/" element={<CRestaurantbody/>}/>
            <Route path="/RestaurantMenu" element={<CRestaurantMenu/>}/>
            <Route path="/OrderHistory" element={<COrderHistory/>}/>
            <Route path="/OrderStatus" element={<CReceiveDelivery/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  }
  else if(manager===true && Token.length>0 && accountid.length>0){
    view=
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Managerpage Logout={this.Logout} 
          AccountId={this.state.AccountID}
          Token={this.state.Token}
          />}>
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
            <Route path="/Login" element={<LoginAccount/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  }
    return(<div>{view}</div>)
 }
}

  

export default App;
