import React from 'react'
import style from './OrderHistory.module.css'
import Product from './Product'
import OrderStatus from './OrderStatus'

export default function ReceiveDelivery(props) {
if (props.OrderDelivered===false){
    return (
        <div>
            <div className={style.box_margin}>
                <div className={style.Orderbox}>
                    <div className={style.box_content}>
                            <div>
                                <span className={style.Order_text}>Order Number {props.OrderNumber}</span>
                            </div>
                                <div className={style.box_flex}>
                                    <div>
                                        <div style={{marginTop:"20px"}}>
                                            Restaurant name
                                            <div>
                                              {props.Restaurant}  
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className={style.box_products}>
                                        <div style={{marginRight:"15px"}}>Products:</div>
                                    {
                                        props.Products.map(element=> <Product {...element}/>)
                                    }
                                    </div>
                                    <div className={style.status_margin}>
                                    <div>
                                    <OrderStatus OrderStatus={props.OrderStatus}/>
                                        </div>
                                        <div style={{marginTop:"10px"}}>Order time: </div>
                                        <div style={{marginTop:"10px"}}>Total Price: {props.TotalPrice}</div>
                                        <button className={style.button_margin} onClick={()=>props.ConfirmDelivery(props.OrderNumber)}>Confirm delivery</button>
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
                                <span className={style.Order_text}>Order Number {props.OrderNumber}</span>
                            </div>
                                <div className={style.box_flex}>
                                    <div>
                                        <div style={{marginTop:"20px"}}>
                                            Restaurant name
                                            <div>
                                              {props.Restaurant}  
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className={style.box_products}>
                                        <div style={{marginRight:"15px"}}>Products:</div>
                                    {
                                        props.Products.map(element=> <Product {...element}/>)
                                    }
                                    </div>
                                    <div className={style.status_margin}>
                                    <div>
                                    <OrderStatus OrderStatus={props.OrderStatus}/>
                                        </div>
                                        <div style={{marginTop:"10px"}}>Order time: </div>
                                        <div style={{marginTop:"10px"}}>Total Price: {props.TotalPrice}</div>
                                    </div>
                                    </div>
                                </div>
                    </div>
                </div>
            </div>
        
    )


}
}