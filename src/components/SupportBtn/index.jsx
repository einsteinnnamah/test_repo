import support from "../../assets/drawables/support.svg";
import "./style.scss";
const SupportBtn = () => {
  return (
    <button className="support">
      <img src={support} alt="support" />
      Support
    </button>
  );
};

export default SupportBtn;
