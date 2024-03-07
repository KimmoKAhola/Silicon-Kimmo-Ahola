import React from 'react'
import How1 from '../../../images/mobile-howdoesitwork_1.svg'
import How2 from '../../../images/mobile-howdoesitwork_2.svg'
import How3 from '../../../images/mobile-howdoesitwork_3.svg'
import ArrowButton from "../global/ArrowButton.jsx";

const Slider = () => {
    return (
        <div className="container">
            <div id="slider-container">

                <h2>How Does It Work?</h2>

                <div id="pictures">
                    <ArrowButton direction="left"/>
                    <img className="outer" src={How1} alt="TODO"/>
                    <img src={How2} alt="TODO"/>
                    <img className="outer" src={How3} alt="TODO"/>
                    <ArrowButton direction="right"/>
                </div>

                <div id="slider-bottom">
                    <h4>Step 2. Latest transaction history</h4>
                    <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque
                        hac in
                        consectetur condimentum. </p>
                </div>
            </div>
        </div>
    )
}
export default Slider
