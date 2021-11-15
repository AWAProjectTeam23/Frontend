import React from 'react'
import style from './CreateProduct.module.css'

export default function CreateProduct() {
    return (
        <div className={style.box_margin}>
            <div className={style.box}>
                <div>
                    <div className={style.head_style}>Product information</div>
                    <div className={style.input_margin}>
                        <div className={style.lower_style}>Restaurant</div>
                        <input className={style.input_size}></input>
                    </div>
                    <div className={style.input_margin}>
                        <div className={style.lower_style}>Category</div>
                        <input className={style.input_size}></input>
                    </div>
                    <div className={style.input_margin}>
                        <div className={style.lower_style}>Name</div>
                        <input className={style.input_size}></input>
                    </div>
                    <div className={style.input_margin}>
                        <div className={style.lower_style}>Description</div>
                        <input className={style.desc_input}></input>
                    </div>
                    <div className={style.input_margin}>
                        <div className={style.lower_style}>Price</div>
                        <input className={style.input_size}></input>
                    </div>
                    <div className={style.input_margin}>
                    <div className={style.lower_style}>Image</div>
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
