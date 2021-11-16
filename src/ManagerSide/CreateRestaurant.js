import React from 'react'
import style from './CreateRestaurant.module.css'
import { Link } from 'react-router-dom'

export default function CreateRestaurant(props) {
    return (
        <div className={style.box_margin}>
            <div className={style.box}>
                <div>
                    <div className={style.head_style}>Restaurant information</div>
                    <div className={style.input_margin}>
                        <div className={style.lower_style}>Name</div>
                        <input className={style.input_size} 
                        type="text"
                        name="Name"
                        value={props.RestaurantInputs[0].Name}
                        onChange={props.InputChange}/>
                    </div>
                    <div className={style.input_margin}>
                        <div className={style.lower_style}>address</div>
                        <input className={style.input_size} 
                        type="text"
                        name="Address"
                        value={props.RestaurantInputs[0].Address}
                        onChange={props.InputChange}/>
                    </div>
                    <div className={style.input_margin}>
                        <div className={style.lower_style}>operatin hours</div>
                        <input className={style.input_size} 
                        type="text"
                        name="OperatingHours" 
                        value={props.RestaurantInputs[0].OperatingHours}
                        onChange={props.InputChange}/>
                    </div>
                    <div className={style.input_margin}>
                        <div className={style.lower_style}>image</div>
                        <input className={style.input_size} 
                        type="text"
                        name="Image" 
                        value={props.RestaurantInputs[0].Image}
                        onChange={props.InputChange}/>
                    </div>
                    <div className={style.input_margin}>
                    <div className={style.lower_style}>restaurant type</div>
                        <input className={style.input_size} 
                        type="text"
                        name="RestaurantType" 
                        value={props.RestaurantInputs[0].RestaurantType}
                        onChange={props.InputChange}/>
                    </div>
                    <div className={style.input_margin}>
                        <div className={style.lower_style}>price level</div>
                        <input className={style.input_size} 
                        type="text"
                        name="PriceLevel" 
                        value={props.RestaurantInputs[0].PriceLevel}
                        onChange={props.InputChange}/>
                    </div>
                </div>
                <div className={style.button_margin}>
                    <button className={style.button_size}onClick={()=>props.RestaurantCreate()}>create</button>
                    <Link to='/Manager/'><button className={style.button_size}>cancel</button></Link>
                </div>
            </div>
            
        </div>
    )
}
