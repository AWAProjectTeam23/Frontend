import React from 'react'
import style from './OrderHistory.module.css'
import Product from './Product'

export default function OrderHistory(props) {
    return (
        <div>
            <div className={style.box_margin}>
                <div className={style.Orderbox}>
                    <div className={style.box_content}>
                            <div>
                                <span className={style.Order_text}>Order ID {props.order_id}</span>
                            </div>
                                <div className={style.box_flex}>
                                    <div>
                                        <div style={{marginTop:"20px"}}>
                                            Restaurant name
                                            <div>
                                              {props.restaurantName}  
                                            </div>
                                            
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
                                            Status: {props.order_status}
                                        </div>
                                        <div style={{marginTop:"10px"}}>completion time: {props.completionTimeStamp}</div>
                                        <div style={{marginTop:"10px"}}>Total Price: {props.total_price}</div>
                                    </div>
                                    </div>
                                </div>
                    </div>
                </div>
            </div>
        
    )
}
