import ListConversion from "components/ListConversion";
import log from "../../../assets/drawables/log.svg";
import not from "../../../assets/drawables/not.svg";
import set from "../../../assets/drawables/set.svg";
import two from "../../../assets/drawables/two.svg";
import lan from "../../../assets/drawables/lan.svg";
import guard from "../../../assets/drawables/guard.svg";
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
          <div className="each_wite_box">
            <img src={log} alt="" />
            <div className="right_white">
              <div className="left_text">
                <p className="topic">Login Settings</p>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </p>
                <button className="tag">
                  <img src={guard} alt="" />
                  Email Verified
                </button>
              </div>
              <img src={arrowleft} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
