import React, {useState, useEffect} from 'react'
// import ArrowButton from '../../../images/contact/arrow-btn.svg'
import AddGroup from '../../../images/contact/add-group.svg'
import Envelope from '../../../images/contact/bx-envelope.svg'
import RightArrow from '../../../images/icons/right-arrow.svg'
import FormInput from "./FormInput.jsx";
// import map from "./Map.jsx";
import Modal from "../global/Modal.jsx";

const Hero = () => {
    const [specialists, setSpecialists] = useState([]);
    const [selectedSpecialist, setSelectedSpecialist] = useState('');
    const apiEndPoint = 'https://kyhnet23-assignment.azurewebsites.net/api/specialists'
    const [showModal, setShowModal] = useState(false);
    const [test, setTest] = useState(false);

    const closeModal = () =>{
        setShowModal(false);
    }
    const [values, setValues] = useState({
        fullName: "",
        email: "",
        specialist: "",
        date: "",
        time: "",
    });

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


    const handleChange = (e) => {
        setTest(false);
        const { name, value } = e.target;
        setValues((prevData) => ({...prevData, [name]: value}));
    };

    const handleSpecialistChange = (e) => {
        const selectedSpecialistId = e.target.value;
        setValues(prevValues => ({
            ...prevValues,
            specialist: selectedSpecialistId
        }));
        setSelectedSpecialist(selectedSpecialistId);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("button clicked!")

        if (!values.specialist) {
            setTest(true); //date needs to contain a value, time too
            return;
        }

        try {

            const response = await fetch(
                'https://kyhnet23-assignment.azurewebsites.net/api/book-appointment',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        fullName: values.fullName,
                        email: values.email,
                        specialist: values.specialist,
                        date: values.date,
                        time: values.time,
                    })

                });
            if (response.ok) {
                console.log("response ok, values: ", values)
                setSelectedSpecialist('')
                setValues({
                    fullName: "",
                    email: "",
                    specialist: "",
                    date: "",
                    time: "",
                })
                setShowModal(true);
                console.log("values cleared? Values: ", values);
                setTest(false);
            } else {
                console.log("error: ", values)
            }

        } catch (error) {
            console.error("error: ", error);
        }
    }

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

                <form className="contact-form" onSubmit={handleSubmit}>
                    <h2>Get Online Consultation</h2>

                    <FormInput id="fullName"
                               type="text"
                               label="Full name"
                               name="fullName"
                               onChange={handleChange}
                               required="required"
                               errorMessage="Please enter your first and last name."
                               regexPattern="^(?!.*[.'-, ]{2})[a-zA-ZåäöÅÄÖ]{2,} [a-zA-ZåäöÅÄÖ. ',-]{1,}[a-zA-ZåäöÅÄÖ]$"/>

                    <FormInput id="email"
                               type="text"
                               label="Email"
                               name="email"
                               onChange={handleChange}
                               required="required"
                               errorMessage="Please enter a valid email."
                               regexPattern="^[a-öA-Ö0-9_.-]{2,}@[a-öA-Ö]{2,}\.[a-öA-Ö]{2,}$"/>


                    <div>
                        <p>Specialist</p>
                        <select className="contact-specialist-field" value={selectedSpecialist}
                                onChange={handleSpecialistChange}>
                            <option value=""></option>
                            {specialists.map((specialist) => (
                                <option key={specialist.id} value={specialist.id}>
                                    {specialist.firstName} {specialist.lastName}
                                </option>
                            ))}
                        </select>
                        {test && <span>ERROR FILL ME!</span>}
                    </div>
                    <div>
                        <FormInput id="date"
                                   type="date"
                                   label="date"
                                   name="date"
                                   onChange={handleChange}
                                   required="required"
                                   errorMessage="Please enter a valid date"/>
                        <FormInput id="time"
                                   type="time"
                                   label="time"
                                   name="time"
                                   onChange={handleChange}
                                   required="required"
                                   errorMessage="Please enter a valid time"/>
                    </div>

                    <button className="primary-button"><span>Make an appointment</span></button>
                </form>

                {showModal && (
                    <Modal onClose={closeModal}>
                        <p className="text-xl">Appointment booked!</p>
                        <button className="primary-button" onClick={closeModal}><span>Close</span></button>
                    </Modal>
                )}
            </div>

        </div>
    )
}
export default Hero
