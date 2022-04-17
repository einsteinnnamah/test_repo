import nig from "../../../../assets/drawables/nigeria.svg";
import england from "../../../../assets/drawables/england.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import house from "../../../../assets/drawables/house.svg";
import "./style.scss";
import TimelineComponent from "../../../../components/Timeline/index";

const TrackTransaction = ({ closeModal }) => {
  const tranStat = "In progress";
  const timelineAction = [
    {
      id: 1,
      title: "Transfer Created",
      desc: "Transfer 28936455 created in our system",
    },
    {
      id: 2,
      title: "Transfer Created",
      desc: "Transfer 28936455 created in our system",
    },
    {
      id: 3,
      title: "Transfer Created",
      desc: "Transfer 28936455 created in our system",
    },
    {
      id: 4,
      title: "Transfer Created",
      desc: "Transfer 28936455 created in our system",
    },
  ];
  return (
    <div className="pd_track_transaction">
      <div className="head">
        <div className="left">
          <img src={nig} alt="nig" />
          <ArrowForwardIcon />
          <img src={england} alt="england" />
        </div>
        <button
          className={`status ${tranStat === "In progress" && "progress"} ${
            tranStat === "Succesful" && "success"
          } ${tranStat === "Failed" && "fail"}`}
        >
          {tranStat}
        </button>
      </div>
      <p className="money">534.23 USD</p>
      <div className="details">
        <div className="left">
          <p className="bank_name">12344567 . Access Bank USD</p>
          <p className="name">Adekanbi Ademola</p>
        </div>
        <div className="right">
          <p>Bank Transfer</p>
          <img src={house} alt="house" />
        </div>
      </div>
      <div className="prog">
        <TimelineComponent timelineAction={timelineAction} stage={2} />
      </div>
      <div className="last">
        <button className="share">Share Receipt</button>
        <button onClick={closeModal} className="close">
          Close
        </button>
      </div>
    </div>
  );
};

export default TrackTransaction;
