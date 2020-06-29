import React, { useState } from 'react';
import './formBox.style.css';
import Header from "../header/header.component";
import RadioButton from '../radio-button/radioButton.component';
import InputBox from '../input-box/inputBox.component';
import PriceTable from '../price-table/price-table.component';
import { companies, products, defaultSeats } from '../../data';

const FormBox = () => {
    const [step, setStep] = useState(1); // To store the steps taken in form
    const [company, setCompany] = useState(''); // To store the company name
    const [product, setProduct] = useState(''); // To store the product name
    const [quantity, setQuantity] = useState(1); // To store the quantities of product
    const [currentProducts, setCurrentProducts] = useState([]); // To set the currentProducts based on company name
    
    /**
     * @description - To handle the steps in the form.
     * @param {*} stepAction will take 'increment' as parameter value to
     * move next step in the form else it will decrement the step
     * to go back in the previous form.
     */
    const changeStepForForm = (stepAction) => {
        if (stepAction === 'increment') {
            setStep((prev) => prev + 1);
        } else {
            setStep((prev) => prev - 1);
        }
    };

    /**
     * @description - To handle the next step of form and store product name
     * @param {*} productName - this parameter will have name of the product selected by user.
     */
    const handleProductChange = (productName) => {
        changeStepForForm('increment');
        setProduct(productName);
    };

    /**
     * @description - To handle the next step, filter products and store company name.
     * @param {*} companyName - this parameter will have the name of the company selected by user. 
     */

    const handleCompanyChange = (companyName) => {
        changeStepForForm('increment');
        setCompany(companyName);

        // fitering the companies array based on the user company selection and fetching products of the company.
        const filteredProducts = companies.filter(company => company.name === companyName)[0].products;

        // filtering the product array based on the products available for that company.
        setCurrentProducts(products.filter(product => filteredProducts.includes(product.name)));
    };

    /**
     * @description - To set the number of seats as selected by user through input or clickable buttons. 
     * @param {*} quantity - The number of quantity user wants to purchase. 
     */
    const handleQuantityChange = (quantity) => {
        setQuantity(quantity);
    };

    return (
        // Fragment to return multiple components
        <>
            {step === 1 ? (
                // If step === 1 then it should render the radio buttons with companies.
                <>
                    <Header title="Select Company" step={step} />
                    <RadioButton options={companies} updateProgress={handleCompanyChange} />
                </>
            ) : null}
            {step === 2 ? (
                // If step === 2 then it should render the radio buttons with products available for that company.
                <>
                    <Header title="Select Product" updateStep={changeStepForForm} step={step} />
                    <RadioButton options={currentProducts} updateProgress={handleProductChange} />
                </>
            ) : null}
            {step === 3 ? (
                /* If step === 3 then it should render the radio buttons with quantities, price table with price, maintainance price
                * and total price
                */ 
                <>
                    <Header title="Select Seats" updateStep={changeStepForForm} step={step} />
                    <RadioButton options={defaultSeats} updateProgress={handleQuantityChange} />
                    <InputBox onInputValueChange={handleQuantityChange} />
                    <PriceTable quantity={quantity} companyName={company} productName={product} />
                </>
            ) : null}
        </>
    );
};

export default FormBox;
