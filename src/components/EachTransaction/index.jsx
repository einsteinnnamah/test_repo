import tranArr from "../../assets/drawables/tranArr.svg";
import leftArr from "../../assets/drawables/leftArr.svg";
import "./style.scss";
const EachTransaction = ({ amount, tranName, tranStat, handleClick }) => {
  return (
    <div onClick={handleClick} className="pd_each_transaction">
      <div className="left">
        <div className="arr_box">
          <img src={tranArr} alt="tran" />
        </div>
        <div className="text_side">
          <p className="desc">Transfer to {tranName}</p>
          <p className="money">{amount}</p>
        </div>
      </div>
      <div className="right">
        <button
          className={`status ${tranStat === "In progress" && "progress"} ${
            tranStat === "Succesful" && "success"
          } ${tranStat === "Failed" && "fail"}`}
        >
          {tranStat}
        </button>
        <img src={leftArr} alt="arr" />
      </div>
    </div>
  );
};

export default EachTransaction;
