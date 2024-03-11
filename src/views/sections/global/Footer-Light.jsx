import React from 'react'
import Logo from '../../../images/logo/silicon-logo-light_theme.svg'
import StoreButtons from "../home/Store-Buttons.jsx";
import Socials from "./Socials.jsx";
import {Link} from "react-router-dom";


const FooterLight = () => {
    return (
        <div className="container">
            <div id="light-footer">
                <Link id="logo" to="/">
                    <img src={Logo} alt="TODO"/>
                </Link>
                <ul id="footer-links">
                    <Link className="nav-link" to="/">Overview</Link>
                    <Link className="nav-link" to="/">Features</Link>
                    <Link className="nav-link" to="/news">News</Link>
                    <Link className="nav-link" to="/contact">Contact</Link>
                    <Link className="nav-link" to="/*">Account</Link>
                </ul>
                <StoreButtons/>
                <Socials/>
                <p>
                    2024. All rights reserved. Pulvinar urna condimentum amet tempor, ornare integer. Lorem odio justo
                    malesuada suspendisse viverra aliquet quisque turpis non. Feugiat in odio non nunc ornare
                    consectetur.
                </p>
            </div>
        </div>
    )
}
export default FooterLight