import React from "react";
import Item from "../Item/Item";
import mask1 from "../../img/Mask1.png"
import mask2 from "../../img/Mask2.png"
import mask3 from "../../img/Mask3.png"
import mask4 from "../../img/Mask4.png"
import "./Items.css"
import "./ItemsMedia.css"


const Items = () => {
    const array = [
        {
            id: 0,
            title: 'SIMULATION',
            img: mask1,
            desc: "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae",
            butn: 'TRY IT NOW'
        },
        {
            id: 1,
            title: 'EDUCATION',
            img: mask2,
            desc: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
            butn: 'TRY IT NOW'
        }, {
            id: 2,
            title: 'SELF-CARE',
            img: mask3,
            desc: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
            butn: 'TRY IT NOW'
        }, {
            id: 3,
            title: 'OUTDOOR',
            img: mask4,
            desc: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
            butn: 'TRY IT NOW'
        },
    ]

    return (
        <div className="items">
            {array.map(item => <Item key={item.id} id = {item.id} img={item.img} title={item.title} desc={item.desc} butn={item.butn} />)}
        </div>
    )
}

export default Items