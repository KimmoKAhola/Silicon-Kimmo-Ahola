import React from 'react'

import CheckMark from '../../images/features/bx-check-circle.svg';
import FeatureOne from '../../images/features/feature_1.svg';
import FeatureTwo from '../../images/features/feature_2.svg';
import Card1 from '../../images/features/card-1.png';
import Card2 from '../../images/features/card-2.png';
import Card1Inner from '../../images/features/card-1-inner.png';
import Card2Inner from '../../images/features/card-2-inner.png';


const Features = () => {
    return (
        <div id="features-container">

            <div id="features-first">
                <h2>Make your money transfer simple and clear</h2>

                <ul>
                    <li><img src={CheckMark} alt="TODO"/>Banking transactions are free for you</li>
                    <li><img src={CheckMark} alt="TODO"/>No monthly cash commission</li>
                    <li><img src={CheckMark} alt="TODO"/>Manage payments and transactions online</li>
                </ul>
                <button>Learn more</button>
            </div>

            <div id="features-second">
                <img src={Card1} alt="TODO"/>
                <img src={Card1Inner} alt="TODO"/>
            </div>


            <div id="features-third">
                <img src={Card2} alt="TODO"/>
                <img src={Card2Inner} alt="TODO"/>
            </div>

            <div id="features-fourth">
                <h2>Receive payment from international bank details</h2>

                <div>
                    <img src={FeatureOne} alt="TODO"/>
                    <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                </div>

                <div>
                    <img src={FeatureTwo} alt="TODO"/>
                    <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                </div>

                <button>Learn more</button>
            </div>

        </div>
    )
}
export default Features
