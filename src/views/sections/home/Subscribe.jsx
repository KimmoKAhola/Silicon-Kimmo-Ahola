import React from 'react'
import Notification from '../../../images/subscribe/notification.svg'
const Subscribe = () => {
    return (
        <div className="container">
            <div className="subscriber">
                <div id="sub-left">
                    <img src={Notification} alt="TODO"/>
                    <h5>Subscribe to our newsletter to stay informed about latest updates</h5>
                </div>
                <div id="sub-right">
                    <input type="text"/>
                    <button className="footer-button"><span>Subscribe</span></button>
                </div>
            </div>
        </div>
    )
}
export default Subscribe
