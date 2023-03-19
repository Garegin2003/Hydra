import React from "react";
import Button from "../Button/Button";
import shape1 from "../../img/shape3.png"
import shape2 from "../../img/shape2.png"

const Item = (props) => {

    const a = `item z${props.id}`

    return (
        <>
        <div className={a}>
            <div className="shape1">
                <img src={shape1} />
            </div>
                <img className="img" src={props.img} />
                <h3>{props.title}</h3>
                <div></div>
                <p>{props.desc}</p>
                <Button class="item_class" title={props.butn} />
            <div className="shape2">
                <img src={shape2} />
            </div>
        </div>
        </>
    )
}

export default Item