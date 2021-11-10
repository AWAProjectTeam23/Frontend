import React, { Component } from 'react'
import {Routes,Route} from "react-router-dom"
import Restaurantbody from './Restaurantbody'
import RestaurantMenu from './RestaurantMenu'
import OrderHistory from './OrderHistory'


export default class Customerbody extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/" element={<Restaurantbody/>}/>
                    <Route path="RestaurantMenu" element={<RestaurantMenu/>}/>
                    <Route path="OrderHistory" element={<OrderHistory/>}/>
                </Routes>
            </div>
        )
    }
}

