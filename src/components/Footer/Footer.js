import React from "react";
import FooterContainer from "../FooterContainer/FooterContainer";
import vector from "../../img/Vector17.png"
import vector1 from "../../img/Vector18.png"
import vector2 from "../../img/Vector19.png"
import "./Footer.css"
import "./FooterMedia.css"

const Footer = () => {

    return (
        <footer>
            <div className="footer_cont">
                <FooterContainer />
                <img className="img" src={vector} />
            </div>
            <a href="#"><h3>2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED </h3></a>
            <img className="vec1" src={vector1} />
            <img className="vec2" src={vector2} />
        </footer>
    )
}

export default Footer