import React from "react";
import HeaderContent from "../HeaderContent/HeaderContent";
import pixels from "../../img/pixels.png"
import vector1 from "../../img/Vector1.png"
import vector2 from "../../img/Vector2.png"
import vector3 from "../../img/Vector3.png"
import "./Header.css"
import "./HeaderMedia.css"

const Header = () => {

    return (
        <header>
            <HeaderContent />
            <div className="div">
                <img className="img" src={pixels} />
                <img className="vec1" src={vector1} />
                <img className="vec2" src={vector2} />
                <img className="vec3" src={vector3} />
            </div>
        </header>
    )
}

export default Header