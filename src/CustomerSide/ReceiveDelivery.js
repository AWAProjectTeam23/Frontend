import React from 'react'
import style from './OrderHistory.module.css'
import Product from './Product'
import OrderStatus from './OrderStatus'

export default function ReceiveDelivery(props) {
if (props.order_status==="Delivering"){
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
                                    <OrderStatus OrderStatus={props.order_status}/>
                                        </div>
                                        <div style={{marginTop:"10px"}}>Order time: {props.creationTimeStamp}</div>
                                        <div style={{marginTop:"10px"}}>Total Price: {props.total_price}</div>
                                        <button className={style.button_margin} onClick={()=>props.ConfirmDelivery(props.order_id)}>Confirm delivery</button>
                                    </div>
                                    </div>
                                </div>
                    </div>
                </div>
            </div>
        
    )
}

else{

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
                                    <OrderStatus OrderStatus={props.order_status}/>
                                        </div>
                                        <div style={{marginTop:"10px"}}>Order time: {props.creationTimeStamp}</div>
                                        <div style={{marginTop:"10px"}}>Total Price: {props.total_price}</div>
                                    </div>
                                    </div>
                                </div>
                    </div>
                </div>
            </div>
        
    )


}
}
