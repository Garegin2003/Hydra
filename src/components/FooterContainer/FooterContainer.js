import React from "react";
import FooterContent from "../FooterContent/FooterContent";
import FooterLicenses from "../FooterLicenses/FooterLicenses";
import FooterSocial from "../FooterSocial/FooterSocial";
import frame from "../../img/Frame1.png"
import vector from "../../img/Vector20.png"

const FooterContainer = () => {

    return (
        <div className="footer_container">
            <div className="l">
                <div className="logo_services_lic">
                    <div className="logo_services">
                        <div className="logo">
                            <img className="log" src={frame} />
                            <img className="vec" src={vector} />
                        </div>
                        <div className="services">
                            <FooterContent />
                            <img src={vector} />
                        </div>
                    </div>
                    <div className="lic">
                        <FooterLicenses />
                        <img src={vector} />
                    </div>
                </div>
            </div>
            <FooterSocial />
        </div>
    )
}

export default FooterContainer