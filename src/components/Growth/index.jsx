import greenArr from "../../assets/drawables/greenArrow.svg";
import redArr from "../../assets/drawables/redArrow.svg";
import "./style.scss";
const Growth = ({ isRed, content }) => {
  return (
    <div className="pd_growth_show">
      <img src={isRed ? redArr : greenArr} alt="" />
      <p className={isRed ? "red" : "green"}>{content}</p>
    </div>
  );
};

export default Growth;
