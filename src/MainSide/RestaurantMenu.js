import React from 'react'
//import styles from './RestauranMenu.module.css';
import styles from './RestaurantMenu.module.css';
export default function RestaurantMenu(props) {
    return (

    <div>
    <div className= {styles.product}>
    <div> 
            <img src={`/images/${props.image}`} 
            height={300}
            width={300}
          />
          </div>
          <div className={ styles.name }>{ props.name }</div>
          <div className={ styles.restaurant }>{ props.restaurant }</div>
          <div className={ styles.price}>{ props.price }</div>      
    </div>
    </div>
    )
}