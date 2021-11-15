import React from 'react'
import style from './ReceiveOrder.module.css'
import Product from './Product'

export default function ReceiveOrder(props) {
    return (
        <div className={style.box_margin}>
            <div className={style.Orderbox}>
                <div className={style.box_content}>
                        <div>
                            <span className={style.Order_text}>Order Number {props.OrderNumber}</span>
                        </div>
                        
                            <div className={style.box_flex}>
                                <div className={style.Info_box}>
                                    <div className={style.Info_text}>Customer Info</div>
                                    <div className={style.text_style}>Address: {props.Address}</div>
                                    <div className={style.text_style}>Customers name: {props.CustomerName}</div>
                                </div>
                                <div className={style.box_products}>
                                <div style={{marginRight:"15px"}}>Products:</div>
                                    {
                                        props.Products.map(element=> <Product {...element}/>)
                                    }
                                </div>
                                <div className={style.status_margin}>
                                    <div>
                                        status
                                    </div>
                                    <div style={{marginTop:"10px"}}>Time Order Received</div>
                                    <div style={{marginTop:"20px"}}>Total Price: {props.TotalPrice}</div>
                                    <button className={style.button_margin}>confirm order</button>
                                </div>
                            </div>
                            
                        
                        
                </div>
            </div>
        </div>
    )
}
