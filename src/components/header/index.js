import React from "react";
import Form from "../form";
import "./index.css";

const Header = () => {
    return (
        <div className="header">
            <div className="header-text">
                <h2>Make Money from the Money Transfer Market</h2>
            </div>
            <div className="header-form">
                <Form />
            </div>
        </div>
    );
};

export default Header;
