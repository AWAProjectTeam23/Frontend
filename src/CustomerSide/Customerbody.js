import React, { Component } from 'react'
import {Routes,Route} from "react-router-dom"
import Restaurantbody from './Restaurantbody'
import RestaurantMenu from './RestaurantMenu'
import OrderHistory from './OrderHistory'
import RestaurantBodyView from './RestaurantBodyView';
import RestaurantMenuView from './RestaurantMenuView';
 

export default function Customerbody (props){
  
        return (
            <div>
                <Routes>
                    <Route path="/" element={<RestaurantBodyView items={props.items}/>}/>   
                    <Route path="/RestaurantMenu" element={<RestaurantMenuView items={props.products} addToCart={props.addToShoppingCart}/>}/>
                    <Route path="OrderHistory" element={<OrderHistory/>}/>
                </Routes>
            </div>
        )
    
}

