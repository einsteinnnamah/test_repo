import React from "react";
import "./index.css";
// import usaflag from "../../drawables/usaflag.png";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const TopNavbar = () => {
    return (
        <div className="topnav">
            <div className="topnav-left">
                <h6>Personal</h6>
                <div className="divider" />
                <h6>Business</h6>
            </div>
            <div className="topnav-right">
                <div className="topnav-links">
                    <p>How it works</p>
                    <p>Markets</p>
                    <p>Forex Trading</p>
                    <select name="" id="">
                        <option value="en-US">English</option>
                        <option value="fr">French</option>
                    </select>
                </div>
                <div className="topnav-login">
                    <p>Log In</p>
                    <button>Sign Up</button>
                </div>
                <div className="topnav-mode">
                    <ToggleOffIcon />
                    <DarkModeIcon />
                </div>
            </div>
        </div>
    );
};

export default TopNavbar;
