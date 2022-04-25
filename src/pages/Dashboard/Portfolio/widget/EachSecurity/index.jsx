import Growth from "components/Growth";
import timecheck from "../../../../../assets/drawables/timecheck.svg";
import Trend from "react-trend";
import "./style.scss";
const EachSecurity = ({
  item: { flag, time, name, amount, growth, isRed, risk, isNetRed, code, net },
}) => {
  return (
    <div className="pd_each_security">
      <div className="top_part">
        <div className="left_top">
          <div className="img_box">
            <img src={flag} alt="flag" />
            <p className="code bold">{code}</p>
          </div>
          <p className="name">{name}</p>
        </div>
        <div className="right_top">
          <img src={timecheck} alt="time" />
          <p>{time}</p>
        </div>
      </div>
      <div className="money_side">
        <p className="bold money">{amount}</p>
        <Growth isRed={isRed} content={growth} />
      </div>

      <div className="trend">
        <Trend
          data={[0, 10, 5, 22, 3.6, 11]}
          autoDraw
          autoDrawDuration={3000}
          autoDrawEasing="ease-in"
          gradient={["#34E36F"]}
        />
      </div>
      <div className="bottom_part">
        <div className="rate">
          <p>Risk rating</p>
          <div className="small_circle"></div>
          <p>{risk}</p>
        </div>
        <div className="net">
          <p>Net Variation</p>
          <Growth isRed={isNetRed} content={net} />
        </div>
      </div>
    </div>
  );
};

export default EachSecurity;
