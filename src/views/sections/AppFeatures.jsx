import React from 'react'
import Test from '../../images/mobile-appfeatures.svg'
import Feature1 from '../../images/icons/feature_1.svg'
import Feature2 from '../../images/icons/feature_2.svg'
import Feature3 from '../../images/icons/feature_3.svg'
import Feature4 from '../../images/icons/feature_4.svg'
import Feature5 from '../../images/icons/feature_5.svg'
import Feature6 from '../../images/icons/feature_6.svg'

const AppFeatures = () => {
    return (
        <div>
            <img src={Test} alt="TODO"/>

            <h1>App Features</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolorum earum officiis, quaerat
                quos reprehenderit similique. Ducimus iste molestiae repudiandae sequi vero? Beatae deleniti maxime
                numquam praesentium quidem. Et, molestias.</p>
            <div>
                <h2>Easy Payments</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, possimus.</p>
                <img src={Feature1} alt="TODO"/>
            </div>

            <div>
                <h2>Data Security</h2>
                <p>Lorem ipsum dolor sit amet.</p>
                <img src={Feature2} alt="TODO"/>
            </div>


            <div>
                <h2>Cost Statistics</h2>
                <p>Lorem ipsum dolor sit amet.</p>
                <img src={Feature3} alt="TODO"/>
            </div>

            <div>
                <h2>Support 24/7</h2>
                <p>Lorem ipsum dolor sit amet.</p>
                <img src={Feature4} alt="TODO"/>
            </div>

            <div>
                <h2>Regular Cashback</h2>
                <p>Lorem ipsum dolor sit amet.</p>
                <img src={Feature5} alt="TODO"/>
            </div>

            <div>
                <h2>Top standards</h2>
                <p>Lorem ipsum dolor sit amet.</p>
                <img src={Feature6} alt="TODO"/>
            </div>
        </div>
    )
}
export default AppFeatures
