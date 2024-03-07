import React from 'react'
import Post from "../../../images/icons/post.svg";

const SubscriberButton = () => {
    return (
        <div id="sub-right">
            <div className="subscriber-form">
                <input type="text" placeholder="Your Email"/>
                <img src={Post} className="icon" alt=""/>
            </div>
            <button className="footer-button"><span>Subscribe</span></button>
        </div>
    )
}
export default SubscriberButton
