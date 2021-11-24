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
                <Route path="/" element={<RestaurantBodyView items={props.items} restaurantMenuButton={props.restaurantMenuButton}/>}/>
                <Route path="/RestaurantMenu" element={<RestaurantMenuView items={props.products}/>}/>
                <Route path="/CreateAccount" element={<CreateAccount AccountCreate={props.AccountCreate} 
                    CreateAccountInputs={props.CreateAccountInputs}
                    CreateAccountPassword={props.CreateAccountPassword}
                    CreateNameInput={props.CreateNameAccount}
                    CreatePasswordInput={props.CreatePasswordInput}
                    createManagerCheck={props.createManagerCheck}
                    managerCheckChange={props.managerCheckChange}
                   />}/>
                <Route path="/Login" element={<LoginAccount Login={props.Login}
                    LoginInput={props.LoginInput}
                    LoginPasswordInputs={props.LoginPasswordInputs}
                    LoginNameInput={props.LoginName}
                    LoginPasswordInput={props.LoginPasswordInput} 
                    loginManagerCheck={props.loginManagerCheck}
                    managerLoginCheckChange={props.managerLoginCheckChange}
                    />}/>
            </Routes>
        </div>
 );     
}
    

