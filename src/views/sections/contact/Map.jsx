import React from 'react'
import MapSymbol from '../../../images/contact/bx-map.svg'
import Phone from '../../../images/contact/bx-phone-call.svg'
import Clock from '../../../images/contact/bx-time-five.svg'
import Socials from "../global/Socials.jsx";

const Map = () => {
    return (
        <div className="container">
            <div id="map">

            </div>
            <div id="contact-addresses">
                <div>
                    <ul>
                        <h3>Medical Center 1</h3>
                        <li>
                            <img src={MapSymbol} alt="TODO"/>
                            <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                        </li>
                        <li>
                            <img src={Phone} alt="TODO"/>
                            <p>(406) 555-0120</p>
                        </li>
                        <li>
                            <ul>
                                <li>
                                    <img src={Clock} alt="TODO"/>
                                    <p>Mon-Fri: 9:00 am - 22:00 am</p>
                                </li>
                                <li>Sat-Sun: 9:00 am - 20:00 am</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <h3>Medical Center 2</h3>
                        <li>
                            <img src={MapSymbol} alt="TODO"/>
                            <p>2464 Royal Ln. Mesa, New Jersey 45463</p>
                        </li>
                        <li>
                            <img src={Phone} alt="TODO"/>
                            <p>(406) 555-0123</p>
                        </li>
                        <li>
                            <ul>
                                <li>
                                    <img src={Clock} alt="TODO"/>
                                    <p>Mon-Fri: 9:00 am - 22:00 am</p>
                                </li>
                                <li>Sat-Sun: 9:00 am - 20:00 am</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <Socials/>
            </div>
        </div>
    )
}
export default Map