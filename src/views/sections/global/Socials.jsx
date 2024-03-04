import React from 'react'
import Facebook from "../../../images/light-footer/bxl-facebook-square.svg";
import Twitter from "../../../images/light-footer/bxl-twitter.svg";
import Instagram from "../../../images/light-footer/bxl-instagram-alt.svg";
import Youtube from "../../../images/light-footer/bxl-youtube.svg";

const Socials = () => {
    return (
        <div className="brand-footer-logos">
            <ul>
                <li><img src={Facebook} alt="TODO"/></li>
                <li><img src={Twitter} alt="TODO"/></li>
                <li><img src={Instagram} alt="TODO"/></li>
                <li><img src={Youtube} alt="TODO"/></li>
            </ul>
        </div>
    )
}
export default Socials
