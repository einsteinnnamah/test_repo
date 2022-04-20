import mark from "../../assets/drawables/markGreen.svg";
import indicator from "../../assets/drawables/indicate.svg";
import "./style.scss";
const AtmCard = ({ item, handleChange, active }) => {
  return (
    <div
      className={`pd_atm_card ${item.id === active ? "active" : ""} ${
        item.isExpired ? "expired" : ""
      }`}
      onClick={() => {
        if (!item.isExpired) {
          handleChange(item.id);
        }
      }}
    >
      <div className="left_part">
        <div className="top_part">
          <img src={item.img} alt="card" />
          <p>{item.cardName}</p>
        </div>
        <p className="number">{item.number}</p>
        <p className="exp">{item.expDate}</p>
      </div>
      <div className="right_part">
        {item.id === active ? (
          <img src={mark} alt="mark" />
        ) : (
          <img src={indicator} alt="indicate" className="indicate" />
        )}
      </div>
    </div>
  );
};

export default AtmCard;
