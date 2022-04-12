import { Link } from "react-router-dom";
import "./style.scss";
import OtpInput from "react-otp-input";
import { useState } from "react";
const Otp = () => {
  const [otp, setOtp] = useState("");

  const handleChange = (otp) => {
    setOtp(otp);
  };
  return (
    <div className="pd_verify_phone pd_otp">
      <div className="center_container">
        <p className="header_text">Enter Code</p>
        <p className="sub_header_text">
          A 5-digit code has been sent to +234808********90
        </p>
        <div className="otp_wrap">
          <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={5}
            separator={<span> </span>}
          />
        </div>

        <button className="resend_btn">Resend</button>
        <Link className="later_link" to="/">
          I will do this later
        </Link>
      </div>
    </div>
  );
};

export default Otp;
