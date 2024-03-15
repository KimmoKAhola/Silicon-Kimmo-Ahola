import React, {useState} from 'react'
import Logo from '../../../images/logo/silicon-logo-dark_theme.svg'
import {Link} from "react-router-dom";
import SubscriberButton from "./SubscriberButton.jsx";
import ArrowButton from "./ArrowButton.jsx";

const FooterDark = () => {
    const [toggleAccordion, setToggleAccordion] = useState(false);

    const toggleState = () =>{
        setToggleAccordion(!toggleAccordion);
    }

    return (

        <div id="footer-dark-bg">
            <div className="container">
                <div id="footer-dark">
                    <div id="footer-dark-subscription">
                        <Link id="footer-dark-logo" className="logo" to="/home"><img src={Logo} alt="TODO"/></Link>
                        <p id="footer-text">Proin ipsum pharetra, senectus eget scelerisque varius pretium platea velit.
                            Lacus, eget eu vitae
                            nullam proin turpis etiam mi sit. Non feugiat feugiat egestas nulla nec. Arcu tempus, eget
                            elementum
                            dolor ullamcorper sodales ultrices eros. </p>
                        <h6>Newsletter to our newsletter</h6>
                        <SubscriberButton value="Newsletter"/>

                        <p id="dark-copyright">2024. All rights reserved. Silicon Template.</p>
                    </div>
                    <div id="footer-links">
                        <div className="site-links">
                            <ul>
                                <Link to="/" className="Link">Home</Link>
                                <Link to="#" className="Link">Services</Link>
                                <Link to="#" className="Link">Our Clients</Link>
                                <Link to="#" className="Link">Testimonials</Link>
                                <Link to="/news" className="Link">News</Link>
                            </ul>
                            <ul>
                                <Link to="#" className="Link">Terms & Conditions</Link>
                                <Link to="#" className="Link">Privacy Policy</Link>
                            </ul>
                        </div>

                        <div className="site-links">
                            <ul>
                                <Link to="#" className="Link">Facebook</Link>
                                <Link to="#" className="Link">LinkedIn</Link>
                                <Link to="#" className="Link">Twitter</Link>
                                <Link to="#" className="Link">Instagram</Link>
                            </ul>
                        </div>

                        <div id="footer-contact">
                            <p>Contact Us</p>
                            <a href="#">example@gmail.com</a>
                        </div>
                    </div>

                </div>
                <div id="test-header"><p>Our social links</p><ArrowButton isActive={toggleAccordion ? "true" : false} onClick={toggleState} direction="down"/></div>
                <div className={`footer-dark-test ${toggleAccordion ? 'active' : 'inactive'}`}>
                    <ul>
                        <Link to="#" className="Link">Facebook</Link>
                        <Link to="#" className="Link">LinkedIn</Link>
                        <Link to="#" className="Link">Twitter</Link>
                        <Link to="#" className="Link">Instagram</Link>
                    </ul>
                </div>
            </div>

        </div>
    )
}
export default FooterDark
