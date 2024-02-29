import React from 'react'
import Brand1 from '../../images/brands/brand_1.svg'
import Brand2 from '../../images/brands/brand_2.svg'
import Brand3 from '../../images/brands/brand_3.svg'
import Brand4 from '../../images/brands/brand_4.svg'
import Brand5 from '../../images/brands/brand_5.svg'
import Brand6 from '../../images/brands/brand_6.svg'

const Brands = () => {
    return (
        <div id="brand-logos">
            <img src={Brand1} alt="brand 1"/>
            <img src={Brand2} alt="brand 2"/>
            <img src={Brand3} alt="brand 3"/>
            <img src={Brand4} alt="brand 4"/>
            <img src={Brand5} alt="brand 5"/>
            <img src={Brand6} alt="brand 6"/>
        </div>
    )
}
export default Brands
