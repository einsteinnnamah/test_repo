import React from "react";
import "./index.css";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const BottomNav = () => {
    return (
        <div className="bottomnav">
            <div className="bottomnav-item">
                <p>USD</p>
                <ArrowDropDownIcon className="redicon" />
                <p>1.47%</p>
            </div>
            <div className="bottomnav-item">
                <p>NGN</p>
                <ArrowDropUpIcon className="greenicon" />
                <p>1.47%</p>
            </div>
            <div className="bottomnav-item">
                <p>CAD</p>
                <ArrowDropDownIcon className="redicon" />
                <p>1.47%</p>
            </div>
            <div className="bottomnav-item">
                <p>YEN</p>
                <ArrowDropUpIcon className="greenicon" />
                <p>1.47%</p>
            </div>
            <div className="bottomnav-item">
                <p>EUR</p>
                <ArrowDropDownIcon className="redicon" />
                <p>1.47%</p>
            </div>
            <div className="bottomnav-item">
                <p>AUD</p>
                <ArrowDropUpIcon className="greenicon" />
                <p>1.47%</p>
            </div>
            <div className="bottomnav-item">
                <p>CHF</p>
                <ArrowDropDownIcon className="redicon" />
                <p>1.47%</p>
            </div>
            <div className="bottomnav-item">
                <p>ALL</p>
                <ArrowDropUpIcon className="greenicon" />
                <p>1.47%</p>
            </div>
            <div className="bottomnav-item">
                <p>BRL</p>
                <ArrowDropDownIcon className="redicon" />
                <p>1.47%</p>
            </div>
            <div className="bottomnav-item">
                <p>CRC</p>
                <ArrowDropUpIcon className="greenicon" />
                <p>1.47%</p>
            </div>
            <div className="bottomnav-item">
                <p>ENR</p>
                <ArrowDropDownIcon className="redicon" />
                <p>1.47%</p>
            </div>
        </div>
    );
};

export default BottomNav;
