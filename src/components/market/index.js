import React from "react";
import Card from "../Card";
import "./index.css";

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
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};

export default Market;
