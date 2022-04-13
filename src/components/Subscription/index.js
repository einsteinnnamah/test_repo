import GetStartedBtn from "components/Reusable/GetStartedBtn";
import React from "react";
import "./index.css";

const Subscription = () => {
  return (
    <div className="subscription">
      <div className="subscription-content">
        <div className="subscripton-left">
          <h4>Start making money</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do eiusmod tempor incidi
          </p>
        </div>
        <div className="subscripton-right">
          <input type="text" placeholder="Enter your email" />
          <GetStartedBtn btnText="Get Started" />
        </div>
      </div>
    </div>
  );
};

export default Subscription;
