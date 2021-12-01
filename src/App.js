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


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      Token:"",
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
    
    console.log("painettu")

    if(this.state.Manager===true){
        /*axios.post("http://localhost:4000/hold")
        .then(Response=>{
            <link to="/Customer" element={<Customerpage CustomerID={"aa"}/>}/>
            this.LoginWarningText(true)
            this.LoginWarningText(false)
        })
        .catch(err=>{
            console.log(err)
        })*/
        this.setState({Token:"a"})
        console.log(this.state.LoginNameValue)
        console.log(this.state.LoginPasswordValue)
        console.log('Restaurant manager account')
        console.log(this.state.Manager)
        return true
    }
    else{
        /*axios.post("http://localhost:4000/hold")
        .then(Response=>{
          this.LoginWarningText(false)
          this.LoginWarningText(true)
        })
        .catch(err=>{
            console.log(err)
        })*/
        this.setState({Token:"a"})
        this.LoginWarningText(true)
        console.log(this.state.LoginNameValue)
        console.log(this.state.LoginPasswordValue)
        return true
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
managerLoginCheckChange=()=>{
  if(this.state.Manager===false){
  this.setState({Manager:true})
  }
  else{
      this.setState({Manager:false})
  }
  console.log(this.state.Manager)
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
  let view;
  if(manager===false && Token.length>0){
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
  else if(manager===true && Token.length>0){
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
            <Route path="/Login" element={<LoginAccount/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  }
    return(<div>{view}</div>)
 }
}

  

export default App;
