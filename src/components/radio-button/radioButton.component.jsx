import React from 'react';
import './radioButton.style.css';

const RadioButton = ({ options, updateProgress }) => {
    /**
    * @description - To handle the selected radio button and pass back the value of radio button
    * @param {*} e - this parameter will have the event triggered from radio button
    */ 
    const handleChange = (e) => {
        const { target: { value } } = e;
            updateProgress(value);
    }

    return (
        <div className="radioContainer">
            {
                // checking whether option has keys present, if not then render radio button as quantities else products or companies
                options.map((option, idx) => Object.keys(option).length ? (
                    <div key={idx}>
                        <label>
                            <input type="radio" name={option.name} value={option.name} className="radioButton" onChange={handleChange} />
                            <img src={option.img} alt={option.name} className="radioButtonImage" />
                        </label>
                    </div>
                ) : <label className="squareRadio" key={idx}>
                        <span className="textCenter">{option}</span>
                        <input type="radio" name="quantity" value={option} className="radioButton" onChange={handleChange} />
                    </label>)
            }
        </div>
    )
};

export default RadioButton;
