import CurrencyDrop from "components/currencyDrop";
import React, { useState } from "react";
import convert from "../../assets/drawables/convert2.svg";
import nig from "../../assets/drawables/nigeria.svg";

import Form from "../form";
import "./index.css";
import "./style.scss";
import pro from "../../assets/drawables/pro.svg";
import ech from "../../assets/drawables/ech.svg";
import union from "../../assets/drawables/Union2.svg";
import arr from "../../assets/drawables/arr.svg";
import SubmitBtn from "components/SubmitBtn/SubmitBtn";
const Header = () => {
  const [tender, setTender] = useState();
  const [buy, setBuy] = useState();
  return (
    <div className="header">
      <div className="header-text">
        <h2 id={"header-text-main"}>
          Make Money, <br/> &nbsp;&nbsp; Send Money
        </h2>
      </div>
      <div className="header-form">
        {/* <Form /> */}
        <div className="convBox">
          <p className="title">Send Money</p>
          <div className="changeBox">
            <div className="conv">
              <img src={convert} alt="convert" />
            </div>
            <div className="top hard">
              <div className="left">
                <p className="changeText">Tender</p>
                <p className="number">20</p>
              </div>
              <div className="right">
                <CurrencyDrop
                  handleCurrency={(val) => {
                    setTender(val);
                  }}
                  defaultCurrency={{ flag: nig, code: "NGN" }}
                />
              </div>
            </div>
            <div className="top">
              <div className="left">
                <p className="changeText">Buy</p>
                <p className="number">20</p>
              </div>
              <div className="right">
                <CurrencyDrop
                  handleCurrency={(val) => {
                    setBuy(val);
                  }}
                  defaultCurrency={{ flag: nig, code: "NGN" }}
                />
              </div>
            </div>
          </div>
          <div className="pro">
            <div className="eachPro">
              <div className="left">
                <img src={pro} alt="pro" />
                <p>Processing Fee</p>
              </div>
              <div className="right">
                <p>$20</p>
              </div>
            </div>
            <div className="eachPro">
              <div className="left">
                <img src={ech} alt="pro" />
                <p>Exchange Rate</p>
              </div>
              <div className="right">
                <img src={union} alt="union" />
                <p>$20</p>
              </div>
            </div>
            <div className="eachPro">
              <div className="left">
                <img src={arr} alt="pro" />
                <p>Arrival time</p>
              </div>
              <div className="right">
                <p className="blue">⌛ ️20 mins</p>
              </div>
            </div>
          </div>
          <SubmitBtn className="green" btnText="Get Started" />
        </div>
      </div>
    </div>
  );
};

export default Header;
