import React from "react";
import AboutInfo from "../AboutInfo/AboutInfo";
import AboutTitle from "../AboutTitle/AboutTitle";
import Button from "../Button/Button";

const AboutHydra = () => {

    return (
        <div className="about_hydra">
            <AboutTitle />
            <AboutInfo />
            <Button class="about_button" title="LET’S GET IN TOUCH" />
        </div>
    )
}

export default AboutHydra