import React from 'react'
import Mobile from '../../../images/mobile-appfeatures.svg'
import Feature1 from '../../../images/icons/feature_1.svg'
import Feature2 from '../../../images/icons/feature_2.svg'
import Feature3 from '../../../images/icons/feature_3.svg'
import Feature4 from '../../../images/icons/feature_4.svg'
import Feature5 from '../../../images/icons/feature_5.svg'
import Feature6 from '../../../images/icons/feature_6.svg'

const AppFeatures = () => {
    return (
        <div className="container">

            <div id="app-features">
                <img src={Mobile} alt="TODO"/>

                <div id="feature-grid">

                    <div id="right-top">
                        <h2>App Features</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas.
                            Nam
                            luctus
                            facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec
                            lacus.</p>
                    </div>

                    <div id="right-bottom">
                        <div className="feature-grid-test">
                            <img className="feature-icon" src={Feature1} alt="TODO"/>
                            <div>
                                <h4>Easy Payments</h4>
                                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                            </div>
                        </div>

                        <div className="feature-grid-test">
                            <img className="feature-icon" src={Feature2} alt="TODO"/>
                            <div>
                                <h4>Data Security</h4>
                                <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non. </p>
                            </div>
                        </div>


                        <div className="feature-grid-test">
                            <img className="feature-icon" src={Feature3} alt="TODO"/>
                            <div>
                                <h4>Cost Statistics</h4>
                                <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                            </div>
                        </div>

                        <div className="feature-grid-test">
                            <img className="feature-icon" src={Feature4} alt="TODO"/>
                            <div>
                                <h4>Support 24/7</h4>
                                <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                            </div>
                        </div>

                        <div className="feature-grid-test">
                            <img className="feature-icon" src={Feature5} alt="TODO"/>
                            <div>
                                <h4>Regular Cashback</h4>
                                <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet
                                    eleifend.</p>
                            </div>
                        </div>

                        <div className="feature-grid-test">
                            <img className="feature-icon" src={Feature6} alt="TODO"/>
                            <div>
                                <h4>Top standards</h4>
                                <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis
                                    dolor
                                    arcu.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default AppFeatures
