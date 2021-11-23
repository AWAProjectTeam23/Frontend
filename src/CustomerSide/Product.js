import React from 'react'

export default function Product(props) {
    return (
        <div style={{marginLeft:"auto",marginRight:"auto"}}>
            <div >
            <div> 
            <img src={`/images/${props.image}`} 
            height={150}
            width={150}/>
          </div>
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
