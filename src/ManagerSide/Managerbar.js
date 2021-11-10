import React from 'react'
import style from './Manager.module.css'
import { Link } from 'react-router-dom'

export default function Managerbar() {
    return (
        <div className={style.ManagerBar}>
            <div className={style.Logo_margin}>
                <Link to="/Manager/"><div style={{color:"white"}}>LOGO</div></Link>
            </div>
            <div className={style.button_margin}>
                <Link to="/Manager/History"><button className={style.button_left}>History</button></Link>
                <Link to="/Manager/CreateCategory"><button className={style.button_left}>CreateCategory</button></Link>
                <Link to="/Manager/CreateProduct"><button className={style.button_left}>Createproduct</button></Link>
                <Link to="/Manager/CreateRestaurant"><button className={style.button_left}>CreateRestaurant</button></Link>
                <Link to="/Main/"><button className={style.Log_out_margin}>Log out</button></Link>
            </div>
           
        </div>
    )
}
