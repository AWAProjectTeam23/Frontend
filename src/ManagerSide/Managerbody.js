import React from 'react'
import OrderHistory from './OrderHistory'
import ReceiveOrder from './ReceiveOrder'
import CreateProduct from'./CreateProduct'
import CreateRestaurant from './CreateRestaurant'
import CreateCategory from './CreateCategory'
import {Routes,Route} from "react-router-dom"

export default function Managerbody (props) {
     
        return (
            <div>
                <Routes>
                    <Route path="/" element={props.items.map(elememt=><ReceiveOrder {...elememt}/>)}/>
                    <Route path="/History" element={props.history.map(element=><OrderHistory {...element}/>)}/>
                    <Route path="/CreateProduct" element={<CreateProduct ProductCreate={props.ProductCreate}
                     ProductInputs={props.ProductInputs}
                     InputChange={props.ProductInputChange}
                     SelectValue={props.SelectValue}
                     CategoryValues={props.CategoryValues}/>}/>
                    <Route path="/CreateCategory" element={<CreateCategory CategoryCreate={props.CategoryCreate} 
                    CategoryInputs={props.CategoryInputs}
                    InputChange={props.InputChange}/>}/>
                    <Route path="/CreateRestaurant" element={<CreateRestaurant RestaurantCreate={props.RestaurantCreate} 
                    RestaurantInputs={props.RestaurantInputs}
                    InputChange={props.RestaurantInputChange}
                    RestaurantType={props.RestaurantType}
                    PriceLevel={props.PriceLevel}/>}/>
                </Routes>
            </div>
        );
}

