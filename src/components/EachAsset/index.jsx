import "./style.scss";
import pointred from "../../assets/drawables/pointred.svg";
import pointgreen from "../../assets/drawables/pointgreen.svg";
import Trend from "react-trend";
const EachAsstes = ({ flag, currency, isRed, percent, amount }) => {
  return (
    <div className="pd_each_asset">
      <div className="top_flex">
        <div className="currency_side">
          <img src={flag} alt="currency" />
          <p>{currency}</p>
        </div>
        {isRed ? (
          <div className="grow red">
            {" "}
            <img src={pointred} alt="red" /> <p>-{percent}</p>{" "}
          </div>
        ) : (
          <div className="grow green">
            {" "}
            <img src={pointgreen} alt="green" /> <p>{percent}</p>{" "}
          </div>
        )}
      </div>
      <p className="amount">{amount}</p>
      <div className="trend">
        <Trend
          data={[0, 10, 5, 22, 3.6, 11]}
          autoDraw
          autoDrawDuration={1000}
          autoDrawEasing="ease-in"
          gradient={[isRed ? "#F34018" : "#34E36F"]}
        />
      </div>
    </div>
  );
};

export default EachAsstes;
