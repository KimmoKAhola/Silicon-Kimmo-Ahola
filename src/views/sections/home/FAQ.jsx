import React from 'react'
import Accordion from "./Accordion.jsx";
import Phone from '../../../images/icons/faq-phone.svg'
import ChatBubble from '../../../images/icons/faq-chat-bubble.svg'

const Faq = () => {
    return (
        <div className="container">
            <div id="faq-container">
                <div>
                    <h2>Any questions? Check out the FAQs</h2>
                    <p>Still have unanswered questions and need to get in touch?</p>

                    <div id="cards">
                        <div className="faq-card">
                            <img src={Phone} alt="TODO"/>
                            <p>Still have questions?</p>
                            <a href="#">Contact us</a>
                        </div>

                        <div className="faq-card">
                            <img src={ChatBubble} alt="TODO"/>
                            <p>Don't like phone calls?</p>
                            <a href="#">Contact us</a>
                        </div>
                    </div>
                </div>
                <Accordion/>
            </div>
        </div>
    )
}
export default Faq
