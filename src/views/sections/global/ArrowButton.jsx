import React from 'react'
import Arrow from '../../../images/icons/down-arrow.svg'

const ArrowButton = () => {
    return (
        <div className="arrow-button">
            <button><img src={Arrow} alt="TODO"/></button>
        </div>
    )
}
export default ArrowButton
