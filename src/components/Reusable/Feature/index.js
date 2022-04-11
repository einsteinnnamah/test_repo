import React from "react";
import "./index.css";
// import licencedkey from "../../../assets/drawables/licencedkey.png";
// import transferImg from "../../../assets/drawables/transferImg.png";

const Feature = ({
  title,
  subtitle,
  image1,
  image2,
  subheading1,
  subheading2,
  text1,
  text2,
}) => {
  return (
    <div className="feature">
      <div className="feature-heading">
        {/* <h3>Easily and quickly transfer money to anyone</h3> */}
        <h3>{title}</h3>
        {/* <p>Lorem, ipsum dolor sit amet consectet.</p> */}
        <p>{subtitle}</p>
      </div>
      <div className="feature-content">
        <div className="feature-content-left">
          {/* <img src={licencedkey} alt="" /> */}
          <img src={image1} alt="" />
          {/* <h5>Trusted & secure</h5> */}
          <h5>{subheading1}</h5>
          {/* <p>Fully licensed and regulated by the Central Bank of Ireland.</p> */}
          <p>{text1}</p>
          {/* <button>Get Started</button> */}
          {/* <button>{btnText1}</button> */}
        </div>
        <div className="feature-content-right">
          {/* <img src={transferImg} alt="" /> */}
          <img src={image2} alt="" />
          {/* <h5>Fast, reliable transfers</h5> */}
          <h5>{subheading2}</h5>
          {/* <p>Get same-day transfers on most major currencies.</p> */}
          <p>{text2}</p>
          {/* <button>Watch how it works</button> */}
          {/* <button>{btnText2}</button> */}
        </div>
      </div>
      <div className="feature-btns">
        <button>Get Started</button>
        <button>Watch how it works</button>
      </div>
    </div>
  );
};

export default Feature;
