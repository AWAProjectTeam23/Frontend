import React from 'react'

export default function Product(props) {
    return (
        <div style={{marginLeft:"auto",marginRight:"auto"}}>
            <div >
                <img style={{maxHeight:"150px",maxWidth:"150px"}} src={"/"+props.Image+".PNG"}/>
            </div>
            <div>
                {props.Name}
            </div>
            <div>
                {props.Price}
            </div>
        </div>
    )
}
