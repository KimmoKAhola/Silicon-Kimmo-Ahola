import React from 'react'
import Quotes from '../../../images/testimonials/quotes.png'
import Author1 from '../../../images/testimonials/fannie-summers.png'
import Author2 from '../../../images/testimonials/albert-flores.png'
import Stars1 from '../../../images/testimonials/rating-1.png'
import Stars2 from '../../../images/testimonials/rating-2.png'

const Testimonials = () => {
    return (
        <div id="testimonials-bg">
            <div className="container">
                <div id="testimonials">
                    <h2>Clients are Loving Our App</h2>
                    <Card/>
                </div>
            </div>
        </div>
    )
}

const Card = () => {
    return (
        <div id="card">
            <div className="testimonial-card">
                <img src={Quotes} alt="TODO"/>
                <img src={Stars1} alt="TODO"/>
                <p>Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis.
                Laoreet
                posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo
                turpis
                sit amet.</p>
                <div className="testimonial-author">
                    <img src={Author1} alt="TODO"/>
                    <h3>Fannie Summers</h3>
                    <h4>Designer</h4>
                </div>
            </div>
            <div className="testimonial-card">
                <img src={Quotes} alt="TODO"/>
                <img src={Stars2} alt="TODO"/>
                <p>Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet
                    porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor
                    tincidunt egestas eget nunc.</p>
                <div className="testimonial-author">
                    <img src={Author2} alt="TODO"/>
                    <h3>Albert Flores</h3>
                    <h4>Developer</h4>
                </div>
            </div>

        </div>
    )
}
export default Testimonials
