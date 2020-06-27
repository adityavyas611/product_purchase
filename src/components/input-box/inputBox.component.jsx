import React, { useState } from 'react';
import './inputBox.style.css';

const InputBox = ({ onValueChange }) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        const { target: { value } } = e;
        if (value && value < 6) {
            setValue(6);
        } else {
            setValue(value);
        }
        onValueChange(value);
    };

    return (
        <div className="inputContainer">
            <input type="number" name="userQuantityInput" min="6" value={value} onChange={handleChange} placeholder="Use if > 5 seats" />
        </div>
    );
};

export default InputBox;
