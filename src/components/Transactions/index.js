import Feature from "components/Reusable/Feature";
import React, { useState } from "react";
import "./index.css";
import currency from "../../assets/drawables/currency.png";
import cash from "../../assets/drawables/cash.png";
import TransactionCard from "components/Reusable/TransactionCard";
import transusaflag from "../../assets/drawables/trans-usaflag.png";
import eurflag from "../../assets/drawables/eurflag.png";
import CurrencyPairCards from '../../assets/drawables/landing_currency_pair_cards.svg'

const Transactions = () => {
  const [showBtn, setShowBtn] = useState(true);

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
          showBtn
        />
      </div>
      <div className="transactions-right">
          <img src={CurrencyPairCards} alt="currency pairs" />
      </div>
    </div>
  );
};

export default Transactions;
