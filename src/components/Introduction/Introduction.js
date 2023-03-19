import React from "react";
import IntroductionHydra from "../IntroductionHydra/IntroductionHydra";
import IntroductionInfo from "../IntroductionInfo/IntroductionInfo";
import "./Introduction.css"
import "./IntroductionMedia.css"

const Introduction = () => {

    return (
        <div className="introduction">
            <IntroductionHydra />
            <IntroductionInfo />
        </div>
    )
}

export default Introduction