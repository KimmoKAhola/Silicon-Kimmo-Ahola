import React from 'react'

import CheckMark from '../../../images/features/bx-check-circle.svg';
import FeatureOne from '../../../images/features/feature_1.svg';
import FeatureTwo from '../../../images/features/feature_2.svg';
import BottomCard from '../../../images/features/bottom-card.png';
import TopCard from '../../../images/features/top-card.png';


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
                <img src={TopCard} alt="TODO"/>
            </div>


            <div id="features-third">
                <img src={BottomCard} alt="TODO"/>
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