import React from 'react';
import styles from './RestaurantBody.module.css';
import Restaurantbody from './Restaurantbody';
export default function RestaurantBodyView(props) {

  return (
    <div>
        <div className={ styles.presentationModeGrid }>
        {
          props.items.map(item => <Restaurantbody key={item.id} {...item} restaurantMenuButton={props.restaurantMenuButton} />)
        }
        </div>
    </div>
  )
}