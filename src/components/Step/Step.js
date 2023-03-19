import React from "react";
import arrow from "../../img/arrow.png"
import shape1 from "../../img/shape3.png"
import shape2 from "../../img/shape2.png"


const Step = (props) => {
    const { id } = props
    const classId = `step z${id}`

    return (
        <div className={classId}>
            <div className="step_id">
                <h2>{props.id}</h2>
            </div>
            <div className="step_title">
                <div className="shape">
                    <img src={shape1} />
                </div>
                <img className="arrow" src={arrow} />
                <p>{props.title}</p>
                <div className="shape">
                    <img src={shape2} />
                </div>
                
            </div>
        </div>
    )
}

export default Step