import React from 'react'
import style from './Customer.module.css'
import { Link } from 'react-router-dom'
import ShoppingCart from './ShoppingCart'

export default function Customerbar(props) {
    const ShoppingCartState=props.ShoppingCartOpen;

    if(ShoppingCartState==true){
    return (
        <div className={style.CustomerBar}>
            <div className={style.Logo_margin}>
                <Link to="/Customer/"><div style={{color:"white"}}>Logo</div></Link>
            </div>
            <div className={style.searchbar_margin}>
                <input style={{height:"20px",width:"400px"}} type="text"onChange={props.searchChange} />
            </div>
            <div className={style.ShoppingCart}>
                    <ShoppingCart 
                    ShoppingCartItems={props.ShoppingCartItems} 
                    TotalCost={props.TotalCost}
                    removeFromShoppingCart={props.removeFromShoppingCart}
                    DeliveryLocation={props.DeliveryLocation}
                    ConfirmOrder={props.ConfirmOrder}
                    />
            </div>
            <div className={style.button_margin_open}>
                <Link to="/Customer/OrderHistory"><button className={style.button_left}>Order history</button></Link>
                <button className={style.button_left} onClick={()=>props.openShoppingCart()}>shoppingcart</button>
                <Link to="/Main/"><button style={{fontWeight:"bold"}} className={style.button_left}>Log out</button></Link>
            </div>
        </div>
    )
    }
    else{
        return (
            <div className={style.CustomerBar}>
                <div className={style.Logo_margin}>
                    <Link to="/Customer/"><div style={{color:"white"}}>Logo</div></Link>
                </div>
                <div className={style.searchbar_margin}>
                    <input style={{height:"20px",width:"400px"}} type="text"onChange={props.searchChange} />
                </div>
                <div className={style.button_margin}>
                    <Link to="/Customer/OrderHistory"><button className={style.button_left}>Order history</button></Link>
                    <button className={style.button_left} onClick={()=>props.openShoppingCart()}>shoppingcart</button>
                    <Link to="/Main/"><button style={{fontWeight:"bold"}} className={style.button_left}>Log out</button></Link>
                </div>
            </div>
        )
    }
}
