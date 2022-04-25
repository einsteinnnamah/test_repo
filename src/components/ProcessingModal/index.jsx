import "./style.scss";
import CircularProgress from "@mui/material/CircularProgress";
import SubmitBtn from "components/SubmitBtn/SubmitBtn";
import { Link } from "react-router-dom";
const ProcessingModal = ({ loading, title, isHome = false, desc }) => {
  return (
    <>
      {loading ? (
        <div className="pd_progress_box">
          {" "}
          <CircularProgress color="success" />{" "}
          <p className="successP">Processing</p>
          <p className="wait">Please wait while we process your payment</p>
        </div>
      ) : (
        <div className="pd_suc_modal">
          <p className="successP">{title ? title : "Payment Success"}</p>
          <p className="story">
            {desc
              ? desc
              : "   You have succesfully invested $1,000.Go to your portofolio to monitor your investment"}
          </p>
          <SubmitBtn btnText={"Go to Portfolio"} />
          <Link to="/" className="">
            Back Home
          </Link>
        </div>
      )}
    </>
  );
};

export default ProcessingModal;
