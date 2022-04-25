import Growth from "components/Growth";
import { Link } from "react-router-dom";
import "./style.scss";
import yellowarrow from "../../../../../assets/drawables/yellowarrow.svg";
const EachHighlight = ({
  item: { flag, name, code, amount, growth, isRed, date },
}) => {
  return (
    <div className="pd_highlight">
      <div className="top_part">
        <img src={flag} alt="flag" />
        <p>{name}</p>
      </div>
      <div className="money_part">
        <p className="code">{code}</p>
        <p className="money bold">{amount}</p>
      </div>
      <Growth content={growth} isRed={isRed} />
      <div className="bottom_part">
        <p>Lasted updated {date}</p>
        <Link to={"/"}>
          Track <img src={yellowarrow} alt="" />{" "}
        </Link>
      </div>
    </div>
  );
};

export default EachHighlight;
