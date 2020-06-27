import React from 'react';
import './form-container.style.css';
import FormBox from '../../components/form-box/formBox.component';

const FormContainer = () => (
        <div className="outerContainer">
            <div className="innerContainer">
                <FormBox/>
            </div>
        </div>
);

export default FormContainer;
