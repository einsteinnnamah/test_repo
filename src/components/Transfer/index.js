import React from "react";
import "./index.css";
import usaflag from "../../assets/drawables/usaflag.png";
import Arrow from "../../assets/drawables/Arrow1.png";
import nigflag from "../../assets/drawables/nigflag.png";
import DummyRectangle from "components/Reusable/DummyRectangle";

const Transfer = () => {
  return (
    <div className="transfer">
      <div className="transfer-left">
        <div className="successful">
          <p>Successful</p>
        </div>
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
            <DummyRectangle />
          </div>
          <div className="transfer-amount">
            <h5>Total: $21.54</h5>
          </div>
        </div>
      </div>
      <div className="transfer-right">
        <h1>HEllo!!!!!!!!</h1>
      </div>
    </div>
  );
};

export default Transfer;
