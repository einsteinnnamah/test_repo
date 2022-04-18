import warning from "../../assets/drawables/warning.svg";
import goArr from "../../assets/drawables/goArr.svg";
import { Link } from "react-router-dom";
import "./style.scss";
const CompleteRegistrationPop = () => {
  return (
    <div className="pd_complete_registration">
      <img src={warning} alt="warning" />
      <p>Please complete your account verification.</p>
      <Link to="/"> Complete Registration</Link>
      <img src={goArr} alt="go" />
    </div>
  );
};

export default CompleteRegistrationPop;
