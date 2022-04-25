import yiel from "../../../../../assets/drawables/yield.svg";
import credit from "../../../../../assets/drawables/credit.svg";
import loss from "../../../../../assets/drawables/loss.svg";
import sold from "../../../../../assets/drawables/sold.svg";
import "./style.scss";
import arr from "../../../../../assets/drawables/arrowblue.svg";
const EachActivity = ({
  item: { status, amount, balance },
  setType,
  setView,
}) => {
  return (
    <div
      onClick={() => {
        setView(true);
        setType(
          status === "Yield"
            ? "gained"
            : status === "Loss"
            ? "lost"
            : status === "Credit"
            ? "bought"
            : status === "Sold"
            ? "bought"
            : ""
        );
      }}
      className="pd_each_activity"
    >
      <div className="stat_part">
        <div className={`cover_box ${status.toLowerCase()}`}>
          <img
            src={
              status === "Yield"
                ? yiel
                : status === "Loss"
                ? loss
                : status === "Sold"
                ? sold
                : status === "Credit"
                ? credit
                : ""
            }
            alt="stat"
          />
        </div>
        <p>{status}</p>
      </div>
      <div className="amount_side">
        <div className="text">
          <p
            className={`amount bold ${
              status === "Yield" ? "green" : status === "Loss" ? "red" : ""
            }`}
          >
            {amount}
          </p>
          <p className="balance">{balance}</p>
        </div>
        <img src={arr} alt="arr" />
      </div>
    </div>
  );
};

export default EachActivity;
