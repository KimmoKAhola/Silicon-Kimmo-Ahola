import React from 'react'
import ArrowButton from '../../../images/contact/arrow-btn.svg'

const Hero = () => {
    return (
        <div>
            <div>
                <div className="contact-info">
                    <h1>Contact Us</h1>

                    <h2>Email us</h2>
                    <p>Please feel free to drop us a line. We will respond as soon as possible</p>
                    <a href="#">Leave a message</a>
                    <button className="arrow-button"><img src={ArrowButton} alt="TODO"/></button>

                    <h2>Careers</h2>
                    <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
                    <a href="#">Send an application</a>
                    <button className="arrow-button"><img src={ArrowButton} alt="TODO"/></button>
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

                    <button>Make an appointment</button>
                </div>

            </div>

        </div>
    )
}
export default Hero
