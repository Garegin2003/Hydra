import React from "react";
import chevron from "../../img/chevron.png"
import vector from "../../img/Vector14.png"
import "./Technologies.css"
import "./TechnologiesMedia.css"

const Technologies = () => {

    return (
        <div className="tech">
            <h3>TECHNOLOGIES & HARDWARE</h3>
            <h4>USED BY HYDRA VR.</h4>
            <div className="chev_relative">
                <div className="chev">
                 <a href="#">   <img src={chevron} /></a>
                </div>
            </div>
            <img className="vec" src={vector} />
        </div>
    )
}

export default Technologies