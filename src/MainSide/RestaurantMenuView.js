import React from 'react';
import styles from './RestaurantMenu.module.css';
import RestaurantMenu from './RestaurantMenu';
export default function RestaurantMenuView(props) {
  
  let array=[]
  for(let i=0;i<props.items.length;i++){
    array=[...array,...props.items[i].productTable]
  }
  return (
    <div>
      <div className={styles.button_margin}>
        {props.categories.map(element=>(<button className={styles.button}
        value={element}
        onClick={props.categorySearchChange}
        >{element}</button>))}
        </div>
      <div className={ styles.presentationModeGrid }>
      {
        array.map(item => <RestaurantMenu key={item.id} {...item} />)
      }
      </div>
    </div>
  )
}
