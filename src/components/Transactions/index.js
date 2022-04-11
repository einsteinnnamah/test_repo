import Feature from "components/Reusable/Feature";
import React from "react";
import "./index.css";
import currency from "../../assets/drawables/currency.png";
import cash from "../../assets/drawables/cash.png";

const Transactions = () => {
  return (
    <div className="transactions">
      <div className="transactions-left">
        <Feature
          title="Free foreign accounts for all your international transactions"
          image1={currency}
          image2={cash}
          subheading1="Instant currency exchange"
          subheading2="Get paid by foreign employers and clients"
          text1="Enjoy quick and efficient online foreign exchange transactions. Say goodbye to bank queues and disappointments."
          text2="Use your account details to receive money and manage your earnings."
          //   btnText1="Get Started"
          //   btnText2="Watch how it works"
        />
      </div>
      <div className="transactions-right">
        <h1>hello</h1>
      </div>
    </div>
  );
};

export default Transactions;
