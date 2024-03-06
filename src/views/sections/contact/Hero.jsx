import React from 'react'
import ArrowButton from '../../../images/contact/arrow-btn.svg'
import AddGroup from '../../../images/contact/add-group.svg'
import Envelope from '../../../images/contact/bx-envelope.svg'

const Hero = () => {
    return (
        <div className="container">
            <div className="hero">
                <div className="contact-info">
                    <h1>Contact Us</h1>

                    <div id="email-us"><h2>Email us</h2>
                        <div className="section">
                            <img src={Envelope} alt="TODO"/>
                            <div>
                                <p>Please feel free to drop us a line. We will respond as soon as possible</p>
                                <a href="#">Leave a message</a>
                                <button className="arrow-button"><img src={ArrowButton} alt="TODO"/></button>
                            </div>
                        </div>
                    </div>

                    <div id="careers"><h2>Careers</h2>
                        <div className="section">
                            <img src={AddGroup} alt="TODO"/>
                            <div>
                                <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
                                <a href="#">Send an application</a>
                                <button className="arrow-button"><img src={ArrowButton} alt="TODO"/></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form">
                    <h2>Get Online Consultation</h2>
                    <p>Full name</p>
                    <input type="text"/>

                    <p>Email address</p>
                    <input type="text"/>

                    <p>Specialist</p>
                    <input type="text"/>

                    <p>Date</p>
                    <input type="text"/>

                    <p>Time</p>
                    <input type="text"/>

                    <button className="primary-button"><span>Make an appointment</span></button>
                </div>

            </div>

        </div>
    )
}
export default Hero
