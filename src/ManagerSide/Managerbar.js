import React from 'react'
import style from './Manager.module.css'
import { Link } from 'react-router-dom'

export default function Managerbar(props) {
    return (
        <div className={style.ManagerBar}>
             <div className={style.Logo_margin}>
                    <Link to="/"><div style={{color:"white"}} onClick={()=>props.getReceiveOrder()}><img src={`/images/logo.png`} 
                    height={50}
                    width={190}/></div></Link>
                </div>
            <div className={style.select_margin}>
                <select className={style.select_size} onChange={props.selectChange}>
                    {props.selectValue.map((option)=>(<option value={option.restaurantId}>{option.restaurantName}</option>))}
                </select>
            </div>
            <div className={style.button_margin}>
                <button className={style.button_left}><Link to="/History">History</Link></button>
                <button className={style.button_left}><Link to="/CreateCategory">CreateCategory</Link></button>
                <button className={style.button_left}><Link to="/CreateProduct">Createproduct</Link></button>
                <button className={style.button_left}><Link to="/CreateRestaurant">CreateRestaurant</Link></button>
                <button className={style.Log_out_margin} onClick={()=>props.Logout()}><Link to="/">Log out</Link></button>
            </div>
           
        </div>
    )
}
