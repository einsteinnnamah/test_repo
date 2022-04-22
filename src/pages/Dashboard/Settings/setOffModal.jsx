import set from "../../../assets/drawables/set.svg";
import "./style.scss";
const SetOffModal = ({ action, setSetOffAction }) => {
  return (
    <div className="pd_setoff_modal">
      <img src={set} alt="set" className="set" />
      <p className="stat">
        Status{" "}
        <span className={action === "active" ? "green" : "red"}>
          {action === "active" ? "Active" : "InActive"}
        </span>{" "}
      </p>
      <p className="desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{" "}
      </p>
      <button
        onClick={() => {
          setSetOffAction(action === "active" ? "Inactive" : "active");
        }}
        className="off"
      >
        {action === "active" ? "Disenable" : "Enable"} Set off
      </button>
    </div>
  );
};

export default SetOffModal;
