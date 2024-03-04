import React from 'react'
import Logo from '../../../images/logo/silicon-logo-light_theme.svg'

const FooterDark = () => {
    return (
        <div>
            <div>
                <img src={Logo} alt="TODO"/>
                <p>Proin ipsum pharetra, senectus eget scelerisque varius pretium platea velit. Lacus, eget eu vitae
                    nullam proin turpis etiam mi sit. Non feugiat feugiat egestas nulla nec. Arcu tempus, eget elementum
                    dolor ullamcorper sodales ultrices eros. </p>
                <div>
                    <h4>Subscribe to our newsletter</h4>
                    <p>Your email</p>
                    <button>Subscribe</button>
                </div>
            </div>
            <div id="site-links">
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Our Clients</li>
                    <li>Testimonials</li>
                    <li>News</li>
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

            <div>
                <p>Contact Us</p>
                <a href="#">example@gmail.com</a>
            </div>

        </div>
    )
}
export default FooterDark
