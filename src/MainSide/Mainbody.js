import React from 'react'
import {Routes,Route} from "react-router-dom"
import CreateAccount from './CreateAccount';
import LoginAccount from './LoginAccount';
import RestaurantBodyView from './RestaurantBodyView';
import RestaurantMenuView from './RestaurantMenuView';

export default function Mainbody (props){
    return (
    
        <div>
            <Routes>
                <Route path="/" element={<RestaurantBodyView items={props.items} restaurantMenuButton={props.restaurantMenuButton}/>}/>
                <Route path="/RestaurantMenu" element={<RestaurantMenuView items={props.products}
                    categorySearchChange={props.categorySearchChange}
                    categories={props.categories}
                    />}/>
                <Route path="/CreateAccount" element={<CreateAccount AccountCreate={props.AccountCreate} 
                    CreateAccountInputs={props.CreateAccountInputs}
                    CreateAccountPassword={props.CreateAccountPassword}
                    CreateNameInput={props.CreateNameAccount}
                    CreatePasswordInput={props.CreatePasswordInput}
                    createManagerCheck={props.createManagerCheck}
                    managerCheckChange={props.managerCheckChange}
                    CreateWarning={props.CreateWarning}
                   />}/>
                <Route path="/Login" element={<LoginAccount Login={props.Login}
                    LoginWarning={props.LoginWarning}
                    LoginInput={props.LoginName}
                    LoginPasswordInputs={props.LoginPasswordInputs}
                    LoginNameInput={props.LoginInputs}
                    LoginPasswordInput={props.LoginPasswordInput} 
                    managerLoginCheckChange={props.managerLoginCheckChange}
                    />}/>
            </Routes>
        </div>
 );     
}
    

