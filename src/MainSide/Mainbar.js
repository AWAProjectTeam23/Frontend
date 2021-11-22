import React from 'react'
import style from'./Main.module.css'
import { Link } from 'react-router-dom'

export default function Mainbar(props) {
    return (
        <div className={style.MainBar}>
            <div className={style.Logo_margin}>
                <Link to="/Main/" ><div  style={{color:"white"}}>Logo</div></Link>
            </div>
            <div className={style.searchbar_margin}>
                <input style={{height:"20px",width:"400px"}} type="text" onChange={props.searchChange} />
            </div>
            <div className={style.button_margin}>
                <Link to="/Main/CreateAccount"><button className={style.button_left}>createaccount</button></Link>
                <Link to="/Main/Login"><button className={style.button_left}>Login</button></Link>
            </div>
        </div>
    )
}
