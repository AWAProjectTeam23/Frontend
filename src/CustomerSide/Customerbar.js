import React from 'react'
import style from './Customer.module.css'
import { Link } from 'react-router-dom'

export default function Customerbar(props) {
    return (
        <div className={style.CustomerBar}>
            <div className={style.Logo_margin}>
                <Link to="/Customer/"><div style={{color:"white"}}>Logo</div></Link>
            </div>
            <div className={style.searchbar_margin}>
                <input style={{height:"20px",width:"400px"}} type="text"onChange={props.searchChange} />
            </div>
            <div className={style.button_margin}>
                <button className={style.button_left}>shoppingcart</button>
                <Link to="/Main/"><button style={{fontWeight:"bold"}} className={style.button_left}>Log out</button></Link>
            </div>
        </div>
    )
}
