import prev from "../../assets/drawables/prev.svg";
import "./style.scss";
const BackToMarket = () => {
  return (
    <button className="pd_back_to_market">
      <img src={prev} alt="prev" />
      Back to Market
    </button>
  );
};

export default BackToMarket;
