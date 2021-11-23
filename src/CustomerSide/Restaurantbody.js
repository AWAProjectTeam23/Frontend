import React from 'react'
import styles from './RestaurantBody.module.css';
export default function Restaurantbody(props) {
    return (
 
    <div>
      <div className= {styles.product}>
        <div> 
          <img src={`/images/${props.image}`} 
          height={300}
          width={300}/>
        </div>
          <div className={ styles.name }>{ props.name }</div>
          <div className={ styles.type }>{ props.type }</div> 
          <div className={ styles.address }>{ props.address }</div>
          <div className={ styles.price}>{ props.price }</div>
          <div className={ styles.openinghours}>{ props.openinghours }</div>    
      </div>
    </div>
    )
}