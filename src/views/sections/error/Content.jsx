import React from 'react'
import {Link} from "react-router-dom";
import HomeIcon from '../../../images/error/home-icon.svg'
import Error_BG from '../../../images/error/404.png'
import Background from '../../../images/error/test.png'
import Background_2 from '../../../images/error/bg.png'

const Content = () => {
    return (
        <div className="error-container">
            <div id="error-404-image">
                <img className="image-layer" src={Background} alt="TODO"/>
                <img className="image-layer" src={Background_2} alt="TODO"/>
            </div>
            {/*<img src={Error_BG} alt="TODO"/>*/}
            <div id="error-test-bottom"><p>Ooops!</p>
                <p>The page you are looking for is not available.</p>
                <button>
                    <span><Link to="/"><img src={HomeIcon} alt=""/>Go to homepage</Link></span>
                </button>
                <p>2024. All rights reserved. Silicon template.</p>
            </div>
        </div>
    )
}
export default Content
