import React from 'react'
import Logo from '../../../images/logo/silicon-logo-light_theme.svg'
import AppStore from "../../../images/appstore.svg";
import GooglePlay from "../../../images/googleplay.svg";
import Facebook from '../../../images/light-footer/bxl-facebook-square.svg'
import Twitter from '../../../images/light-footer/bxl-twitter.svg'
import Instagram from '../../../images/light-footer/bxl-instagram-alt.svg'
import Youtube from '../../../images/light-footer/bxl-youtube.svg'
import StoreButtons from "../home/Store-Buttons.jsx";
import Socials from "./Socials.jsx";


const FooterLight = () => {
    return (
        <div id="light-footer">
            <img src={Logo} alt="TODO"/>
            <ul id="footer-links">
                <li>Overview</li>
                <li>Features</li>
                <li>News</li>
                <li>Contact</li>
                <li>Account</li>
            </ul>
            <StoreButtons/>
            <Socials/>
            <p>
                2024. All rights reserved. Pulvinar urna condimentum amet tempor, ornare integer. Lorem odio justo
                malesuada suspendisse viverra aliquet quisque turpis non. Feugiat in odio non nunc ornare consectetur.
            </p>
        </div>
    )
}
export default FooterLight
