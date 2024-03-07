import React from 'react'
import Card from "./sections/news/Card.jsx";
import Navbar from "./sections/global/Navbar.jsx";
import FooterDark from "./sections/global/Footer-Dark.jsx";

const News = () => {
    return (
        <div>
            <Navbar/>
            <Card/>
            <FooterDark/>
        </div>
    )
}
export default News
