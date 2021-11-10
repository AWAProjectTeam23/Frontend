import { render } from '@testing-library/react';
import React from 'react'
import {Routes,Route} from "react-router-dom"
import RestaurantBody from './RestaurantBody';
import RestaurantMenu from './RestaurantMenu';
import CreateAccount from './CreateAccount';
import LoginAccount from './LoginAccount';

export default function Mainbody (){
    return (
        <div>
            <Routes>
                <Route path="/" element={<RestaurantBody/>}/>
                <Route path="/RestaurantMenu" element={<RestaurantMenu/>}/>
                <Route path="/CreateAccount" element={<CreateAccount/>}/>
                <Route path="/Login" element={<LoginAccount/>}/>
            </Routes>
        </div>
 )     
}
    

