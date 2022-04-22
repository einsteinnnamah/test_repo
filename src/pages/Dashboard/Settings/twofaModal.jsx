import "./style.scss";
import guard from "../../../assets/drawables/guard.svg";
import OtpInput from "react-otp-input";
import { useState } from "react";
const TwoFaModal = ({ closeModal, setIsEnable }) => {
  const [otp, setOtp] = useState("");
  const handleChange = (otp) => {
    setOtp(otp);
  };
  return (
    <div className="pd_twofa_modal">
      <p className="enter">Enter Code</p>
      <p className="desc">A 6-digit code has been sent to +234808********90</p>
      <div className="otp_wrap">
        <OtpInput
          value={otp}
          onChange={handleChange}
          numInputs={6}
          separator={<span> </span>}
        />
      </div>
      <button className="resend">Resend code</button>
      <button onClick={setIsEnable} className="enable">
        <img src={guard} alt="guard" />
        Enable
      </button>

      <button onClick={closeModal} className="cancel">
        Cancel
      </button>
    </div>
  );
};

export default TwoFaModal;
