import React from "react";
import shape1 from "../../img/shape3.png"
import shape2 from "../../img/shape2.png"
import "./Companies.css"
import "./CompaniesMedia.css"

const Companies = () => {

    return (
        <div className="companies">
            <div className="shap">
                <a href="#">
                    <img src={shape1} />
                </a>
            </div>
            <div className="unreal"></div>
            <div className="unity"></div>
            <div className="oculus"></div>
            <div className="vive"></div>
            <div className="shap">
                <a href="#">
                    <img src={shape2} /> 
                </a>
            </div>
        </div>
    )
}

export default Companies