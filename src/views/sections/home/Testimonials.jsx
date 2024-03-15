import React from 'react'
import Quotes from '../../../images/icons/quotes.png'
import Author1 from '../../../images/blobs/fannie-summers.png'
import Author2 from '../../../images/blobs/albert-flores.png'
import Stars1 from '../../../images/icons/rating-1.png'
import Stars2 from '../../../images/icons/rating-2.png'
import ArrowButton from "../global/ArrowButton.jsx";

const Testimonials = () => {
    return (
        <div id="testimonials-bg">
            <div className="container">
                <div id="testimonials">
                    <div id="testimonials-left-column">
                        <h2>Clients are Loving Our App</h2>
                        <div id="testimonial-buttons">
                            <ArrowButton direction="left"/>
                            <ArrowButton direction="right"/>
                        </div>
                    </div>
                    <TestimonialCard/>
                </div>
            </div>
        </div>
    )
}

const TestimonialCard = () => {
    return (
        <div id="card">
            <div className="testimonial-card">
                <img className="card-quote-icon" src={Quotes} alt="TODO"/>
                <img src={Stars1} alt="TODO"/>
                <p className="text-lg">Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis.
                Laoreet
                posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo
                turpis
                sit amet.</p>
                <div className="testimonial-author">
                    <img src={Author1} alt="TODO"/>
                    <div>
                        <h6>Fannie Summers</h6>
                        <p className="text-s">Designer</p>
                    </div>
                </div>
            </div>


            <div className="testimonial-card">
                <img className="card-quote-icon" src={Quotes} alt="TODO"/>
                <img src={Stars2} alt="TODO"/>
                <p className="text-lg">Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet
                    porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor
                    tincidunt egestas eget nunc.</p>
                <div className="testimonial-author">
                    <img src={Author2} alt="TODO"/>
                    <div>
                        <h6>Albert Flores</h6>
                        <p className="text-s">Developer</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Testimonials
