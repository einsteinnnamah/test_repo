import support from "../../assets/drawables/support.svg";
import "./style.scss";
const SupportBtn = ({ className }) => {
  return (
    <button className={`support ${className}`}>
      <img src={support} alt="support" />
      Support
    </button>
  );
};

export default SupportBtn;
