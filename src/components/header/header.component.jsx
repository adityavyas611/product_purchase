import React from 'react';
import './header.style.css';

const Header = ({ title, updateStep, step }) => {
    const progressClass = `progressbar${step}`;

    return (
        <div>
            <div className="header">
                {title}
            </div>
            <div className={progressClass}></div>
            {updateStep ?
                <div>
                    <img className="backButton" src="./images/back.svg" alt="BackButton" height="50px" width="50px" onClick={() => updateStep("decrement")} />
                </div>
                : null}
        </div>
    );
};
export default Header;
