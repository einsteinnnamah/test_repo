import React, { useState } from "react";
import "./index.css";
import usaflag from "../../assets/drawables/usaflag.png";
import Arrow from "../../assets/drawables/Arrow1.png";
import nigflag from "../../assets/drawables/nigflag.png";
import DummyRectangle from "components/Reusable/DummyRectangle";
import Feature from "components/Reusable/Feature";
import licencedkey from "../../assets/drawables/licencedkey.png";
import transferImg from "../../assets/drawables/transferImg.png";
import transfer from "../../assets/drawables/transfer.png";
import TransferDemoCard from '../../assets/drawables/landing_page_transfer_demo.svg'

const Transfer = () => {
  // const [showBtn, setShowBtn] = useState(true);
  return (
    <div className="transfer">
      <div className="transfer-left">
        <img src={TransferDemoCard} alt={"Transfer Demo Card"} />
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
          showBtn
        />
      </div>
    </div>
  );
};

export default Transfer;
