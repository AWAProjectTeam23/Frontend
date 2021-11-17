import React from 'react'
import style from './LoginAccount.module.css';
import { Link } from 'react-router-dom'

export default function LoginAccount(props) {
    return (
        <div className={style.back_color}>
            <div className={style.box}>
                <div className={style.input_margin}>
                    <div className={style.header}> Login</div>
                   <div className={style.secondheader}> Account name</div>
                   <input className={style.input_type}
                     type="text" 
                     value={props.LoginInput} 
                     onChange={props.LoginNameInput}/>
                    <div className={style.secondheader}> Password</div>
                    <input className={style.input_type_password}
                    type="text" 
                    value={props.LoginPasswordInputs} 
                    onChange={props.LoginPasswordInput}
                    />
                </div>
                
                <div className={style.button_margin}>
                <button className={style.button_size} onClick={()=>props.Login()}>Login</button>
                    <Link to="/Main/" ><button className={style.button_size}>Cancel</button></Link>
                </div>
            </div>
        </div>
    )
}


