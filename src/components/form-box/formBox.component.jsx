import React, { useState } from 'react';
import './formBox.style.css';
import Header from "../header/header.component";
import RadioButton from '../radio-button/radioButton.component';
import InputBox from '../input-box/inputBox.component';
import PriceTable from '../price-table/price-table.component';
import { companies, products, defaultSeats } from '../../data';

const FormBox = () => {
    const [step, setStep] = useState(1);
    const [company, setCompany] = useState('');
    const [product, setProduct] = useState('');
    const [seats, setSeats] = useState(1);
    const [currentProducts, setCurrentProducts] = useState([]);

    const changeStep = (stepAction) => {
        if (stepAction === 'increment') {
            setStep((prev) => prev + 1);
        } else {
            setStep((prev) => prev - 1);
        }
    };

    const handleProductChange = (value) => {
        changeStep('increment');
        setProduct(value);
    };

    const handleCompanyChange = (value) => {
        changeStep('increment');
        setCompany(value);
        const filteredProducts = companies.filter(company => company.name === value)[0].products;
        setCurrentProducts(products.filter(product => filteredProducts.includes(product.name)));
    };

    const handleSeatChange = (value) => {
        setSeats(value);
    };

    return (
        <>
            {step === 1 ? (
                <>
                    <Header title="Select Company" step={step} />
                    <RadioButton options={companies} updateProgress={handleCompanyChange} />
                </>
            ) : null}
            {step === 2 ? (
                <>
                    <Header title="Select Product" updateStep={changeStep} step={step} />
                    <RadioButton options={currentProducts} updateProgress={handleProductChange} />
                </>
            ) : null}
            {step === 3 ? (
                <>
                    <Header title="Select Seats" updateStep={changeStep} step={step} />
                    <RadioButton options={defaultSeats} updateProgress={handleSeatChange} />
                    <InputBox onValueChange={handleSeatChange} />
                    <PriceTable seat={seats} company={company} product={product} />
                </>
            ) : null}
        </>
    );
};

export default FormBox;
