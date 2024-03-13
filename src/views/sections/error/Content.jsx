import React from 'react'
import {Link} from "react-router-dom";
import HomeIcon from '../../../images/error/home-icon.svg'
import Error_BG from '../../../images/error/404.png'

const Content = () => {
    return (
        <div className="error-container">
            <img id="error-404-logo" src={Error_BG} alt="TODO"/>
            <div id="error-test-bottom"><p>Ooops!</p>
                <p>The page you are looking for is not available.</p>
                <button className="primary-button">
                    <span><Link to="/"><img src={HomeIcon} alt=""/>Go to homepage</Link></span>
                </button>

            </div>
        </div>
    )
}
export default Content
