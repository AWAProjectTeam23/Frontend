import React from 'react'

export default function Product(props) {
    return (
        <div style={{marginLeft:"auto",marginRight:"auto"}}>
            <div>
                item id: 
                {props.orderItem_id}
            </div>
            <div>
                amount: 
                {props.productQuantity}
            </div>
        </div>
    )
}
