import React from 'react'
import Notification from '../../../images/icons/notification.svg'
import SubscriberButton from "../global/SubscriberButton.jsx";
const Subscribe = () => {
    return (
        <div className="container">
            <div className="testing">
                <div className="subscriber">
                    <div id="sub-left">
                        <img id="subscriber-bell-icon" src={Notification} alt="TODO"/>
                        <h5>Subscribe to our newsletter to stay informed about latest updates</h5>
                    </div>
                    <SubscriberButton value="Subscribe"/>
                </div>
            </div>
        </div>
    )
}
export default Subscribe
