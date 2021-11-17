import React from 'react'
import style from './CreateProduct.module.css'
import { Link } from 'react-router-dom'

export default function CreateProduct(props) {
    return (
        <div className={style.box_margin}>
            <div className={style.box}>
                <div>
                    <div className={style.head_style}>Product information</div>
                    <div className={style.input_margin}>
                        <div className={style.lower_style}>Restaurant</div>
                        <input className={style.input_size} 
                        type="text"
                        name="Restaurant" 
                        value={props.ProductInputs[0].Restaurant}
                        onChange={props.InputChange}/>
                    </div>
                    <div className={style.input_margin}>
                        <div className={style.lower_style}>Category</div>
                        <input className={style.input_size} 
                        type="text"
                        name="Category" 
                        value={props.ProductInputs[0].Category}
                        onChange={props.InputChange}/>
                    </div>
                    <div className={style.input_margin}>
                        <div className={style.lower_style}>Name</div>
                        <input className={style.input_size} 
                        type="text"
                        name="Name" 
                        value={props.ProductInputs[0].Name}
                        onChange={props.InputChange}/>
                    </div>
                    <div className={style.input_margin}>
                        <div className={style.lower_style}>Description</div>
                        <input className={style.desc_input} 
                        type="text"
                        name="Description"
                        value={props.ProductInputs[0].Description}
                        onChange={props.InputChange}/>
                    </div>
                    <div className={style.input_margin}>
                        <div className={style.lower_style}>Price</div>
                        <input className={style.input_size} 
                        type="text"
                        name="Price" 
                        value={props.ProductInputs[0].Price}
                        onChange={props.InputChange}/>
                    </div>
                    <div className={style.input_margin}>
                    <div className={style.lower_style}>Image</div>
                        <input className={style.input_size} 
                        type="text"
                        name="Image" 
                        value={props.ProductInputs[0].Image}
                        onChange={props.InputChange}/>
                    </div>
                </div>
                <div className={style.button_margin}>
                    <button className={style.button_size}onClick={()=>props.ProductCreate()}>create</button>
                    <Link to='/Manager/'><button className={style.button_size}>cancel</button></Link>
                </div>
            </div>
            
        </div>
    )
}
