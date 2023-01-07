import React from "react";
import './Navbar.css'
import logo from '../images/logo.png'


function Navbar(){
    return(
        <div className="navbar-container">
            <div className="navbar">
                <img className="navbar-logo" src={logo}/>
                <h1 className="navbar-header"><span>P</span>roduct <span>L</span>ist</h1>
            </div>
        </div>
    )
}

export default Navbar