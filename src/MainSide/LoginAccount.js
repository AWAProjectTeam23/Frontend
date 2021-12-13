import React from 'react'
import style from './LoginAccount.module.css';
import { Link, useNavigate } from 'react-router-dom'
import { orange } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function LoginAccount(props) {
    let navigate=useNavigate()
    const [checked, setChecked] = React.useState(false);
    const handleChange = () => {
    setChecked(!checked);
    props.managerLoginCheckChange()
    }

    function handleLogin(){
        if(props.Login()){
        console.log("navigating")
        navigate("/")
        }
    }

    return (
        <div className={style.back_color}>
            <div className={style.warningText}>
                {props.LoginWarning}
            </div>
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
                    <div>
                        <div className={style.checkbox}>
                            <Checkbox
                            input
                            type="checkbox"
                            checked={checked}
                            onChange={handleChange}
                            {...label}
                            defaultChecked
                            sx={{
                            color: orange[800],
                            '& .MuiSvgIcon-root': { fontSize: 50 },
                            '&.Mui-checked': {
                            color: orange[800],
                                },
                            }}/>
                            <div className={style.checkheader}>
                            Login as a restaurant manager</div>
                        </div>
                    </div>
                <div className={style.button_margin}>
                    <button className={style.button_size} onClick={()=>handleLogin()}>Login</button>
                    <Link to="/" ><button className={style.button_size}>Cancel</button></Link>
                </div>
            </div>
        </div>
    )
}
