import React, {useState} from 'react'

const FormInput = ({ id, label, type, name, value, regexPattern, onChange, required, errorMessage }) => {
    const [isValid, setIsValid] = useState(true);
    const handleChange = (e) => {
        const inputValue = e.target.value;
        const isValidInput = new RegExp(regexPattern).test(inputValue); // use this for displaying error messages after each keystroke
        setIsValid(isValidInput);
        onChange(e);
    };

    return (
        <div className="form-input">
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={handleChange}
                required={required}
                autoComplete="off"
            />
            {!isValid && <span id="contact-form-span">{errorMessage}</span>}
        </div>
    );
};
export default FormInput
