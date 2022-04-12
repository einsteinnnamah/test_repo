import React from "react";
import DummyRectangle from "../DummyRectangle";
import "./index.css";

const TransactionCard = ({ img, title, subtitle }) => {
  return (
    <div className="trans-card">
      <div className="trans-card-top">
        {/* <img src={transusaflag} alt="" /> */}
        <img src={img} alt="" />
        <div className="trans-card-text">
          {/* <p>USD</p> */}
          <p>{title}</p>
          {/* <p>UNITED STATES DOLLAR</p> */}
          <p>{subtitle}</p>
        </div>
      </div>
      <DummyRectangle title="YOUR ACCOUNT DETAILS" />
    </div>
  );
};

export default TransactionCard;
