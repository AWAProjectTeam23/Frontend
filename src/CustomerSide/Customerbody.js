import React from 'react'
import {Routes,Route} from "react-router-dom"
import OrderHistory from './OrderHistory'
import ReceiveDelivery from './ReceiveDelivery'
import RestaurantBodyView from './RestaurantBodyView';
import RestaurantMenuView from './RestaurantMenuView';

 
export default function Customerbody (props){
  
        return (
            <div>
                <Routes>
                    <Route path="/" element={<RestaurantBodyView items={props.items} restaurantMenuButton={props.restaurantMenuButton}/>}/> 
                    <Route path="/RestaurantMenu" element={<RestaurantMenuView items={props.products} 
                    addToCart={props.addToShoppingCart}
                    categorySearchChange={props.categorySearchChange}
                    categories={props.categories}
                    />}/>
                    <Route path="/OrderHistory" element={props.history.map(element=><OrderHistory {...element}/>)}/>
                    <Route path="/OrderStatus" element={props.ActiveOrders.map(element=><ReceiveDelivery {...element} ConfirmDelivery={props.OrderDelivered}/>)}/>
                </Routes>
            </div>
        )
    
}

