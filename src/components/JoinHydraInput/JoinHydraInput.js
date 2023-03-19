import React from "react";

const JoinHydraInput = () => {

    return (
        <form>
            <div className="joinhydra_input">
                <div className="name">
                    <input placeholder="First Name" type="text" />
                    <input placeholder="Last Name" type="text" />
                </div>
                <div className="name">
                    <input placeholder="Email" type="text" />
                    <input placeholder="Phone Number" type="text" />
                </div>
                <div className="sub">
                    <input className="sub" placeholder="Subject" type="text" />
                </div>
                <div className="tell">
                    <input className="tell" placeholder="Tell Us Something..." type="textarea" />
                </div>
            </div>
            <div>
                <input className="butn" type="submit" value="SEND TO HYDRA" />
            </div>
        </form>
    )
}

export default JoinHydraInput