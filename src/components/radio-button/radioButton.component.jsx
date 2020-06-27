import React from 'react';
import './radioButton.style.css';

const RadioButton = ({ options, updateProgress }) => {
    const handleChange = (e) => {
        const { target: { name, value } } = e;
        if (name === 'seats') {
            updateProgress(value);
        } else {
            updateProgress(name);
        }
    }

    return (
        <div className="radioContainer">
            {
                options.map((option, idx) => Object.keys(option).length ? (
                    <div key={idx}>
                        <label>
                            <input type="radio" name={option.name} value={option.name} className="radioButton" onChange={handleChange} />
                            <img src={option.img} alt={option.name} className="radioButtonImage" />
                        </label>
                    </div>
                ) : <label className="squareRadio" key={idx}>
                        <span className="textCenter">{option}</span>
                        <input type="radio" name="seats" value={option} className="radioButton" onChange={handleChange} />
                    </label>)
            }
        </div>
    )
};

export default RadioButton;