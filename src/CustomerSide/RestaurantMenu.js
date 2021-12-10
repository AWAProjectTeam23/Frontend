import React from 'react'
import styles from './RestaurantMenu.module.css';
export default function RestaurantMenu(props) {
    return (

    <div>
        <div className= {styles.product}>
            <div> 
            <img src={props.image}
            height={300}
            width={300}
          />
            </div>
              <div className={ styles.name }>{ props.name }</div>
              <div className={styles.description}>{props.ProductDescription}</div>
              <div className={styles.flex}>
                <div className={ styles.price}>{ props.pricePer } €</div>
                <button className={styles.button} onClick={()=>props.addToCart(props.item_id)}>Add to cart</button> 
              </div>   
        </div>
    </div>
    )
}