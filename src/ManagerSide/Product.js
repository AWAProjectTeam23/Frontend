import React from 'react'

export default function Product(props) {
    return (
        <div style={{marginLeft:"auto",marginRight:"auto"}}>
            <div>
                Item_id: {props.orderItem_id}
            </div>
            <div>
                Amount: {props.productQuantity}
            </div>
        </div>
    )
}
