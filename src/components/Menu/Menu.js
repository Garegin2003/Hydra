import React, { useState } from "react";
import logo1 from "../../img/Frame.png"
import logo2 from "../../img/hydra.png"
import MenuItem from "../MenuItem/MenuItem";
import Button from "../Button/Button";
import menu from "../../img/Hamburger.png"
import "./Menu.css"
import "./MenuMedia.css"

const Menu = () => {

    return (
        <div className = 'menu'>
            <div className="logo">
                <img className="logo1" src={logo1} />
                <img className="logo2" src={logo2} />
            </div>
            <div className="menu_items">
                <MenuItem title = "ABOUT"/>
                <MenuItem title = "SERVICES"/>
                <MenuItem title = "TECHNOLOGIES"/>
                <MenuItem title = "HOW TO"/>
            </div>
            <div className="menu_link">
                <Button class = "logo_contact" title = "CONTACT US" />
                <Button class = "logo_join" title = "JOIN HYDRA" />
            </div>
            <img className="menu" src={menu} />
        </div>
    )
}

export default Menu