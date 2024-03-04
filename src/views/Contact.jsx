import React from 'react'
import Hero from "./sections/contact/Hero.jsx";
import Map from "./sections/contact/Map.jsx";
import FooterDark from "./sections/global/Footer-Dark.jsx";
import Navbar from "./sections/global/Navbar.jsx";

const Contact = () => {
    return (
        <div className="wrapper">
            <Navbar />
            <Hero/>
            <Map/>
            <FooterDark/>
        </div>
    )
}
export default Contact
