import BackToMarket from "components/BackToMarket";
import ListConversion from "components/ListConversion";
import TopNavbar from "components/navbar/top_navbar";
import SearchComponent from "components/SearchComponent";
import england from "../../assets/drawables/england.svg";
import track from "../../assets/drawables/track.svg";
import redArr from "../../assets/drawables/redArrow.svg";
import greenArr from "../../assets/drawables/greenArrow.svg";
import line from "../../assets/drawables/line.svg";
import CurrencyDrop from "components/currencyDrop";
import { useState } from "react";
import nig from "../../assets/drawables/nigeria.svg";
import convertIcon from "../../assets/drawables/convert.svg";
import coverconvert from "../../assets/drawables/coverconvert.svg";
import union from "../../assets/drawables/Union.svg";
import indicate from "../../assets/drawables/indicate.svg";
import { ReactComponent as Candle } from "../../assets/drawables/candle.svg";
import { ReactComponent as Trend } from "../../assets/drawables/trend.svg";
import Chart from "react-apexcharts";
import EachTopCountry from "components/EachTopCountry";
import EachNews from "components/EachNews";
import banner from "../../assets/drawables/banner.png";
import toolImg from "../../assets/drawables/toolImg.svg";
const CurrencyPage = () => {
  const [tender, setTender] = useState("");
  const [buy, setBuy] = useState("");
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
    <div className="pd_currency_page">
      <TopNavbar />
      <ListConversion />
      <div className="main_page">
        <BackToMarket />

        <div className="abount_currency">
          <div className="left">
            <p className="rank">
              Ranking: <span>#1</span>{" "}
            </p>
            <div className="flag_explain">
              <img src={england} alt="england" />
              <p>
                <span className="currency_code">USD</span>
                <span className="currency_name">Dollar Back Securities</span>
              </p>
              <button className="track">
                {" "}
                <img src={track} alt="" /> Track
              </button>
            </div>
            <div className="trend">
              <p className="price">Price (%)</p>
              <div className="line">
                <img src={line} alt="line" />
                <p>2.0</p>
              </div>
              <div className="variation">
                <p className="title">Net Variation</p>
                <div className="growth red">
                  <img src={redArr} alt="red" />
                  <p>-2.5</p>
                </div>
              </div>
              <div className="variation">
                <p>Change (bps)</p>
                <div className="growth green">
                  <img src={greenArr} alt="green" />
                  <p>-2.5</p>
                </div>
              </div>
              <div className="riskRating">
                <p className="risktext">Risk Rating</p>
                <div className="risk">
                  <p>Low</p>
                  <div className="line"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <SearchComponent />
          </div>
        </div>

        <div className="converting">
          <p className="first_text">Quick Conversion</p>

          <div className="convert_box">
            <div className="each_convert">
              <div className="left">
                <p className="changeText">Tender</p>
                <p className="number">20</p>
              </div>
              <div className="right">
                <CurrencyDrop
                  handleCurrency={(val) => {
                    setTender(val);
                  }}
                  defaultCurrency={{ flag: nig, code: "NGN" }}
                />
              </div>
            </div>
            <img src={convertIcon} alt="convert" className="midImg" />
            <div className="each_convert">
              <div className="left">
                <p className="changeText">Tender</p>
                <p className="number">20</p>
              </div>
              <div className="right">
                <CurrencyDrop
                  handleCurrency={(val) => {
                    setTender(val);
                  }}
                  defaultCurrency={{ flag: nig, code: "NGN" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="conv_rating">
          <img src={coverconvert} alt="cover" />
          <p className="normal">Conversion Rate</p>
          <img src={union} alt="union" />
          <p className="dollar">$1 = ₦569</p>
        </div>
        <p className="date">Conversion rate as at 10th January 2021, 10:00AM</p>

        <div className="flex_container">
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
                          <Trend className="chart_toggle" />
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
          <div className="topCountries">
            <p className="first_text">Other Top Countries</p>
            {[1, 2, 3, 4, 5, 6, 7].map((item) => {
              return (
                <EachTopCountry
                  isMarked={item % 2 === 0 ? true : false}
                  rate={item % 2 === 0 ? "up" : "down"}
                  rateNo={2.5}
                  name={"British Pound"}
                  code={"GBP"}
                  flag={england}
                />
              );
            })}
          </div>
        </div>

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
              The United States dollar (symbol: $; code: USD; also abbreviated
              US$ or U.S. Dollar, to distinguish it from other
              dollar-denominated currencies; referred to as the dollar, U.S.
              dollar, American dollar, or colloquially buck) is the official
              currency of the United States and its territories. The Coinage Act
              of 1792 introduced the U.S. dollar at par with the Spanish silver
              dollar, divided it into 100 cents, and authorized the minting of
              coins denominated in dollars and cents. U.S. banknotes are issued
              in the form of Federal Reserve Notes, popularly called greenbacks
              due to their historically predominantly green color.
            </p>
            <a href="/">Visit Website</a>
          </div>
        </div>
        <div className="news_container">
          <p className="first_text">Related News</p>
          <div className="news_flex">
            {[1, 2, 3, 4, 5, 6].map((item) => {
              return (
                <EachNews
                  key={item}
                  toolImg={toolImg}
                  banner={banner}
                  date={"JANUARY 10"}
                  news={
                    "Dollar slips as positioning and technical selling weigh"
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyPage;
