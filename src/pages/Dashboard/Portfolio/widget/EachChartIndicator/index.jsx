import "./style.scss";
const EachChartIndicator = ({ item }) => {
  return (
    <div className="pd_each_chart_indicator">
      <div style={{ background: `${item.color}` }} className="color_box"></div>
      <div className="about">
        <p className="code bold">{item.code}</p>
        <p className="money">{item.amount}</p>
      </div>
      <img src={item.flag} alt="" className="flag" />
    </div>
  );
};

export default EachChartIndicator;
