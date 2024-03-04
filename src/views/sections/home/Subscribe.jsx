import React from 'react'
import Notification from '../../../images/subscribe/notification.svg'
const Subscribe = () => {
    return (
        <div>
            <div>
                <img src={Notification} alt="TODO"/>
                <h3>Subscribe to our newsletter to stay informed about latest updates</h3>
            </div>
            <div>
                <p>Your email</p>
                <button>Subscribe</button>
            </div>
        </div>
    )
}
export default Subscribe
