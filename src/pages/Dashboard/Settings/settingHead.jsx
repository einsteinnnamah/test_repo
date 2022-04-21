import { Link } from "react-router-dom";
import "./style.scss";
import setarr from "../../../assets/drawables/setarr.svg";
const SettingHead = ({ img, title, desc }) => {
  return (
    <div className="pd_setting_head">
      <Link className="backlink" to="/dashboard/settings">
        <img src={setarr} alt="arr" />
        Back to Settings Page
      </Link>
      <div className="flex_set">
        <img src={img} alt="setimg" />
        <div className="text_side">
          <p className="title">{title}</p>
          <p className="desc">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default SettingHead;
