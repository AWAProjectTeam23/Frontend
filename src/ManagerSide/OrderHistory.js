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
                                <span className={style.Order_text}>Order Number {props.OrderNumber}</span>
                            </div>
                            
                                <div className={style.box_flex}>
                                    <div>
                                        <div className={style.Info_box}>
                                            <div className={style.Info_text}>Customer Info</div>
                                            <div className={style.text_style}>Address: {props.Address}</div>
                                            <div className={style.text_style}>Customers name: {props.CustomerName}</div>
                                        </div>
                                        <div style={{marginTop:"20px"}}>
                                            Restaurant name
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
                                            <Orderstatus OrderStatus={props.OrderStatus}/>
                                        </div>
                                        <div style={{marginTop:"10px"}}>Receive time: {props.Time}</div>
                                        <div style={{marginTop:"10px"}}>Total Price: {props.TotalPrice}</div>
                                    </div>
                                    </div>
                                </div>
                                
                            
                            
                    </div>
                </div>
            </div>
        
    )
}
