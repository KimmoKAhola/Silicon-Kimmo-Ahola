import React from 'react'
import Test from '../../../images/mobile-appfeatures.svg'
import Feature1 from '../../../images/icons/feature_1.svg'
import Feature2 from '../../../images/icons/feature_2.svg'
import Feature3 from '../../../images/icons/feature_3.svg'
import Feature4 from '../../../images/icons/feature_4.svg'
import Feature5 from '../../../images/icons/feature_5.svg'
import Feature6 from '../../../images/icons/feature_6.svg'

const AppFeatures = () => {
    return (
        <div className="container">

            <div id="container">
                <img src={Test} alt="TODO"/>

                <div id="feature-grid">

                    <div id="grid-left">
                        <h2>App Features</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas.
                            Nam
                            luctus
                            facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec
                            lacus.</p>
                    </div>

                    <div id="grid-right">
                        <div>
                            <h3>Easy Payments</h3>
                            <div>
                                <img src={Feature1} alt="TODO"/>
                                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                            </div>
                        </div>

                        <div>
                            <h3>Data Security</h3>

                            <div>
                                <img src={Feature2} alt="TODO"/>
                                <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non. </p>
                            </div>
                        </div>


                        <div>
                            <h3>Cost Statistics</h3>
                            <div>
                                <img src={Feature3} alt="TODO"/>
                                <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                            </div>
                        </div>

                        <div>
                            <h3>Support 24/7</h3>
                            <div>
                                <img src={Feature4} alt="TODO"/>
                                <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                            </div>
                        </div>

                        <div>
                            <h3>Regular Cashback</h3>
                            <div>
                                <img src={Feature5} alt="TODO"/>
                                <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet
                                    eleifend.</p>
                            </div>
                        </div>

                        <div>
                            <h3>Top standards</h3>
                            <div>
                                <img src={Feature6} alt="TODO"/>
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
