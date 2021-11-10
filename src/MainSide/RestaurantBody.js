import React from 'react'
import styles from './RestaurantBody.module.css';
export default function RestaurantBody(props) {
    return (
 
    <div>
      
    <div className= {styles.product}>
          <div className={ styles.name }>{ props.name }</div>
          <div className={ styles.address }>{ props.address }</div>
          <div className={ styles.price}>{ props.price }</div> 
          <div className={ styles.type }>{ props.type }</div>      
    </div>
    </div>
    )
}
