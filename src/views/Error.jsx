import React from 'react'
import Navbar from "./sections/global/Navbar.jsx";
import Content from './sections/error/Content.jsx'

function ErrorFooter() {
    return <p>2024. All rights reserved. Silicon template.</p>
}

const Error = () => {
    return (
        <div className="wrapper">
            <Navbar/>
            <Content/>
            <ErrorFooter/>
        </div>
    )
}
export default Error
