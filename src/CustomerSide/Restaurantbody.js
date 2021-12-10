import React from 'react'
import styles from './RestaurantBody.module.css';
import { Link } from 'react-router-dom'

export default function Restaurantbody(props) {
    return (
 
    <div>
      
    <div className= {styles.product}>
    <Link to="/RestaurantMenu" >
      <button className onClick={()=>props.restaurantMenuButton(props.restaurantId)}>
        <div> 
            <img src={props.imageURL}  
            height={300}
            width={300}/>
            <div>
              <div className={ styles.name }>{ props.restaurantName }</div>
              <div className={ styles.type }>{ props.restaurantStyle }</div> 
              <div className={ styles.address }>{ props.address }</div>
              <div className={ styles.price}>{ props.priceLevel }</div>
              <div className={ styles.openinghours}>{ props.operatingHour }</div>
            </div> 
        </div>  
      </button></Link>
    </div>
    </div>
    )
}