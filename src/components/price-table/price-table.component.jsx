import React from "react";
import "./price-table.style.css";

const PriceTable = ({ seat, product, company }) => {
    const getPrice = () => {
        if (company === 'cellManager') {
            return 956 * Math.pow(seat,0.6) + 540;
        } else if (company === 'microsoftImporter' && (product === 'microStation' || product === 'revit')) {
            return 707 * Math.pow(seat,0.7) + 88;
        } else {
            return 354 * Math.pow(seat,0.7) + 44;
        }
    };

    const price = getPrice();

    return (
        <div>
            <table className="priceTable">
                <thead>
                    <tr>
                        <th className="borderTable">Price x {seat}</th>
                        <th className="borderTable">Service Price</th>
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
