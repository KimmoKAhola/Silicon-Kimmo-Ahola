import React from 'react'
import Arrow from '../../../images/icons/down-arrow.svg'

const ArrowButton = ({direction}) => {
    let rotationDegrees = 0;
    switch (direction){
        case 'left':
            rotationDegrees = 90;
            break;
        case 'up':
            rotationDegrees = 180;
            break;
        case 'right':
            rotationDegrees = -90;
            break;
        case 'down':
            rotationDegrees = 0;
            break;

    }
    return (
        <div className="arrow-button">
            <button style={{transform: `rotate(${rotationDegrees}deg)`}}>
                <img src={Arrow} alt="TODO"/>
            </button>
        </div>
    )
}
export default ArrowButton
