import ProgressBar from "components/ProgressBar/progressbar";

import profile from "../../../assets/drawables/profile.svg";
import identity from "../../../assets/drawables/identity.svg";
import "./style.scss";
import SubmitBtn from "components/SubmitBtn/SubmitBtn";
import { Link, useNavigate } from "react-router-dom";
import greenmark from "../../../assets/drawables/greenmark.svg";
const SelectForm = () => {
  // const [stage, setStage] = useState("personal");
  const navigate = useNavigate();
  return (
    <div className="pd_select_form">
      <div className="center_container">
        <p className="header_text">Complete your verification</p>
        <p className="sub_header_text">
          Complete your registration so you can send money and invest securely
        </p>
        <ProgressBar stage="start" />
        <div className="select_cover">
          <div className="each_select">
            <img src={profile} alt="profile" />
            <div className="text_side">
              <div className="bold">
                {" "}
                <p>Profile Information</p>{" "}
                <img src={greenmark} alt="greenmark" />{" "}
              </div>
              <p className="light">You are required to provide your bio data</p>
            </div>
          </div>
          <div className="each_select">
            <img src={identity} alt="profile" />
            <div className="text_side">
              <div className="bold">
                {" "}
                <p>Profile Information</p>{" "}
                <p className="pending">Pending Approval</p>
              </div>
              <p className="light">
                You will be required to provide a government issued ID card
              </p>
            </div>
          </div>
        </div>
        <SubmitBtn
          onClick={() => {
            navigate("/complete/profile");
          }}
          btnText={"Continue Verification"}
        />
        <Link className="later_link" to="/">
          I will do this later
        </Link>
      </div>
    </div>
  );
};

export default SelectForm;
