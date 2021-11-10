import React from 'react'
import './Main.css'
import { Link } from 'react-router-dom'

export default function Mainbar() {
    return (
        <div className="MainBar">
            <div className="Logo_margin">
                <Link to="/Main/"><div style={{color:"white"}}>Logo</div></Link>
            </div>
            <div className="searchbar_margin">
                searchbar
            </div>
            <div className="button_margin">
                <Link to="/Main/CreateAccount"><button className="button_left">createaccount</button></Link>
                <Link to="/Main/Login"><button className="button_left">Login</button></Link>
            </div>
        </div>
    )
}
