import React from 'react'
import style from './ShoppingCartProduct.module.css'

export default function ShoppingCartProduct(props) {
    return (
        <div>
            <div className={style.box}>
                <div className={style.flex}>
                    <div className={style.imageMargin}> 
                        <img src={`/images/${props.image}`} 
                        height={120}
                        width={120}
                        />
                    </div>
                    
                    <div className={style.textMargin}>
                        <div style={{marginBottom:"auto",height:"fit-content"}}>
                            <div style={{fontWeight:"bold"}}>{ props.Name }</div>
                            <div>Description:</div>
                            <div>{props.Description}</div>
                        </div>
                        <div style={{marginLeft:"100px",marginTop:"auto"}}>Item Price: { props.Price} €</div>
                    </div>
                </div>
                <div>
                    <button className={style.buttonstyle} onClick={()=>props.removeFromShoppingCart(props.Id)}>X</button>
                </div>
            </div>
        </div>
    )
}
