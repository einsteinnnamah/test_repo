import ListConversion from "components/ListConversion";
import log from "../../../assets/drawables/log.svg";
import not from "../../../assets/drawables/not.svg";
import set from "../../../assets/drawables/set.svg";
import two from "../../../assets/drawables/two.svg";
import lan from "../../../assets/drawables/lan.svg";
import arrowLeft from "../../../assets/drawables/arrowblue.svg";
import guard from "../../../assets/drawables/guard.svg";
import "./style.scss";
import { Link } from "react-router-dom";
const Setting = () => {
  return (
    <div className="pd_setting">
      <ListConversion />
      <div className="setting_box">
        <p className="setting_title">Settings</p>
        <p className="setting_desc">
          Manage your Account Activity, Two-Factor Authentication (2FA) and so
          on.
        </p>
        <div className="white_box">
          <Link to="/" className="each_wite_box">
            <img src={log} alt="" />
            <div className="right_white">
              <div className="left_text">
                <p className="topic">Login Settings</p>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </p>
                <span className="tag">
                  <img src={guard} alt="" />
                  Email Verified
                </span>
              </div>
              <img src={arrowLeft} alt="arrow" />
            </div>
          </Link>
          <Link to="/" className="each_wite_box">
            <img src={not} alt="" />
            <div className="right_white">
              <div className="left_text">
                <p className="topic">Notification Settings</p>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
                  <br /> sed do eiusmod tempor incididunt
                </p>
              </div>
              <img src={arrowLeft} alt="arrow" />
            </div>
          </Link>
          <Link to="/" className="each_wite_box">
            <img src={set} alt="" />
            <div className="right_white">
              <div className="left_text">
                <p className="topic">Set Off</p>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod <br /> tempor incididunt
                </p>
                <span className="tag">
                  Status: <span className="redtag">Off</span>
                </span>
              </div>
              <img src={arrowLeft} alt="arrow" />
            </div>
          </Link>
          <Link to="/" className="each_wite_box">
            <img src={two} alt="" />
            <div className="right_white">
              <div className="left_text">
                <p className="topic">Two Factor Authentication</p>
                <p className="desc">
                  Add an extra layer of security and protection to your account{" "}
                  <br />
                  to protect it from unauthorized transactions.
                </p>
                <span className="tag">
                  Status:{" "}
                  <span className="greentag"> On (SMS or voice call)</span>
                </span>
              </div>
              <img src={arrowLeft} alt="arrow" />
            </div>
          </Link>
          <Link to="/" className="each_wite_box">
            <img src={lan} alt="lan" />
            <div className="right_white">
              <div className="left_text">
                <p className="topic">Language Settings</p>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{" "}
                  <br />
                  do eiusmod tempor incididunt
                </p>
                <span className="tag">English UK</span>
              </div>
              <img src={arrowLeft} alt="arrow" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Setting;
