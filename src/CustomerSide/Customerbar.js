import React from 'react'
import style from './Customer.module.css'
import { Link } from 'react-router-dom'
import ShoppingCart from './ShoppingCart'

export default function Customerbar(props) {
    const ShoppingCartState=props.ShoppingCartOpen;

    if(ShoppingCartState===true){
    return (
        <div className={style.CustomerBar}>
             <div className={style.Logo_margin}>
                    <Link to="/" onClick={props.clearSearchBar} > <div style={{color:"white"}}> <img src={`/images/logo.png`} 
                    height={50}
                    width={190}/></div></Link>
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
                    <div className={style.orderwarning}>
                        {props.OrderWarning}
                    </div>
            </div>
            <div className={style.button_margin_open}>
                <Link to="/OrderStatus"><button className={style.button_left}>Order status</button></Link>
                <Link to="/OrderHistory"><button className={style.button_left}>Order history</button></Link>
                <button className={style.button_left} onClick={()=>props.openShoppingCart()}>shoppingcart</button>
                <Link to="/"><button style={{fontWeight:"bold"}} className={style.button_left} onClick={()=>props.Logout()}>Log out</button></Link>
            </div>
        </div>
    )
    }
    else{
        return (
            <div className={style.CustomerBar}>
                 <div className={style.Logo_margin}>
                    <Link to="/"onClick={props.clearSearchBar} > <div style={{color:"white"}}><img src={`/images/logo.png`} 
                    height={50}
                    width={190}/></div></Link>
                </div>
                <div className={style.searchbar_margin}>
                    <input style={{height:"20px",width:"400px"}}  type="text"onChange={props.searchChange} />
                </div>
                <div className={style.button_margin}>
                    <Link to="/OrderStatus"><button className={style.button_left}>Order status</button></Link>
                    <Link to="/OrderHistory"><button className={style.button_left}>Order history</button></Link>
                    <button className={style.button_left} onClick={()=>props.openShoppingCart()}>shoppingcart</button>
                    <Link to="/"><button style={{fontWeight:"bold"}} className={style.button_left} onClick={()=>props.Logout()}>Log out</button></Link>
                </div>
            </div>
        )
    }
}
