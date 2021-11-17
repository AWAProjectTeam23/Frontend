import React from 'react'
import {Routes,Route} from "react-router-dom"
import RestaurantBody from './RestaurantBody';
import RestaurantMenu from './RestaurantMenu';
import CreateAccount from './CreateAccount';
import LoginAccount from './LoginAccount';
import Restaurantbody from '../CustomerSide/Restaurantbody';
import RestaurantBodyView from './RestaurantBodyView';
import RestaurantMenuView from './RestaurantMenuView';

export default function Mainbody (props){
    return (
    
        <div>
            <Routes>
                <Route path="/" element={<RestaurantBodyView items={props.items}/>}/>
                <Route path="/RestaurantMenu" element={<RestaurantMenuView items={props.products}/>}/>
                <Route path="/CreateAccount" element={<CreateAccount AccountCreate={props.AccountCreate} 
                    CreateAccountInputs={props.CreateAccountInputs}
                    InputChange={props.InputChange}/>}/>
                <Route path="/Login" element={<LoginAccount/>}/>
            </Routes>
        </div>
 );     
}
    

