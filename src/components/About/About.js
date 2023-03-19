import React from "react";
import mask from "../../img/mask.png"
import AboutHydra from "../AboutHydra/AboutHydra";
import vector1 from "../../img/Vector7.png"
import vector2 from "../../img/Vector8.png"
import './About.css'
import "./AboutMedia.css"

const About = () => {

    return (
        <div className="about">
            <div className="about_img">
                <img src={mask} />
            </div>
            <AboutHydra />
            <img className="vec1" src={vector1} />
            <img className="vec2" src={vector2} />
        </div>
    )
}

export default About