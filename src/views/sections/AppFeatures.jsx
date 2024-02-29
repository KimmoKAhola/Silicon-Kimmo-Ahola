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
        <div id="app-features">
            <img src={Test} alt="TODO"/>

            <div id="feature-grid">
                <h2>App Features</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus
                    facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>


                <div id="grid">
                    <div>
                        <h3>Easy Payments</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, possimus.</p>
                        <img src={Feature1} alt="TODO"/>
                    </div>

                    <div>
                        <h3>Data Security</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <img src={Feature2} alt="TODO"/>
                    </div>


                    <div>
                        <h3>Cost Statistics</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <img src={Feature3} alt="TODO"/>
                    </div>

                    <div>
                        <h3>Support 24/7</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <img src={Feature4} alt="TODO"/>
                    </div>

                    <div>
                        <h3>Regular Cashback</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <img src={Feature5} alt="TODO"/>
                    </div>

                    <div>
                        <h3>Top standards</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <img src={Feature6} alt="TODO"/>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default AppFeatures
