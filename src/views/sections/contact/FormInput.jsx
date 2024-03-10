import React from 'react'

const FormInput = ({id, label, type, name, value, onChange, required, errorMessage}) => {

    return (
        <div className="contact-form">
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} name={name} value={value} onChange={onChange} required={required}/>
            <span>{errorMessage}</span>
        </div>
    )
}
export default FormInput
