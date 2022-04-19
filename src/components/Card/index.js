import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./index.css";
import greenArr from "../../assets/drawables/greenArrow.svg";
import redArr from "../../assets/drawables/redArrow.svg";

const Card = ({image, text, currency, currency_value, change_type, change_value}) => {
    const isPositiveChange = change_type === "positive"
    return (
        <div className="card">
            <div className="card-title">
                <img src={image} alt=""/>
                <p>{text}</p>
            </div>
            <div className="card-price">
                <div id="card-price-currency">
                    <span>{currency}</span><span>{currency_value}</span>
                </div>
                <div className="card-rate">
                    {isPositiveChange ?
                        <img src={greenArr} alt="green arrow" /> :
                        <img src={redArr} alt="red arrow" />
                    }
                    <p className={`change-type-${isPositiveChange ? "positive": "negative"}`}>
                        {isPositiveChange ? "+" : "-"}{change_value}%
                    </p>
                </div>
            </div>
            <div className="card-date">
                <p>Lasted updated January 9</p>
                <div className="card-track">
                    <p>Track</p>
                    <ArrowForwardIosIcon className="track-icon"/>
                </div>
            </div>
        </div>
    )
        ;
};

export default Card;
