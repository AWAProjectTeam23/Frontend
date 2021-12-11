import React from 'react'
import style from './OrderHistory.module.css'
import Product from './Product'
import Orderstatus from './Orderstatus'

export default function OrderHistory(props) {
    return (
        <div>
            <div className={style.box_margin}>
                <div className={style.Orderbox}>
                    <div className={style.box_content}>
                            <div>
                                <span className={style.Order_text}>Order ID: {props.order_id}</span>
                            </div>
                            
                                <div className={style.box_flex}>
                                    <div>
                                        <div className={style.Info_box}>
                                            <div className={style.Info_text}>Customer Info</div>
                                            <div className={style.text_style}>Address: {props.delivery_location}</div>
                                            <div className={style.text_style}>Customers name: {props.customerName}</div>
                                        </div>
                                        <div style={{marginTop:"20px"}}>
                                            Restaurant ID {props.restaurantID}
                                        </div>
                                    </div>
                                    <div className={style.box_products}>
                                        <div style={{marginRight:"15px"}}>Products:</div>
                                    {
                                        props.orderproducts.map(element=> <Product {...element}/>)
                                    }
                                    </div>
                                    <div className={style.status_margin}>
                                        <div>
                                            <Orderstatus OrderStatus={props.order_status}/>
                                        </div>
                                        <div style={{marginTop:"10px"}}>Receive time: {props.completionTime}</div>
                                        <div style={{marginTop:"10px"}}>Total Price: {props.total_price}</div>
                                    </div>
                                    </div>
                                </div>
                                
                            
                            
                    </div>
                </div>
            </div>
        
    )
}
