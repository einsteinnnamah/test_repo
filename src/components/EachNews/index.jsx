import { Link } from "react-router-dom";
import "./style.scss";
const EachNews = ({ toolImg, date, news, banner }) => {
  return (
    <div className="pd_each_news">
      <div className="top_flex">
        <img src={toolImg} alt="tool" />
        <p className="date_text">{date}</p>
      </div>
      <p className="title">{news}</p>
      <div
        className="img_container"
        style={{ backgroundImage: `url(${banner})` }}
      ></div>
      <Link to="/" className="read">
        Read News
      </Link>
    </div>
  );
};

export default EachNews;
