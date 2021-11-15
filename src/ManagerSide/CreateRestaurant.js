import React from 'react'
import style from './CreateRestaurant.module.css'

export default function CreateRestaurant() {
    return (
        <div className={style.box_margin}>
            <div className={style.box}>
                <div>
                    <div className={style.head_style}>Restaurant information</div>
                    <div className={style.input_margin}>
                        <div className={style.lower_style}>Name</div>
                        <input className={style.input_size}></input>
                    </div>
                    <div className={style.input_margin}>
                        <div className={style.lower_style}>address</div>
                        <input className={style.input_size}></input>
                    </div>
                    <div className={style.input_margin}>
                        <div className={style.lower_style}>operatin hours</div>
                        <input className={style.input_size}></input>
                    </div>
                    <div className={style.input_margin}>
                        <div className={style.lower_style}>image</div>
                        <input className={style.input_size}></input>
                    </div>
                    <div className={style.input_margin}>
                    <div className={style.lower_style}>restaurant type</div>
                        <input className={style.input_size}></input>
                    </div>
                    <div className={style.input_margin}>
                        <div className={style.lower_style}>price level</div>
                        <input className={style.input_size}></input>
                    </div>
                </div>
                <div className={style.button_margin}>
                    <button className={style.button_size}>create</button>
                    <button className={style.button_size}>cancel</button>
                </div>
            </div>
            
        </div>
    )
}
