import React from 'react'
import AppStore from "../../../images/appstore.svg";
import GooglePlay from "../../../images/googleplay.svg";

const StoreButtons = () => {
    return (
        <div className="store-buttons">
                <img src={AppStore} alt="TODO"/>
                <img src={GooglePlay} alt="TODO"/>
        </div>
    )
}
export default StoreButtons
