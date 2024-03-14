import React, {useState} from 'react'

const FormInput = ({ id, label, type, name, value, regexPattern, onChange, required, errorMessage, successMessage }) => {
    const [isValid, setIsValid] = useState(true);
    const handleChange = (e) => {
        const inputValue = e.target.value;
        const isValidInput = new RegExp(regexPattern).test(inputValue); // use this for displaying error messages after each keystroke
        setIsValid(isValidInput);
        onChange(e);
    };

    const inputClassName = isValid ? 'valid-input' : 'invalid-input';
    return (
        <div className="form-input">
            <label className="form-text-label" htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={handleChange}
                required={required}
                autoComplete="off"
                className={inputClassName}
            />
            {!isValid && <span className="contact-form-span">{errorMessage}</span>}
            {isValid && <span className="contact-form-span-success">{successMessage}</span>}
        </div>
    );
};
export default FormInput
