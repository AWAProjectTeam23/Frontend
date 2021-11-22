import React from 'react'
import style from './ShoppingCartProduct.module.css'

export default function ShoppingCartProduct(props) {
    return (
        <div>
            <div className={style.box}>
                <div className={style.flex}>
                <div className={style.imageMargin}> 
                    <img src={`/images/${props.Image}`} 
                    height={120}
                    width={120}
                    />
                </div>
                
                <div className={style.textMargin}>
                    <div style={{marginBottom:"auto"}}>
                        <div >{ props.Name }</div>
                        <div>Description:</div>
                        <div >{ props.Description}</div> 
                    </div>
                    <div style={{marginLeft:"115px"}}>Item Price: { props.Price} €</div> 
                </div>
                </div>
                <div>
                    <button className={style.buttonstyle} onClick={()=>props.removeFromShoppingCart(props.Id)}>X</button>
                </div>
            </div>
        </div>
    )
}
