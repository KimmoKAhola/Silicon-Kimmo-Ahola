import React from 'react'
import Notification from '../../../images/subscribe/notification.svg'
import Post from '../../../images/icons/post.svg'
import SubscriberButton from "../global/SubscriberButton.jsx";
const Subscribe = () => {
    return (
        <div className="container">
            <div className="testing">
                <div className="subscriber">
                    <div id="sub-left">
                        <img src={Notification} alt="TODO"/>
                        <h5>Subscribe to our newsletter to stay informed about latest updates</h5>
                    </div>
                    <SubscriberButton/>
                </div>
            </div>
        </div>
    )
}
export default Subscribe
