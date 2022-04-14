import React from "react";
import "./index.css";
import facebookImg from "../../assets/drawables/facebookImg.svg";
import instagram from "../../assets/drawables/instagram.svg";
import twitter from "../../assets/drawables/twitter.svg";
import linkedIn from "../../assets/drawables/linkedIn.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-links">
          <h4>Quick Links</h4>
          <p>Markets</p>
          <p>How it works</p>
        </div>
        <div className="footer-links">
          <h4>Company</h4>
          <p>About</p>
        </div>
        <div className="footer-links">
          <h4>Legal</h4>
          <p>Terms and conditions</p>
          <p>Privacy policy</p>
        </div>
        <div className="footer-links">
          <h4>Socials</h4>
          <div className="footer-social-links">
            <img src={facebookImg} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
            <img src={linkedIn} alt="linkedIn" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>©2022 ICE Bank. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
