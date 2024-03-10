import React, {useState} from 'react'
import Post from "../../../images/icons/post.svg";
import Modal from '../global/Modal.jsx'

const SubscriberButton = () => {
    const [email, setEmail] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("button clicked")

        try {
            const response = await fetch(
                `https://kyhnet23-assignment.azurewebsites.net/api/subscribe?email=${email}`,
                {
                method: 'POST',
            });

            if (!response.ok) {
                console.log("fel")
            } if (response.ok){
                setShowModal(true);
                setEmail('')
            }
        } catch (error) {
            console.error("error: ", error);
        }
    }

    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <div id="sub-right">
            <form className="subscriber-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <img src={Post} className="icon" alt=""/>
                <button className="footer-button" type="submit"><span>Subscribe</span></button>
            </form>

            {showModal && (
                <Modal onClose={closeModal}>
                    <p className="text-xl">You have been successfully subscribed!</p>
                    <button className="primary-button" onClick={closeModal}>Close</button>
                </Modal>
            )}
        </div>
    )
}
export default SubscriberButton
