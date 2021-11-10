import React, { Component } from 'react'
import OrderHistory from './OrderHistory'
import ReceiveOrder from './ReceiveOrder'
import CreateProduct from'./CreateProduct'
import CreateRestaurant from './CreateRestaurant'
import CreateCategory from './CreateCategory'
import {Routes,Route} from "react-router-dom"

export default function Managerbody () {
     
        return (
            <div>
                <Routes>
                    <Route path="/" element={<ReceiveOrder/>}/>
                    <Route path="/History" element={<OrderHistory/>}/>
                    <Route path="/CreateProduct" element={<CreateProduct/>}/>
                    <Route path="/CreateCategory" element={<CreateCategory/>}/>
                    <Route path="/CreateRestaurant" element={<CreateRestaurant/>}/>
                </Routes>
            </div>
        );
}

