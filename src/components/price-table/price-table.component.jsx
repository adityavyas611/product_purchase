import React from "react";
import "./price-table.style.css";

const PriceTable = ({ quantity, productName, companyName }) => {

    /**
     * @description - To Calculate the price based on the selected company, product and quantity by user
     */
    const getPrice = () => {
        if (companyName === 'cellManager' && productName === 'microStation') {
            return 956 * Math.pow(quantity,0.6) + 540;
        } else if (companyName === 'microsoftImporter' && (productName === 'microStation' || productName === 'revit')) {
            return 707 * Math.pow(quantity,0.7) + 88;
        } else if (companyName === 'microsoftImporter' && productName === 'autodesk') {
            return 354 * Math.pow(quantity,0.7) + 44;
        }
    };

    const price = getPrice();

    return (
        <div>
            <table className="priceTable">
                <thead>
                    <tr>
                        <th className="borderTable">Price x {quantity}</th>
                        <th className="borderTable">Maintenance Price</th>
                        <th className="borderTable">Total Price</th>
                    </tr>
                </thead>
                <tbody className="tablebody">
                    <tr>
                        <td className="borderTable">${price.toFixed(2)}</td>
                        <td className="borderTable">${(price * 0.3).toFixed(2)}</td>
                        <td className="borderTable">${(price + (price * 0.3)).toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
export default PriceTable;
