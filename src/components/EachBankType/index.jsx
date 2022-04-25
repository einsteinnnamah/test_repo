import uncheck from "../../assets/drawables/uncheck.svg";
import mark from "../../assets/drawables/markGreen.svg";
import "./style.scss";
const EachBankType = ({ item, active, handleChange }) => {
  return (
    <div
      onClick={() => {
        handleChange(item.id);
      }}
      className={`pd_each_bank_type ${item.id === active ? "active" : ""}`}
    >
      <div className="left_bank">
        <div className="cover_box">
          <img src={item.img} alt="item" />
        </div>
        <div className="text_part">
          <p className="type">{item.name}</p>
          <p className="desc">{item.desc}</p>
        </div>
      </div>

      <img
        src={item.id === active ? mark : uncheck}
        className="uncheck"
        alt=""
      />
    </div>
  );
};

export default EachBankType;
