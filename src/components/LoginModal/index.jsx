import { useState } from "react";
import { useForm } from "react-hook-form";
import padlock from "../../assets/drawables/padlock.svg";
import "./style.scss";
import SubmitBtn from "components/SubmitBtn/SubmitBtn";
import blueIndicator from "../../assets/drawables/blueIndicator.svg";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
const LoginModal = () => {
  const methods = useForm();
  // const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const handleChange = (otp) => {
    setOtp(otp);
  };

  return (
    <div className="pd_login_modal">
      <img src={padlock} alt="padloack" />
      <p className="first_text not_center">Complete your log in</p>
      <p className="sec_text not_center">
        A 5-digit code has been sent to +234808********90
      </p>
      <div className="otp_wrap">
        <label htmlFor="">Enter Code</label>
        <OtpInput
          value={otp}
          onChange={handleChange}
          numInputs={5}
          separator={<span> </span>}
        />
      </div>
      <button className="resend_btn">Resend</button>
      <SubmitBtn disabled={false} isLoading={false} btnText={"Proceed"} />
      <Link to="/" className="indicator_center">
        <img src={blueIndicator} alt="blueIndicator" />
        <p>Why this?</p>
      </Link>
    </div>
  );
};

export default LoginModal;
