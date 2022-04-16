import "./style.scss";
import yellowbtn from "../../assets/drawables/yellowarrow.svg";

const BackBtn = () => {
  return (
    <button className="yellow_btn">
      <img src={yellowbtn} alt="yellow" />
      Back
    </button>
  );
};

export default BackBtn;
