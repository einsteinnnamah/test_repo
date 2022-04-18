import { Link } from "react-router-dom";
import "./style.scss";
const EachNewsGrid = ({ toolImg, date, news, banner, title }) => {
  return (
    <div className="pd_each_news_grid">
      <div className="left">
        <div className="top">
          <img src={toolImg} alt="tool" />
          <p className="date">{date}</p>
        </div>
        <p className="title">{title}</p>
        <p className="news">{news}</p>
        <button className="money">Money</button>
      </div>
      <div className="right">
        <div
          className="banner"
          style={{ backgroundImage: `url(${banner})` }}
        ></div>
      </div>
    </div>
  );
};

export default EachNewsGrid;
