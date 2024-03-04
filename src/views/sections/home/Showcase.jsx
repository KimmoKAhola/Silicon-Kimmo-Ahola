import React from 'react'
import Mobile from '../../../images/showcase-mobiles.svg';
import AppStore from '../../../images/appstore.svg'
import GooglePlay from '../../../images/googleplay.svg'
import StoreButtons from "./Store-Buttons.jsx";

const Showcase = () => {
    return (
        <div id="showcase">

            <div id="left-side">

                <div id="left-first">
                    <h1>Manage All Your Money in One App</h1>
                    <p>We offer you a new generation of the mobile banking. <br/>
                    Save, spend & manage money in your pocket.</p>
                    <StoreButtons/>
                </div>

                <div id="left-second">
                    <button id="next-btn"></button>
                    <p>Discover more</p>
                </div>

            </div>

            <div id="right-side">
                <img src={Mobile} alt="TODO"/>
            </div>
        </div>
    )
}
export default Showcase