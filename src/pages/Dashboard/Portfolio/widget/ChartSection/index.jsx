import "./style.scss";
import nig from "../../../../../assets/drawables/nigeria.svg";
import usa from "../../../../../assets/drawables/usa.svg";
import eng from "../../../../../assets/drawables/england.svg";
import yen from "../../../../../assets/drawables/yen.svg";
import EachChartIndicator from "../EachChartIndicator";
import moveright from "../../../../../assets/drawables/vector1.svg";
import moveleft from "../../../../../assets/drawables/vector2.svg";
import TopCountries from "../TopCountries";
import Chart from "react-apexcharts";
const ChartSection = () => {
  const indicatorList = [
    {
      flag: usa,
      code: "USD",
      color: "#ADD2FF",
    },
    {
      flag: nig,
      code: "NIG",
      color: "#3AA64C",
    },
    {
      flag: eng,
      code: "GBP",
      color: "#173963",
    },
    {
      flag: yen,
      code: "YEN",
      color: "#5388D8",
    },
  ];
  const options = {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false,
      },
      chart: {
        type: "donut",
      },
      // stacked: false,
    },
    stroke: {
      width: 0,
    },
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "65%",
          labels: {
            show: true,

            total: {
              show: true,
              showAlways: true,
              fontSize: "14px",
            },
          },
        },
      },
    },
    colors: ["#ADD2FF", "#3AA64C", "#173963", "#5388D8"],

    grid: {
      borderColor: "#868686",
      strokeDashArray: 5,
    },
    stroke: {
      curve: "smooth",
    },
    labels: ["USD", "NGN", "GBP", "YEN"],
    dataLabels: {
      enabled: false,
    },
  };
  const series = [44, 55, 41, 17];
  return (
    <div className="pd_chart_section">
      <div className="left_chart">
        <div className="cover_chart">
          <p className="title bold">Your Investment Distribution</p>
          <div className="chart_side">
            <Chart
              options={options}
              series={series}
              type="donut"
              height={"300"}
            />
          </div>
          <div className="chart_indicators">
            {indicatorList.map((item) => {
              return <EachChartIndicator item={item} />;
            })}
          </div>
        </div>

        <div className="move_box">
          <div className="moveright">
            <img src={moveleft} alt="left" />
          </div>
          <div className="moveright">
            <img src={moveright} alt="left" />
          </div>
        </div>
      </div>
      <div className="right_chart">
        <TopCountries title={"Tracked Securities"} />
      </div>
    </div>
  );
};

export default ChartSection;
