import plus from "../../assets/drawables/plus.svg";
import plusactive from "../../assets/drawables/plusactive.svg";
import redArr from "../../assets/drawables/redArrow.svg";
import greenArr from "../../assets/drawables/greenArrow.svg";
import "./style.scss";
import meter from "../../assets/drawables/meter.svg";
const EachTopCountry = ({ flag, name, code, isMarked, rate, rateNo }) => {
  return (
    <div className="pd_each_top_country">
      <div className="about">
        <img src={flag} alt="country" />
        <div className="text_side">
          <p className="top">{code}</p>
          <p className="bottom">{name}</p>
        </div>
      </div>
      <div className={`growth ${rate === "up" ? "green" : "red"}`}>
        <img src={rate === "up" ? greenArr : redArr} alt="red" />
        <p>{rateNo}</p>
      </div>
      <img src={meter} alt="meter" className="meter" />
      <img src={isMarked ? plusactive : plus} alt="" className="plus" />
    </div>
  );
};

export default EachTopCountry;
