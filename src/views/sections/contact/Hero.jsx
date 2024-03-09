import React, {useState, useEffect} from 'react'
import ArrowButton from '../../../images/contact/arrow-btn.svg'
import AddGroup from '../../../images/contact/add-group.svg'
import Envelope from '../../../images/contact/bx-envelope.svg'

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
                    <input className="contact-text-field" type="text"/>

                    <p>Email address</p>
                    <input className="contact-text-field" type="text"/>

                    <p>Specialist</p>
                    <select value={selectedSpecialist} onChange={handleSpecialistChange}>
                        <option value="">Select a specialist</option>
                        {specialists.map((specialist) => (
                            <option key={specialist.id} value={specialist.id}>
                                {specialist.firstName} {specialist.lastName}
                            </option>
                        ))}
                    </select>
                    <div id="result">{result}</div>

                    <p>Date</p>
                    <input className="contact-time-field" type="date"/>

                    <p>Time</p>
                    <input className="contact-time-field" type="time"/>

                    <button className="primary-button"><span>Make an appointment</span></button>
                </div>

            </div>

        </div>
    )
}
export default Hero
