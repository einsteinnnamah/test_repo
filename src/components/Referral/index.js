import Feature from "components/Reusable/Feature";
import React, { useState } from "react";
import referralCard from "../../assets/drawables/referralCard.svg";
import "./index.css";

const Referral = () => {
  const [showBtn, setShowBtn] = useState(false);
  return (
    <div className="referral">
      <div className="referral-left">
        <img src={referralCard} alt="referral" />
      </div>
      <div className="referral-right">
        <Feature
          title="Get 5% of whatever your referral makes for the first 12 months"
          subtitle="*Terms & Conditions Apply"
          image1=""
          image2=""
          subheading1="Earn free Transfer"
          subheading2="Earn in different currencies"
          text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d"
          text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d"
          showBtn={showBtn}
        />
      </div>
    </div>
  );
};

export default Referral;
