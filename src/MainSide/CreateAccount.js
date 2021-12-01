import React from 'react'
import style from './CreateAccount.module.css';
import { Link } from 'react-router-dom'
import { orange } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function CreateAccount(props) {
    const [checked, setChecked] = React.useState(false);
    const handleChange = () => {
    setChecked(!checked);
    props.managerCheckChange()}
    
    return (
        <div className={style.back_color}>
            <div className={style.warningtext}>
                {props.CreateWarning}
            </div>
            <div className={style.box}>
                <div className={style.input_margin}>
                    <div className={style.header}> Create account</div>
                   <div className={style.secondheader}> Account name</div>
                   <input className={style.input_type}
                     type="text" 
                     value={props.CreateAccountInputs} 
                     onChange={props.CreateNameInput}/>
                    <div className={style.secondheader}> Password</div>
                    <input className={style.input_type_password}
                    type="text" 
                    value={props.CreateAccountPassword} 
                    onChange={props.CreatePasswordInput}
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
                            Create account as a restaurant manager</div>
                        </div>
                    </div>
                <div className={style.button_margin}>
                <button className={style.button_size} onClick={()=>props.AccountCreate()}>Register</button>
                    <Link to="/" ><button className={style.button_size}>Cancel</button></Link>
                </div>
            </div>
        </div>
    )
}
