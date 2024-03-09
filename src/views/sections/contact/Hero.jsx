import React, {useState, useEffect} from 'react'
import ArrowButton from '../../../images/contact/arrow-btn.svg'
import AddGroup from '../../../images/contact/add-group.svg'
import Envelope from '../../../images/contact/bx-envelope.svg'
import RightArrow from '../../../images/icons/right-arrow.svg'

const Hero = () => {
    const [specialists, setSpecialists] = useState([]);
    const [selectedSpecialist, setSelectedSpecialist] = useState('');
    const [result, setResult] = useState('');
    const apiEndPoint = 'https://kyhnet23-assignment.azurewebsites.net/api/specialists'

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiEndPoint);
                const data = await response.json();
                setSpecialists(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleSpecialistChange = async (event) => {
        const specialist = event.target.value;
        setSelectedSpecialist(specialist);

        if (specialist) {
            try {
                const response = await fetch(apiEndPoint);
                const data = await response.json();
                setResult(JSON.stringify(data));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        } else {
            setResult('');
        }
    };

    return (
        <div className="container">
            <div className="hero">
                <div className="contact-info">
                    <h1>Contact Us</h1>

                    <div id="email-us">
                        <h2>Email us</h2>
                        <div className="section">
                            <img className="contact-icon" src={Envelope} alt="TODO"/>
                            <div>
                                <p>Please feel free to drop us a line. We will respond as soon as possible</p>
                                <a href="#">Leave a message <img src={RightArrow} alt="TODO"/></a>
                            </div>
                        </div>
                    </div>

                    <div id="careers">
                        <h2>Careers</h2>
                        <div className="section">
                            <img className="contact-icon" src={AddGroup} alt="TODO"/>
                            <div>
                                <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
                                <a href="#">Send an application <img src={RightArrow} alt="TODO"/></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form">
                    <h2>Get Online Consultation</h2>
                    <div>
                        <p>Full name</p>
                        <input className="contact-text-field" type="text"/>
                    </div>

                    <div>
                        <p>Email address</p>
                        <input className="contact-text-field" type="text"/>
                    </div>

                    <div>
                        <p>Specialist</p>
                        <select className="contact-specialist-field" value={selectedSpecialist}
                                onChange={handleSpecialistChange}>
                            <option value="">Select a specialist</option>
                            {specialists.map((specialist) => (
                                <option key={specialist.id} value={specialist.id}>
                                    {specialist.firstName} {specialist.lastName}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="contact-time">
                        <div>
                            <p>Date</p>
                            <input className="contact-time-field" type="date"/>
                        </div>

                        <div>
                            <p>Time</p>
                            <input className="contact-time-field" type="time"/>
                        </div>
                    </div>

                    <button className="primary-button"><span>Make an appointment</span></button>
                </div>

            </div>

        </div>
    )
}
export default Hero
