import React from 'react'
import Accordion from "./Accordion.jsx";
import Phone from '../../../images/icons/faq-phone.svg'
import ChatBubble from '../../../images/icons/faq-chat-bubble.svg'
import RightArrow from '../../../images/icons/right-arrow.svg'
import RightArrowGreen from '../../../images/icons/right-arrow-green.svg'

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
                            <a id="call" href="#"><span>Contact us <img src={RightArrow} alt="TODO"/></span></a>
                        </div>

                        <div className="faq-card">
                            <img src={ChatBubble} alt="TODO"/>
                            <p>Don't like phone calls?</p>
                            <a id="chat" href="#"><span>Contact us <img src={RightArrowGreen} alt="TODO"/></span></a>
                        </div>
                    </div>
                </div>
                <Accordion/>
            </div>
        </div>
    )
}
export default Faq
