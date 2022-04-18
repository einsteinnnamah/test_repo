import React, { useState } from "react";
import "./index.css";
import currconvert from "../../assets/drawables/currconvert.svg";
import nigeria from "../../assets/drawables/nigeria.svg";
import CurrencyDrop from "components/currencyDrop";

const Form = () => {
  const [tender, setTender] = useState("");
  const [buy, setBuy] = useState("");

  return (
    <form className="form">
      <h3>Send Money</h3>
      <div className="form-details">
        <div className="currconvert">
          <img src={currconvert} alt="convert" />
        </div>
        <div className="tender">
          <div className="tender-left">
            <p>Tender</p>
            <p>20</p>
          </div>
          <div className="tender-right">
            {/* <select name="" id="">
              <option value="">USD</option>
            </select> */}
            <CurrencyDrop
              handleCurrency={(val) => {
                setTender(val);
              }}
              defaultCurrency={{ flag: nigeria, code: "NGN" }}
            />
          </div>
        </div>
        <div className="buy">
          <div className="buy-left">
            <p>Buy</p>
            <p>12,000</p>
          </div>
          <div className="buy-right">
            {/* <select name="" id="">
              <option value="">NGN</option>
            </select> */}
            <CurrencyDrop
              handleCurrency={(val) => {
                setBuy(val);
              }}
              defaultCurrency={{ flag: nigeria, code: "NGN" }}
            />
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
