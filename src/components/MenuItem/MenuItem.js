import React from "react";
import "./MenuItem.css"

const MenuItem = (props) => {

    return (
        <div className="menu_item">
            <a href="#"><h2>{props.title}</h2></a>
        </div>
    )
}

export default MenuItem