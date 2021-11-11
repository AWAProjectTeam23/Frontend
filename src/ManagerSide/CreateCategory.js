import React from 'react'
import style from './CreateCategory.module.css'

export default function CreateCategory() {
    return (
        <div className={style.back_color}>
            <div className={style.box}>
                <div className={style.input_margin}>
                    <div className={style.head_style}>
                        Category name
                    </div>
                    <input className={style.input_size}></input>
                    <div className={style.lower_style}>
                        Category will be added to category input in product creation tab
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
