import React from 'react';
import styles from './RestaurantMenu.module.css';
import RestaurantMenu from './RestaurantMenu';
export default function RestaurantMenuView(props) {

  return (
    <div>
      <div className={styles.categoryBox}>
        {props.categories.map(element=>(<button className={styles.categoryButton} 
        value={element} 
        onClick={props.categorySearchChange}
        >{element}</button>))}
      </div>
        <div className={ styles.presentationModeGrid }>
        {
          props.items.map(item => <RestaurantMenu key={item.id} {...item} addToCart={props.addToCart}/>)
        }
        </div>
    </div>
  )
}