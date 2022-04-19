import React from "react";
import Card from "../Card";
import "./index.css";
import usaflag from "../../assets/drawables/usaflag.png";
import nigflag from "../../assets/drawables/nigflag.png";
import cadflag from "../../assets/drawables/cadflag.png";

const cardData = [
  {
    id: 1,
    image: usaflag,
    text: "USD. Dollar Backed Security",
    currency: "USD",
    currency_value: "219.09",
    change_type: 'positive',
    change_value: 1.47
  },
  {
    id: 2,
    image: nigflag,
    text: "NGN. Naira Backed Security",
    currency: "USD",
    currency_value: "219.09",
    change_type: 'negative',
    change_value: 10.98
  },
  {
    id: 3,
    image: cadflag,
    text: "CAD. Dollar Backed Security",
    currency: "CAD",
    currency_value: "219.09",
    change_type: 'positive',
    change_value: 50
  },
];

const Market = () => {
  return (
    <div className="market">
      <div className="market-title">
        <h4>Market Highlights</h4>
        <p>Get insight on how world currencies are performing</p>
      </div>
      <div className="market-topic">
        <div className="market-topic-btns">
          <button className="btn1">Top Risers</button>
          <button className="btn">Top Fallers</button>
          <button className="btn">Volume Leaders</button>
        </div>
        <p>View More</p>
      </div>
      <div className="market-cards">
        {cardData.map((item) => (
          <Card
            {...item}
            key={item.id}
          />
        ))}
        {/* <Card />
        <Card />
        <Card /> */}
      </div>
    </div>
  );
};

export default Market;
