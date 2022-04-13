import "./style.scss";
const ProgressBar = ({ stage }) => {
  return (
    <div className="pd_progress_bar">
      <div className={`progress ${stage}`}></div>
    </div>
  );
};

export default ProgressBar;
