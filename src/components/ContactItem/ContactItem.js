import React from "react";
import shape1 from "../../img/shape.png"
import shape2 from "../../img/shape1.png"
import "./ContactItem.css"

const ContactItem = (props) => {

    return (
        <div className={props.class}>
            <img className="shape" src={shape1} />
            <div className="item">
                <img src={props.img} />

                <div className="contact_info">
                    <a className="contact1" href={props.information ? props.information : "#"}>
                        <h3>{props.title}</h3>
                        <p>{props.info}</p></a>
                </div>
            </div>
            <img className="shape" src={shape2} />
        </div>
    )
}

export default ContactItem