import React, {useState} from 'react'

// const FormInput = ({id, label, type, name, value, regexPattern, onChange, required, errorMessage}) => {
//     const [focused, setFocused] = useState(false)
//
//     const handleFocus = (e) => {
//         setFocused(true);
//     }
//     return (
//         <div className="contact-form">
//             <label htmlFor={id}>{label}</label>
//             <input type={type} id={id} name={name} value={value} onChange={onChange} onBlur={handleFocus} required={required} pattern={regexPattern}/>
//             <span id="contact-form-span" style={{display: focused ? 'block' : 'none'}}>{errorMessage}</span>
//         </div>
//     )
// }

const FormInput = ({ id, label, type, name, value, regexPattern, onChange, required, errorMessage }) => {
    const [isValid, setIsValid] = useState(true);
    // const [focused, setFocused] = useState(false);
    const handleChange = (e) => {
        const inputValue = e.target.value;
        const isValidInput = new RegExp(regexPattern).test(inputValue);
        setIsValid(isValidInput);
        onChange(e);
    };

    // const handleFocus = () =>{
    //     setFocused(true);
    // }
    // const handleBlur = () =>{
    //     setFocused(false);
    // }

    return (
        <div className="contact-form">
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
