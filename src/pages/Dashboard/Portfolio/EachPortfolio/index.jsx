import Growth from "components/Growth";
import back from "../../../../assets/drawables/back.svg";
import eng from "../../../../assets/drawables/england.svg";
import "./style.scss";
import redArr from "../../../../assets/drawables/redArrow.svg";
import greenArr from "../../../../assets/drawables/greenArrow.svg";
import line from "../../../../assets/drawables/line.svg";
import timecheck from "../../../../assets/drawables/timecheck.svg";
import addition from "../../../../assets/drawables/addition.svg";
import sell from "../../../../assets/drawables/sell.svg";
import trade from "../../../../assets/drawables/trade.svg";
import security from "../../../../assets/drawables/security.svg";
import down from "../../../../assets/drawables/down.svg";
import indicate from "../../../../assets/drawables/indicate.svg";
import { ReactComponent as Candle } from "../../../../assets/drawables/candle.svg";
import { ReactComponent as Trend2 } from "../../../../assets/drawables/trend.svg";
import banner from "../../../../assets/drawables/banner.png";
import toolImg from "../../../../assets/drawables/toolImg.svg";
import Chart from "react-apexcharts";
import { useState } from "react";
import Trend from "react-trend";
import moment from "moment";
import EachActivity from "../widget/EachActivity";
import EachNewsGrid from "components/EachNewsGrid";
import TopCountries from "../widget/TopCountries";
import { ReactComponent as Line2 } from "../../../../assets/drawables/line.svg";
const EachPortfolio = () => {
  const [date, setDate] = useState("");
  const activityList = [
    {
      status: "Yield",
      amount: "$534.23",
      balance: "$30,045.23",
    },
    {
      status: "Loss",
      amount: "$534.23",
      balance: "$30,045.23",
    },
    {
      status: "Sold",
      amount: "$534.23",
      balance: "$30,045.23",
    },
    {
      status: "Credit",
      amount: "$534.23",
      balance: "$30,045.23",
    },
  ];
  const [view, setView] = useState(false);
  const [type, setType] = useState("");
  const [day, setDay] = useState("1D");
  const [chart, setChart] = useState("trend");
  const dayList = ["1D", "7D", "14D", "1M", "3M", "1Y", "MAX"];
  const chartList = ["trend", "candle"];
  const options = {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false,
      },
      type: "area",
      stacked: false,
    },
    stroke: {
      width: 1,
    },
    colors: ["#34E36F"],

    grid: {
      borderColor: "#868686",
      strokeDashArray: 5,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
    },

    xaxis: {
      categories: [
        "00:00",
        "02:00",
        "00:00",
        "02:00",
        "00:00",
        "02:00",
        "00:00",
        "02:00",
        "00:00",
        "02:00",
        "00:00",
        "02:00",
      ],
    },
  };
  const series = [
    {
      name: "rate",
      data: [5, 7, 9, 6, 4, 9, 11, 7.5, 13, 10, 6, 4],
    },
  ];
  const optionsCandle = {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false,
      },
      type: "area",
      stacked: false,
    },

    candlestick: {
      colors: {
        upward: "#3C90EB",
        downward: "#DF7D46",
      },
      wick: {
        useFillColor: true,
      },
    },

    grid: {
      borderColor: "#868686",
      strokeDashArray: 5,
    },
  };
  const seriesCandle = [
    {
      name: "rate",

      data: [
        {
          x: new Date("2016-01-01"),
          y: [51.98, 56.29, 51.59, 53.85],
        },
        {
          x: new Date("2016-02-01"),
          y: [53.66, 54.99, 51.35, 52.95],
        },
      ],
    },
  ];
  return (
    <div className="pd_eachportfolio">
      <div className="back_box">
        <img src={back} alt="back" />
        <p>Back to Portolio Overview</p>
      </div>
      <div className="page_topic_box">
        <img src={eng} alt="eng" />
        <p className="bold">United States Dollars </p>
        <span>(USD)</span>
      </div>

      <div className="portfolio_flex">
        <div className="left_portfolio_side">
          <div className="first_port">
            <div className="money_side">
              <div className="time_show">
                <img src={timecheck} alt="time" />
                <p>12:23:02</p>
              </div>
              <p className="bold amount">$30,045.23</p>
              <Growth isRed={false} content={"+1.47% ($3.21)"} />
            </div>
            <div className="action_wrap">
              <button className="buy">
                <img src={addition} alt="add" />
                Buy
              </button>
              <button className="transparent">
                <img src={sell} alt="sell" />
                Sell
              </button>
              <button className="transparent">
                <img src={trade} alt="trade" />
                Trade
              </button>
              <button className="transparent">
                <img src={security} alt="security" />
                Take Security
              </button>
            </div>
          </div>
          <div className="sec_port">
            <div className="title_box">
              <p className="title bold">Activity</p>
              <input
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                type="date"
                name="datepick"
                id="datepick"
              />
              {/* <div className="dateField">
                <label htmlFor="datepick">
                  {moment(date).format("LL")}{" "}
                 {" "}
                </label>
                <img src={down} alt="down" />
              </div> */}
            </div>
            {view ? (
              <div className="view_activity">
                <div
                  onClick={() => {
                    setView(false);
                  }}
                  className="back_box"
                >
                  <img src={back} alt="back" />
                  <p>Back</p>
                </div>
                <div className="gain_box">
                  <p className="gain">You {type}</p>
                  <p className={`amount_gained bold ${type}`}>+$534.23</p>
                  {type !== "bought" && (
                    <div className={`line_box ${type}`}>
                      <Line2 className={`${type}`} />
                      <p>2.0</p>
                    </div>
                  )}

                  {type !== "bought" && (
                    <div className="trend">
                      <Trend
                        data={[0, 10, 5, 22, 3.6, 11]}
                        autoDraw
                        autoDrawDuration={200}
                        autoDrawEasing="ease-in"
                        gradient={[type === "gained" ? "#34E36F" : "#F34018"]}
                      />
                    </div>
                  )}

                  <div className="list_detail">
                    <div className="each_detail">
                      <p className="left_Det">Currency</p>
                      <div className="right_det">
                        <img src={eng} alt="eng" />
                        <p className="bold">USD</p>
                      </div>
                    </div>
                    {type === "bought" && (
                      <div className="each_detail">
                        <p className="left_Det">Payment Channel</p>
                        <div className="right_det">
                          <p className="bold">eWallet </p>
                        </div>
                      </div>
                    )}
                    <div className="each_detail">
                      <p className="left_Det">Date</p>
                      <div className="right_det">
                        <p className="bold">1st February, 2022</p>
                      </div>
                    </div>
                    <div className="each_detail">
                      <p className="left_Det">Time</p>
                      <div className="right_det">
                        <p className="bold">13:09</p>
                      </div>
                    </div>
                    <div className="each_detail">
                      <p className="left_Det">Available Balance</p>
                      <div className="right_det">
                        <p className="bold">$30,001.56</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="main_content">
                <div className="cover_day">
                  <p className="day">Today</p>
                  <EachActivity
                    setType={setType}
                    setView={setView}
                    item={activityList[0]}
                  />
                  <EachActivity
                    setType={setType}
                    setView={setView}
                    item={activityList[1]}
                  />
                </div>
                <div className="cover_day">
                  <p className="day">YESTERDAY</p>
                  <EachActivity
                    setType={setType}
                    setView={setView}
                    item={activityList[1]}
                  />
                  <EachActivity
                    setType={setType}
                    setView={setView}
                    item={activityList[2]}
                  />
                  <EachActivity
                    setType={setType}
                    setView={setView}
                    item={activityList[3]}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="third_port">
            <div className="chart_box">
              <p className="chart_head">Currency Performance</p>
              <div className="chart_flex">
                <div className="left">
                  <img src={indicate} alt="indicate" />
                  <p>Data is shown per minute performance</p>
                </div>
                <div className="right">
                  <div className="day_filter">
                    {dayList.map((item) => {
                      return (
                        <div
                          onClick={() => {
                            setDay(item);
                          }}
                          className={`each ${item === day ? "active" : ""}`}
                        >
                          <p>{item}</p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="day_filter">
                    {chartList.map((item) => {
                      return (
                        <div
                          onClick={() => {
                            setChart(item);
                          }}
                          className={`each ${item === chart ? "active" : ""}`}
                        >
                          {/* <img
                          src={item === "candle" ? candle : trend}
                          alt="chart"
                        /> */}
                          {item === "candle" ? (
                            <Candle className="chart_toggle" />
                          ) : (
                            <Trend2 className="chart_toggle" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="main_chart">
                {chart === "candle" ? (
                  <Chart
                    options={optionsCandle}
                    series={seriesCandle}
                    type="line"
                    height={"350"}
                  />
                ) : (
                  <Chart
                    options={options}
                    series={series}
                    type="line"
                    height={"350"}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="fourth_port">
            <div className="information_container">
              <div className="top_side">
                <p className="first_text">Currency Information</p>
                <div className="info_flex">
                  <div className="each_info">
                    <p className="top">Previous Close</p>
                    <div className="bottom">
                      <p className="text">$121</p>
                    </div>
                  </div>
                  <div className="each_info">
                    <p className="top">Open Price</p>
                    <div className="bottom">
                      <p className="text">$121</p>
                    </div>
                  </div>
                  <div className="each_info">
                    <p className="top">Price Change %</p>
                    <div className="bottom">
                      <div className="line">
                        <img src={line} alt="line" />
                        <p>2.0</p>
                      </div>
                    </div>
                  </div>
                  <div className="each_info">
                    <p className="top">Risk Rating</p>
                    <div className="bottom">
                      <div className="risk">
                        <p>Low</p>
                        <div className="line"></div>
                      </div>
                    </div>
                  </div>
                  <div className="each_info">
                    <p className="top">Net Variation</p>
                    <div className="bottom">
                      <div className="growth red">
                        <img src={redArr} alt="red" />
                        <p>-2.5</p>
                      </div>
                    </div>
                  </div>
                  <div className="each_info">
                    <p className="top">YTD Return</p>
                    <div className="bottom">
                      <div className="growth green">
                        <img src={greenArr} alt="green" />
                        <p>-2.5</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom_side">
                <p className="story">
                  The United States dollar (symbol: $; code: USD; also
                  abbreviated US$ or U.S. Dollar, to distinguish it from other
                  dollar-denominated currencies; referred to as the dollar, U.S.
                  dollar, American dollar, or colloquially buck) is the official
                  currency of the United States and its territories. The Coinage
                  Act of 1792 introduced the U.S. dollar at par with the Spanish
                  silver dollar, divided it into 100 cents, and authorized the
                  minting of coins denominated in dollars and cents. U.S.
                  banknotes are issued in the form of Federal Reserve Notes,
                  popularly called greenbacks due to their historically
                  predominantly green color.
                </p>
                <a href="/">Visit Website</a>
              </div>
            </div>
          </div>
          <div className="fifth_port">
            <div className="news_container">
              <div className="news_flex_grid">
                <p className="first_text">Related News</p>
                {[1, 2, 3].map((item) => {
                  return (
                    <EachNewsGrid
                      key={item}
                      toolImg={toolImg}
                      banner={banner}
                      date={"JANUARY 10"}
                      title={
                        "Dollar hits new two and a half year low after month of losses"
                      }
                      news={
                        "On the last day of the month, the dollar was set for its biggest monthly loss against a basket of currencies ...."
                      }
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="right_portfolio_side">
          <div className="watchlist">
            <TopCountries
              title={"My Watchlist"}
              subTitle={
                "Currencies with the biggest percentage increase in the last 24 hours"
              }
              isCheck={false}
            />
          </div>

          <div className="watchlist">
            <TopCountries
              title={"Top gainers"}
              subTitle={
                "Currencies with the biggest percentage increase in the last 24 hours"
              }
              isCheck={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachPortfolio;
