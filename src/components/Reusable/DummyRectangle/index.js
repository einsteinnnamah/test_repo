import React from "react";
import "./index.css";
import transferImg from "../../../assets/drawables/transfer.png";

const DummyRectangle = () => {
  return (
    <div className="rectangle">
      <div className="rectangle-left">
        <p>RECIPIENT</p>
        <div className="rect-box long" />
        <div className="rect-box short" />
      </div>
      <div className="rectangle-right">
        <p>Bank Transfer</p>
        <img src={transferImg} alt="" />
      </div>
    </div>
  );
};

export default DummyRectangle;
