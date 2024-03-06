import React from 'react'
import Mobile from '../../../images/showcase-mobiles.svg';
import StoreButtons from "./Store-Buttons.jsx";
import ArrowButton from "../global/ArrowButton.jsx";

const Showcase = () => {
    return (
        <div className="container">

            <div id="showcase">
                <div id="left-side">
                    <div id="left-first">
                        <h1>Manage All Your Money in One App</h1>
                        <p>We offer you a new generation of the mobile banking. <br/>
                            Save, spend & manage money in your pocket.</p>
                        <StoreButtons/>
                    </div>
                    <ArrowButton/>
                </div>

                <div id="right-side">
                    <img src={Mobile} alt="TODO"/>
                </div>
            </div>
        </div>
    )
}
export default Showcase
