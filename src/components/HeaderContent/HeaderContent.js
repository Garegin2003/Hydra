import React from "react";
import HeaderLink from "../HeaderLink/HeaderLink";
import vector from "../../img/Vector4.png"

const HeaderContent = () => {

    return (
        <div className="header_content">
            <img className="vec" src={vector} />
            <h3><span>Dive</span> Into The Depths <br /> Of <span>Virtual Reality</span></h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore 
                nisl tincidunt eget. Lectus mauris eros in vitae .</p>
            <HeaderLink />
        </div>
    )
}

export default HeaderContent