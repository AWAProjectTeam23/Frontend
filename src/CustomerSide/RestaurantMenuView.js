import React from 'react';
import styles from './RestaurantMenu.module.css';
import RestaurantMenu from './RestaurantMenu';
export default function RestaurantMenuView(props) {

  return (
    <div>
        <div className={ styles.presentationModeGrid }>
        {
          props.items.map(item => <RestaurantMenu key={item.id} {...item} addToCart={props.addToCart}/>)
        }
        </div>
    </div>
  )
}