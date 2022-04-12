import Feature from "components/Reusable/Feature";
import React from "react";
import usaflag from "../../assets/drawables/usaflag.png";
import nigflag from "../../assets/drawables/nigflag.png";
import gbpflag from "../../assets/drawables/gbpflag.png";
import "./index.css";

const Referral = () => {
  return (
    <div className="referral">
      <div className="referral-left">
        <div className="referral-card">
          <h5>Referral</h5>
          <div className="referral-currency">
            <span>
              <img src={usaflag} alt="" />
              USD
            </span>
            <span>
              <img src={nigflag} alt="" />
              NGN
            </span>
            <span>
              <img src={gbpflag} alt="" />
              GBP
            </span>
          </div>
          <div className="referral-nums"></div>
        </div>
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
        />
      </div>
    </div>
  );
};

export default Referral;
