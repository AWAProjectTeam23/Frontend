import React from 'react'
import './Manager.css'
import { Link } from 'react-router-dom'

export default function Managerbar() {
    return (
        <div className="ManagerBar">
            <div className="Logo_margin">
                <Link to="/Manager/"><div style={{color:"white"}}>LOGO</div></Link>
            </div>
            <div className="button_margin">
                <Link to="/Manager/History"><button className="button_left">History</button></Link>
                <Link to="/Manager/CreateCategory"><button className="button_left">CreateCategory</button></Link>
                <Link to="/Manager/CreateProduct"><button className="button_left">Createproduct</button></Link>
                <Link to="/Manager/CreateRestaurant"><button className="button_left">CreateRestaurant</button></Link>
                <Link to="/Main/"><button className="button_left">Log out</button></Link>
            </div>
           
        </div>
    )
}
