import React from "react";
import GetStartedBtn from "../GetStartedBtn";
import "./index.css";

const InvestmentFeature = ({ title, text }) => {
  return (
    <div className="investment-content">
      <h4>{title}</h4>
      <p>{text}</p>
      <GetStartedBtn btnText="Get Started" />
    </div>
  );
};

export default InvestmentFeature;
