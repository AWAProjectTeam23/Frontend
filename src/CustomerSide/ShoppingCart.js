import React from 'react'
import style from './ShoppingCart.module.css'
import ShoppingCartProduct from './ShoppingCartProduct'

export default function ShoppingCart(props) {
    return (
        <div className={style.Shoppingcartbox}>
            <div>
                <div className={style.Header}>
                    Shopping Cart
                </div>
                <div>
                    <div className={style.inputMargin}>
                        Write address for delivery
                        <input className={style.inputstyle} onChange={props.DeliveryLocation}></input>
                    </div>
                    <div className={style.productMargin}>
                        products added to cart:
                        {props.ShoppingCartItems.map(element=> <ShoppingCartProduct {...element} key={element.Id} removeFromShoppingCart={props.removeFromShoppingCart}/>)}
                    </div>
                    <div className={style.bottomMargin}>
                        <div style={{width:"280px"}}>
                            totalcost: {props.TotalCost} €
                        </div>
                        <div style={{marginLeft:"auto",marginRight:"auto"}}>
                            <button style={{fontWeight:"bold"}} onClick={()=>props.ConfirmOrder()}>confirm order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
