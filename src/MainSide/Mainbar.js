import React from 'react'
import style from'./Main.module.css'
import { Link } from 'react-router-dom'

export default function Mainbar(props) {
    return (
        <div className={style.MainBar}>
             <div className={style.Logo_margin}>
                    <Link to="/"><div style={{color:"white"}}><img src={`/images/logo.png`} 
                    height={50}
                    width={190}/></div></Link>
                </div>
            <div className={style.searchbar_margin}>
                <input style={{height:"20px",width:"400px"}} type="text" onChange={props.searchChange} />
            </div>
            <div className={style.button_margin}>
                <button className={style.button_left}><Link to="/CreateAccount">createaccount</Link></button>
                <button className={style.button_left}><Link to="/Login">Login</Link></button>
            </div>
        </div>
    )
}
