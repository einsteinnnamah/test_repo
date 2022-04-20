import mark from "../../assets/drawables/markGreen.svg";
import uncheck from "../../assets/drawables/uncheck.svg";
import "./style.scss";
const EachIce = ({ item, active, handleChange, setAmount }) => {
  return (
    <div
      onClick={() => {
        handleChange(item.id);
        setAmount(item.amount);
      }}
      className={`pd_each_ice ${item.id === active ? "active" : ""}`}
    >
      <div className="top_ice">
        <div className="left_ice">
          <img src={item.flag} alt="flag" />
          <div className="text_ice">
            <p className="code">{item.code}</p>
            <p className="desc">{item.desc}</p>
          </div>
        </div>
        <div className="right_ice">
          <p>{item.amount}</p>
          <img src={item.id === active ? mark : uncheck} alt="mark" />
        </div>
      </div>
      {item.isAdditional && (
        <p className="additional">Additional cost applies</p>
      )}
    </div>
  );
};

export default EachIce;
