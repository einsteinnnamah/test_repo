import InvestmentFeature from "components/Reusable/InvestmentFeature";
import React from "react";
import "./index.css";
import investImg from "../../assets/drawables/invest.svg";
import growthImg from "../../assets/drawables/growthprofit.svg";

const Investment = () => {
  return (
    <div className="investment">
      <h3>
        Trade securely and earn in the currency <br /> backed securities Market
      </h3>
      <div className="invest-smart">
        <div className="invest-smart-left">
          <InvestmentFeature
            title="Invest Smart"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
          />
        </div>
        <div className="invest-smart-right">
          <img src={investImg} alt="invest" />
        </div>
      </div>
      <div className="invest-track">
        <div className="invest-track-left">
          <img src={growthImg} alt="growth" />
        </div>
        <div className="invest-track-right">
          <InvestmentFeature
            title="Track your investment"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
          />
        </div>
      </div>
    </div>
  );
};

export default Investment;
