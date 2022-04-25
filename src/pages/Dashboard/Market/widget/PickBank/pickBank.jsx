import "./style.scss";
import mark from "../../../../../assets/drawables/markGreen.svg";
const PickBank = ({ item, active, handleChange, iceAmount }) => {
  return (
    <div
      onClick={() => {
        handleChange(item.id);
      }}
      className={`pd_pick_bank ${active === item.id ? "active" : ""}`}
    >
      {item.id === "1" && iceAmount && (
        <p className="ice_amount">{iceAmount}</p>
      )}
      <img src={mark} alt="mark" className="mark" />
      <div className="cover_img">
        <img src={item.img} alt="bank" />
      </div>
      <div className="text_side">
        <p className="top">{item.name}</p>
        <p className="bottom">{item.desc}</p>
      </div>
    </div>
  );
};

export default PickBank;
