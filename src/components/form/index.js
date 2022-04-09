import React from "react";
import "./index.css";

const Form = () => {
    return (
        <form className="form">
            <h3>Send Money</h3>
            <div className="form-details">
                <div className="tender">
                    <div className="tender-left">
                        <p>Tender</p>
                        <p>20</p>
                    </div>
                    <div className="tender-right">
                        <select name="" id="">
                            <option value="">USD</option>
                        </select>
                    </div>
                </div>
                <div className="buy">
                    <div className="buy-left">
                        <p>Buy</p>
                        <p>12,000</p>
                    </div>
                    <div className="buy-right">
                        <select name="" id="">
                            <option value="">NGN</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="charges">
                <p>Processing Fee</p>
                <p>$20</p>
            </div>
            <div className="charges">
                <p>Exchange Rate</p>
                <p>$565</p>
            </div>
            <div className="charges">
                <p>Arrival time: </p>
                <p>⌛ ️20 mins</p>
            </div>
            <button>Get Started</button>
        </form>
    );
};

export default Form;
