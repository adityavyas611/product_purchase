import React, { useState } from 'react';
import './inputBox.style.css';

const InputBox = ({ onInputValueChange }) => {
    const [minQuantityValue, setMinQuantityValue] = useState(''); // To set the minimumQuantity value for input

    /**
     * @description - To handle the minimum quantity for input, for e.g if user input value
     * less than 6, then set minimum quantity as 6 
     * @param {*} e - this parameter will have the event triggered from input
     */

    const handleQuantityChange = (e) => {
        const { target: { value } } = e;
        // checking if value and value is less than 6, the set quantity as 6.
        if (value && value < 6) {
            setMinQuantityValue(6);
        } else {
            setMinQuantityValue(value);
        }
        onInputValueChange(value);
    };

    return (
        <div className="inputContainer">
            <input type="number" name="userQuantityInput" min="6" value={minQuantityValue} onChange={handleQuantityChange} placeholder="Use if > 5 seats" />
        </div>
    );
};

export default InputBox;
