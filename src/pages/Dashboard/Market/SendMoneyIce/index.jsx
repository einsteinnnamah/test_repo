import BackBtn from "components/BackBtn";
import SubmitBtn from "components/SubmitBtn/SubmitBtn";
import SupportBtn from "components/SupportBtn";
import house from "../../../../assets/drawables/house.svg";
import { Link } from "react-router-dom";
import NavCard from "../NavCard";
import "./style.scss";

import { useState } from "react";

const SendMoneyIce = () => {
  return (
    <div className="pd_set_bank send_ice">
      <NavCard active={"payment"} />
      <BackBtn />
      <SupportBtn className="down" />
      <div className="main_aspect">
        <div className="type_box">
          <div className="cover_house">
            <img src={house} alt="house" />
          </div>
          <p className="balance">Available Balance</p>
          <p className="amount">$120,345.20</p>
          <SubmitBtn className="green" btnText={"Pay $1,001.56"} />
          <Link to="/invest" className="pay_link">
            Use another method
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SendMoneyIce;
