import React from 'react'
import Mobile from '../../images/showcase-mobiles.svg';

const Showcase = () => {
    return (
        <div>
            <p>Manage All Your Money in One App</p>
            <p>We offer you a new generation of the mobile banking.</p>
            <p>Save, spend & manage money in your pocket.</p>
            
            <button>Download app store</button>
            <button>Download google play</button>
            
            <button>Discover more</button>

            <img src={Mobile} alt="showcase"/>
        </div>
    )
}
export default Showcase
