import React from "react";
import HydraHydra from "../HydraHydra/HydraHydra";
import HydraInfo from "../HydraInfo/HydraInfo";
import "./Hydra.css"
import "./HydraMedia.css"

const Hydra = () => {

    return (
        <div className="hydra">
            <HydraHydra />
            <HydraInfo />
        </div>
    )
}

export default Hydra