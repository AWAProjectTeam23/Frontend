import React from 'react'
import styles from './RestaurantBody.module.css';
import { Link } from 'react-router-dom'

export default function Restaurantbody(props) {
    return (
 
    <div>
      
    <div className= {styles.product}>
    <Link to="/Customer/RestaurantMenu" >
      <button className onClick={()=>props.restaurantMenuButton(props.id)}>
        <div> 
            <img src={`/images/${props.image}`} 
            height={300}
            width={300}/>
            <div className={ styles.name }>{ props.name }</div>
            <div className={ styles.type }>{ props.type }</div> 
            <div className={ styles.address }>{ props.address }</div>
            <div className={ styles.price}>{ props.price }</div>
            <div className={ styles.openinghours}>{ props.openinghours }</div> 
        </div>  
      </button></Link>
    </div>
    </div>
    )
}