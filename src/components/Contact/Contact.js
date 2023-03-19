import React from "react";
import ContactItem from "../ContactItem/ContactItem";
import location from "../../img/location.png"
import phone from "../../img/phone.png"
import mail from "../../img/mail.png"
import "./Contact.css"
import "./ContactMedia.css"

const Contact = () => {

    return (
        <div className="contact">
            <ContactItem class = "contact_item first" img={location} title="Pay Us a Visit" info="Union St, Seattle, WA 98101, United States" />
            <div className="line"></div>
            <ContactItem class = "contact_item" information="tel:+(110) 1111-1010" img={phone} title="Give Us a Call" info="(110) 1111-1010" />
            <div className="line"></div>
            <ContactItem class = "contact_item last" information="mailto:Contact@HydraVTech.com" img={mail} title="Send Us a Message" info="Contact@HydraVTech.com" />
        </div>
    )
}

export default Contact