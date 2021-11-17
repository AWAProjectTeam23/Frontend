import React from 'react'
import { Link } from 'react-router-dom'
import style from './CreateCategory.module.css'

export default function CreateCategory(props) {
    return (
        <div className={style.back_color}>
            <div className={style.box}>
                <div className={style.input_margin}>
                    <div className={style.head_style}>
                        Category name
                    </div>
                    <input className={style.input_size}
                     type="text" 
                     value={props.CategoryInputs} 
                     onChange={props.InputChange}/>
                    <div className={style.lower_style}>
                        Category will be added to category input in product creation tab
                    </div>
                </div>
                <div className={style.button_margin}>
                    <button className={style.button_size} onClick={()=>props.CategoryCreate()}>create</button>
                    <Link to='/Manager/'><button className={style.button_size}>cancel</button></Link>
                </div>
            </div>
        </div>
    )
}
