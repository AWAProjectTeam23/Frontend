import React from 'react'
import style from './Manager.module.css'
import { Link } from 'react-router-dom'

export default function Managerbar(props) {
    return (
        <div className={style.ManagerBar}>
            <div className={style.Logo_margin}>
                <Link to="/"><div style={{color:"white"}}>LOGO</div></Link>
            </div>
            <div className={style.select_margin}>
                <select className={style.select_size} onChange={props.selectChange}>
                    {props.selectValue.map((option)=>(<option value={option.Id}>{option.name}</option>))}
                </select>
            </div>
            <div className={style.button_margin}>
                <Link to="/History"><button className={style.button_left}>History</button></Link>
                <Link to="/CreateCategory"><button className={style.button_left}>CreateCategory</button></Link>
                <Link to="/CreateProduct"><button className={style.button_left}>Createproduct</button></Link>
                <Link to="/CreateRestaurant"><button className={style.button_left}>CreateRestaurant</button></Link>
                <Link to="/"><button className={style.Log_out_margin} onClick={()=>props.Logout()}>Log out</button></Link>
            </div>
           
        </div>
    )
}
