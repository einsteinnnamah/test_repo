import "./style.scss";
import React from "react";
const AuthTemplate = ({ children }) => {
  return (
    <div className="pd_auth_template">
      <div className="left_container">
        <div className="center_container">{children}</div>
      </div>
      <div className="right_container">
        <div className="overlay">
          <p>
              Make Money, <br/> &nbsp;&nbsp; Send Money
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthTemplate;
