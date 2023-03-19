import React from "react";
import JoinHydraBuild from "../JoinHydraBuild/JoinHydraBuild";
import JoinHydraInput from "../JoinHydraInput/JoinHydraInput";
import "./JoinHydra.css"
import "./JoinHydraMedia.css"

const JoinHydra = () => {

    return (
        <div className="joinhydra">
            <div className="joinhydra_content">
                <JoinHydraBuild />
                <JoinHydraInput />
            </div>
        </div>
    )
}

export default JoinHydra