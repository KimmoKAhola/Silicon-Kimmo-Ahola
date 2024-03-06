import React from 'react'
import Logo from '../../../images/logo/silicon-logo-dark_theme.svg'
import {Link} from "react-router-dom";

const FooterDark = () => {
    return (
        <div className="dark-container">
            <div id="footer-dark">
                <div>
                    <Link to="/home">
                        <img src={Logo} alt="TODO"/>
                    </Link>
                    <p id="footer-text">Proin ipsum pharetra, senectus eget scelerisque varius pretium platea velit.
                        Lacus, eget eu vitae
                        nullam proin turpis etiam mi sit. Non feugiat feugiat egestas nulla nec. Arcu tempus, eget
                        elementum
                        dolor ullamcorper sodales ultrices eros. </p>
                    <div>
                        <h6>Subscribe to our newsletter</h6>
                        <div id="footer-subscribe">
                            <input type="text"/>
                            <button className="footer-button"><span>Subscribe</span></button>
                        </div>
                    </div>

                    <p id="dark-copyright">2024. All rights reserved. Silicon Template.</p>
                </div>
                <div id="footer-links">
                    <div className="site-links">
                        <ul>
                            <Link to="/" className="Link">Home</Link>
                            <Link to="#" className="Link">Services</Link>
                            <Link to="#" className="Link">Our Clients</Link>
                            <Link to="/testimionals" className="Link">Testimonials</Link>
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
        </div>
    )
}
export default FooterDark
