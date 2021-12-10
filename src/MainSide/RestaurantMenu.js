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
          <div className={ styles.restaurant }>{ props.productDescription }</div>
          <div className={ styles.category }>{ props.category }</div>
          <div className={ styles.price}>{ props.pricePer }€</div>      
      </div>
    </div>
    )
}