import React from "react";
import "./index.css";

const DummyRectangle = ({ title, subheading, img }) => {
  return (
    <div className="rectangle">
      <div className="rectangle-left">
        {/* <p>RECIPIENT</p> */}
        <p>{title}</p>
        <div className="rect-box long" />
        <div className="rect-box short" />
      </div>
      <div className="rectangle-right">
        {/* <p>Bank Transfer</p> */}
        <p>{subheading}</p>
        {/* <img src={transferImg} alt="" /> */}
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default DummyRectangle;
