import React from 'react';
import './header.style.css';

const Header = ({ title, updateStep, step }) => {
    // changing progress class based on the steps
    const progressClass = `progressbar${step}`;

    return (
        <div>
            <div className="header">
                {title} 
            </div>
            <div className={progressClass}></div>
            {updateStep ? // if updateStep prop is passed to header, then render the back button.
                <div>
                    <img className="backButton" src="./images/back.svg" alt="BackButton" height="50px" width="50px" onClick={() => updateStep("decrement")} />
                </div>
                : null}
        </div>
    );
};
export default Header;
