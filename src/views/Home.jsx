import React from 'react'
import Showcase from "./sections/Showcase.jsx";
import Brands from "./sections/Brands.jsx";
import AppFeatures from "./sections/AppFeatures.jsx";
import Slider from "./sections/Slider.jsx";
import Features from "./sections/Features.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Footer from "./sections/Footer.jsx";
import Subscribe from "./sections/Subscribe.jsx";

const Home = () => {
    return (
        <div>
            <Showcase/>
            <Brands/>
            <AppFeatures/>
            <Slider/>
            <Features/>
            <Testimonials/>
            <Subscribe/>
            <Footer/>
        </div>
    )
}
export default Home
