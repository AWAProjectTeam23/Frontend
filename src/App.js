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
import RestaurantBody from './MainSide/RestaurantBody';
import RestaurantMenu from './MainSide/RestaurantMenu';
import CreateAccount from './MainSide/CreateAccount';
import LoginAccount from './MainSide/LoginAccount';


class App extends React.Component{
  constructor(props){
    super(props);
    
  }


  
render(){
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/Main" element={<Mainpage/>}>
          <Route path="/Main/" element={<RestaurantBody/>}/>
          <Route path="/Main/RestaurantMenu" element={<RestaurantMenu/>}/>
          <Route path="/Main/CreateAccount" element={<CreateAccount/>}/>
          <Route path="/Main/Login" element={<LoginAccount/>}/>
        </Route>
        <Route path="/Customer" element={<Customerpage/>}>
          <Route path="/Customer/" element={<CRestaurantbody/>}/>
          <Route path="/Customer/RestaurantMenu" element={<CRestaurantMenu/>}/>
          <Route path="/Customer/OrderHistory" element={<COrderHistory/>}/>
        </Route>
        <Route path="/Manager" element={<Managerpage/>}>
          <Route path="/Manager/History" element={<MOrderHistory/>}/>
          <Route path="/Manager/ReceiveOrder" element={<ReceiveOrder/>}/>
          <Route path="/Manager/CreateProduct" element={<CreateProduct/>}/>
          <Route path="/Manager/CreateRestaurant" element={<CreateRestaurant/>}/>
          <Route path="/Manager/CreateCategory" element={<CreateCategory/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
 }
}

  

export default App;
