import React from 'react';
import styles from './RestaurantBody.module.css';
import RestaurantBody from './RestaurantBody';
export default function RestaurantBodyView(props) {

  return (
    <div>
      <div className={ styles.presentationModeGrid }>
      {
        props.items.map(item => <RestaurantBody key={item.id} {...item} restaurantMenuButton={props.restaurantMenuButton} />)
      }
      </div>
    </div>
  )
}