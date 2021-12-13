import React from 'react'
import style from './ReceiveOrder.module.css'
import Product from './Product'
import Orderstatus from './Orderstatus'

export default function ReceiveOrder(props) {
    if(props.order_status==="Received"){
        return (
            <div className={style.box_margin}>
                <div className={style.Orderbox}>
                    <div className={style.box_content}>
                            <div>
                                <div className={style.Order_text}>Order ID: {props.order_id}</div>
                                <div className={style.Order_text}>Restaurant ID: {props.restaurantID}</div>
                            </div>
                            
                                <div className={style.box_flex}>
                                    <div className={style.Info_box}>
                                        <div className={style.Info_text}>Customer Info</div>
                                        <div className={style.text_style}>Address: {props.delivery_location}</div>
                                        <div className={style.text_style}>Customers name: {props.customerName}</div>
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
                                        <div style={{marginTop:"10px"}}>Time Order Received: {props.creationTimeStamp}</div>
                                        <div style={{marginTop:"20px"}}>Total Price: {props.total_price}</div>
                                        <button className={style.button_margin} onClick={()=>props.ConfirmOrder(props.order_id)}>confirm order</button>
                                    </div>
                                </div>
                                
                            
                            
                    </div>
                </div>
            </div>
        )
    }else if(props.order_status!=="Received" && props.order_status!=="Delivering"){
        return (
            <div className={style.box_margin}>
                <div className={style.Orderbox}>
                    <div className={style.box_content}>
                            <div>
                                <div className={style.Order_text}>Order ID: {props.order_id}</div>
                                <div className={style.Order_text}>Restaurant ID: {props.restaurantID}</div>
                            </div>
                            
                                <div className={style.box_flex}>
                                    <div className={style.Info_box}>
                                        <div className={style.Info_text}>Customer Info</div>
                                        <div className={style.text_style}>Address: {props.delivery_location}</div>
                                        <div className={style.text_style}>Customers name: {props.customerName}</div>
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
                                        <div style={{marginTop:"10px"}}>Time Order Received: {props.creationTimeStamp}</div>
                                        <div style={{marginTop:"20px"}}>Total Price: {props.total_price}</div>
                                        <button className={style.button_margin} onClick={()=>props.ConfirmOrder(props.order_id)}>Proceed status</button>
                                    </div>
                                </div>
                                
                            
                            
                    </div>
                </div>
            </div>
        )
    }else{
        return (
            <div className={style.box_margin}>
                <div className={style.Orderbox}>
                    <div className={style.box_content}>
                            <div>
                                <div className={style.Order_text}>Order ID: {props.order_id}</div>
                                <div className={style.Order_text}>Restaurant ID: {props.restaurantID}</div>
                            </div>
                            
                                <div className={style.box_flex}>
                                    <div className={style.Info_box}>
                                        <div className={style.Info_text}>Customer Info</div>
                                        <div className={style.text_style}>Address: {props.delivery_location}</div>
                                        <div className={style.text_style}>Customers name: {props.customerName}</div>
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
                                        <div style={{marginTop:"10px"}}>Time Order Received: {props.creationTimeStamp}</div>
                                        <div style={{marginTop:"20px"}}>Total Price: {props.total_price}</div>
                                    </div>
                                </div>
                                
                            
                            
                    </div>
                </div>
            </div>
        )
    }
    
}
