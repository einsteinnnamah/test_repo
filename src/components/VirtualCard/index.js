import Feature from "components/Reusable/Feature";
import GetStartedBtn from "components/Reusable/GetStartedBtn";
import React, { useState } from "react";
import virtualcard from "../../assets/drawables/virtualcard.svg";
import "./index.css";

const VirtualCard = () => {
  return (
    <div className="virtual">
      <div className="virtual-left">
        <img src={virtualcard} alt="virtual-card" className="virtual-card" />
      </div>
      <div className="virtual-right">
        <h3>Get a virtual card for your transactions</h3>
        <div className="virtual-content">
          <div className="text-left">
            <p>
              Pay online securely with <br /> instant notifications.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor{" "}
            </p>
          </div>
          <div className="text-right">
            <p>
              Always pay in the local <br /> currency.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor{" "}
            </p>
          </div>
        </div>
        <div className="virtual-btns">
          <GetStartedBtn />
          <button className="watch-btn">Watch how it works</button>
        </div>
      </div>
    </div>
  );
};

export default VirtualCard;
