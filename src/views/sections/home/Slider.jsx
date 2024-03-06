import React from 'react'
import How1 from '../../../images/mobile-howdoesitwork_1.svg'
import How2 from '../../../images/mobile-howdoesitwork_2.svg'
import How3 from '../../../images/mobile-howdoesitwork_3.svg'

const Slider = () => {
    return (
        <div className="container">
            <div id="slider-container">

                <h2>How Does It Work?</h2>

                <div id="pictures">
                    <img src={How1} alt="TODO"/>
                    <img src={How2} alt="TODO"/>
                    <img src={How3} alt="TODO"/>
                </div>

                <h3>Step 2. Latest transaction history</h3>
                <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in
                    consectetur condimentum. </p>
            </div>
        </div>
    )
}
export default Slider
