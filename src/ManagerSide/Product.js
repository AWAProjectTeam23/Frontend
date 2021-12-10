import React from 'react'

export default function Product(props) {
    return (
        <div style={{marginLeft:"auto",marginRight:"auto"}}>
            <div >
                <img style={{maxHeight:"150px",maxWidth:"150px"}} src={"/"+props.Image+".PNG"}/>
            </div>
            <div>
                Item_id: {props.orderItem_id}
            </div>
            <div>
                Amount: {props.productQuantity}
            </div>
        </div>
    )
}
