import React from "react";
import BuildHydra from "../BuildHydra/BuildHydra";
import BuildInfo from "../BuildInfo/BuildInfo";
import "./Build.css"
import "./BuildMedia.css"

const Build = () => {

    return (
        <div className="build">
            <BuildHydra />
            <BuildInfo />
        </div>
    )
}

export default Build