import React from "react";
// import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import usaflag from "../../assets/drawables/usaflag.png";
import "./index.css";

const Card = () => {
    return (
        <div className="card">
            <div className="card-title">
                <img src={usaflag} alt=""/>
                <p>
                    {/* <img src={usaflag} alt="" /> */}
                    USD. Dollar Backed Security
                </p>
            </div>
            <div className="card-price">
                <h5>USD 219.09</h5>
                <div className="card-rate">
                    <ArrowDropDownIcon className="redicon"/>
                    <p>1.47%</p>
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
    );
};

export default Card;
