import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import arrow from "../../img/arrow.png"

const HeaderLink = () => {

    return (
        <div className="header_link">
            <Button class = "header_button" title = "BUILD YOUR WORLD" />
            <img src={arrow} />
        </div>
    )
}

export default HeaderLink