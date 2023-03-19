import React from "react";
import Button from "../Button/Button";
import facebook from "../../img/facebook.png"
import twitter from "../../img/twitter.png"
import linkedin from "../../img/linkedin.png"
import youtube from "../../img/youtube.png"
import instagram from "../../img/instagram.png"
import pinterest from "../../img/pinterest.png"

const FooterSocial = () => {

    return (
        <div className="footer_social">
            <div className="social">
                <a href="#"> <h2>SOCIALIZE WITH HYDRA</h2></a>
                <div className="footer_media">
                    <img src={facebook} />
                    <img src={twitter} />
                    <img src={linkedin} />
                    <img src={youtube} />
                    <img src={instagram} />
                    <img src={pinterest} />
                </div>
            </div>
            <Button class="footer_button" title="BUILD YOUR WORLD" />
        </div>
    )
}

export default FooterSocial