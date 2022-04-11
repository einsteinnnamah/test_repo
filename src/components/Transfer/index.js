import React from "react";
import "./index.css";
import usaflag from "../../assets/drawables/usaflag.png";
import Arrow from "../../assets/drawables/Arrow1.png";
import nigflag from "../../assets/drawables/nigflag.png";
import DummyRectangle from "components/Reusable/DummyRectangle";
import Feature from "components/Reusable/Feature";
import licencedkey from "../../assets/drawables/licencedkey.png";
import transferImg from "../../assets/drawables/transferImg.png";
import transfer from "../../assets/drawables/transfer.png";

const Transfer = () => {
  return (
    <div className="transfer section__padding">
      <div className="transfer-left">
        {/* <div className="successful">
          <p>Successful</p>
        </div> */}
        <div className="transfer-card">
          <div className="countries">
            <img src={usaflag} alt="" />
            <img src={Arrow} alt="" />
            <img src={nigflag} alt="" />
          </div>
          <div className="transfer-details">
            <div className="details">
              <p>You are sending</p>
              <p>$20</p>
            </div>
            <div className="details">
              <p>Recipient will recieve</p>
              <p>₦8,311.20 </p>
            </div>
            <div className="details">
              <p>Exchange rate</p>
              <p>1 NGN = 564 USD</p>
            </div>
            <div className="details">
              <p>Processing fee</p>
              <p>$1.54</p>
            </div>
          </div>
          <div className="recipient">
            <DummyRectangle
              title="RECIPIENT"
              subheading="Bank Transfer"
              img={transfer}
            />
          </div>
          <div className="transfer-amount">
            <h5>Total: $21.54</h5>
          </div>
        </div>
      </div>
      <div className="transfer-right">
        <Feature
          title="Easily and quickly transfer money to anyone"
          image1={licencedkey}
          image2={transferImg}
          subheading1="Trusted & secure"
          subheading2="Fast, reliable transfers"
          text1="Fully licensed and regulated by the Central Bank of Ireland."
          text2="Get same-day transfers on most major currencies."
          // btnText1="Get Started"
          // btnText2="Watch how it works"
        />
      </div>
    </div>
  );
};

export default Transfer;
