import React from 'react'
import Navbar from "./sections/global/Navbar.jsx";
import FooterDark from "./sections/global/Footer-Dark.jsx";
import Grid from "./sections/news/Grid.jsx";
import Newsletter from "./sections/news/Newsletter.jsx";
import BreadCrumb from "./sections/global/BreadCrumb.jsx";

const News = () => {
    return (
        <div>
            <Navbar/>
            <BreadCrumb/>
            <Grid/>
            <Newsletter/>
            <FooterDark/>
        </div>
    )
}
export default News
