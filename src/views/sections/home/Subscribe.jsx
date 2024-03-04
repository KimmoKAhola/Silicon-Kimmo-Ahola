import React from 'react'
import Notification from '../../../images/subscribe/notification.svg'
const Subscribe = () => {
    return (
        <div className="subscriber">
            <div id="sub-left">
                <img src={Notification} alt="TODO"/>
                <h4>Subscribe to our newsletter to stay informed about latest updates</h4>
            </div>
            <div id="sub-right">
                <input type="text"/>
                <button>Subscribe</button>
            </div>
        </div>
    )
}
export default Subscribe
