import React from 'react'
import Logo from '../../../images/logo/silicon-logo-dark_theme.svg'

const FooterDark = () => {
    return (
        <div id="footer-dark">
            <div>
                <img src={Logo} alt="TODO"/>
                <p>Proin ipsum pharetra, senectus eget scelerisque varius pretium platea velit. Lacus, eget eu vitae
                    nullam proin turpis etiam mi sit. Non feugiat feugiat egestas nulla nec. Arcu tempus, eget elementum
                    dolor ullamcorper sodales ultrices eros. </p>
                <div>
                    <h4>Subscribe to our newsletter</h4>
                    <div id="footer-subscribe">
                        <p>Your email</p>
                        <button>Subscribe</button>
                    </div>
                </div>

                <p>2024. All rights reserved. Silicon Template.</p>
            </div>
            <div id="footer-links">
                <div id="site-links">
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Our Clients</li>
                        <li>Testimonials</li>
                        <li>News</li>
                    </ul>
                    <ul>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li>Facebook</li>
                        <li>LinkedIn</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>

                <div id="footer-contact">
                    <p>Contact Us</p>
                    <a href="#">example@gmail.com</a>
                </div>
            </div>

        </div>
    )
}
export default FooterDark
