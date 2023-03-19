import React from "react";
import Step from "../Step/Step";
import vector from "../../img/Vector15.png"
import "./Steps.css"
import "./StepsMedia.css"

const Steps = () => {
    const array = [
        {
            id: '01',
            title: '3D Conception & Design'
        },
        {
            id: '02',
            title: 'Interaction Design'
        },    
        {
            id: '03',
            title: 'VR World User Testing'
        },
        {
            id: '04',
            title: 'Hydra VR Deploy'
        },
    ]

    return (
        <div className="steps">
            <img className="vec" src={vector} />
            {array.map(company => <Step key = {company.id} id = {company.id} title = {company.title} />)}
        </div>
    )
}

export default Steps