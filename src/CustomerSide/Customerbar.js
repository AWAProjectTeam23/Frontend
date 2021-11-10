import React from 'react'
import './Customer.css'
import { Link } from 'react-router-dom'

export default function Customerbar() {
    return (
        <div className="CustomerBar">
            <div className="Logo_margin">
                <Link to="/Customer/"><div style={{color:"white"}}>Logo</div></Link>
            </div>
            <div className="searchbar_margin">
                searchbar
            </div>
            <div className="button_margin">
                <button className="button_left">shoppingcart</button>
                <Link to="/Main/"><button className="button_left">Log out</button></Link>
            </div>
        </div>
    )
}
