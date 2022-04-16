import ListConversion from "components/ListConversion";
import TopNavbar from "components/navbar/top_navbar";
import PageDescription from "components/PageDescription";

import { useState } from "react";

import { ReactComponent as Star } from "../../assets/drawables/star.svg";
import cad from "../../assets/drawables/england.svg";
import redArr from "../../assets/drawables/redArrow.svg";
import greenArr from "../../assets/drawables/greenArrow.svg";
import "./style.scss";
import Trend from "react-trend";
import { Pagination } from "@mui/material";
import SearchComponent from "components/SearchComponent";
const MarketPage = () => {
  const [status, setStatus] = useState("tracked");
  const [searchResult, setSearchResult] = useState("");
  const [alphabetStatus, setAlphabetStatus] = useState("A-Z");
  const [regionStatus, setRegionStatus] = useState("All");
  const [riskStatus, setRiskStatus] = useState("All");
  const [yieldStat, setYieldStat] = useState("Highest to Lowest");
  const listStatus = [
    "Tracked",
    "Alphabetical Order",
    "Region",
    "Risk Category",
    "Yield",
  ];
  const alphabet = ["A-Z", "Z-A"];
  const region = [
    "All",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Middle East",
    "Oceania",
  ];
  const risk = ["All", "Low", "Medium", "High"];
  const yieldStatus = ["Highest to Lowest", "Lowest to Highest"];
  const handleStatus = (type) => {
    setStatus(type);
  };
  console.log(searchResult);
  return (
    <div className="pd_market_page">
      <TopNavbar />
      <ListConversion />
      <PageDescription
        title={"Markets"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u"
        }
        date={"Data as at 10th January 2021, 10:00AM"}
      />
      <div className="cover_all">
        <div className="filterDiv">
          <div className="btn_cover">
            {listStatus.map((item) => {
              return (
                <button
                  className={`filter_btn ${
                    item.toLocaleLowerCase() === status.toLocaleLowerCase()
                      ? "active"
                      : ""
                  }`}
                  onClick={() => {
                    handleStatus(item);
                  }}
                >
                  {item}
                </button>
              );
            })}
          </div>
          <SearchComponent handleChange={setSearchResult} />
        </div>

        <div className="extraFilter">
          {status === "Alphabetical Order" &&
            alphabet.map((item) => {
              return (
                <div
                  onClick={() => {
                    setAlphabetStatus(item);
                  }}
                  className={`each_extra_filter ${
                    alphabetStatus.toLocaleLowerCase() ===
                    item.toLocaleLowerCase()
                      ? "active"
                      : ""
                  }`}
                >
                  {" "}
                  <p>{item}</p> <div className="line"></div>
                </div>
              );
            })}

          {status === "Region" &&
            region.map((item) => {
              return (
                <div
                  onClick={() => {
                    setRegionStatus(item);
                  }}
                  className={`each_extra_filter ${
                    regionStatus.toLocaleLowerCase() ===
                    item.toLocaleLowerCase()
                      ? "active"
                      : ""
                  }`}
                >
                  {" "}
                  <p>{item}</p> <div className="line"></div>
                </div>
              );
            })}

          {status === "Risk Category" &&
            risk.map((item) => {
              return (
                <div
                  onClick={() => {
                    setRiskStatus(item);
                  }}
                  className={`each_extra_filter ${
                    riskStatus.toLocaleLowerCase() === item.toLocaleLowerCase()
                      ? "active"
                      : ""
                  }`}
                >
                  {" "}
                  <p>{item}</p> <div className="line"></div>
                </div>
              );
            })}
          {status === "Yield" &&
            yieldStatus.map((item) => {
              return (
                <div
                  onClick={() => {
                    setYieldStat(item);
                  }}
                  className={`each_extra_filter ${
                    yieldStat.toLocaleLowerCase() === item.toLocaleLowerCase()
                      ? "active"
                      : ""
                  }`}
                >
                  {" "}
                  <p>{item}</p> <div className="line"></div>
                </div>
              );
            })}
        </div>

        <div className="marketTable">
          <div className="overflow">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>#</th>
                  <th>Assets</th>
                  <th>Price (%)</th>
                  <th>Net Variation</th>
                  <th>Change (bps)</th>
                  <th>Risk</th>
                  <th>Trend (Last 7 days)</th>
                  <th>Invest</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((item) => {
                  return (
                    <tr key={item}>
                      <td>
                        <Star />
                      </td>
                      <td className="serial">{item}</td>
                      <td>
                        <div className="country">
                          <img src={cad} alt="flag" />
                          <div className="textSide">
                            <p className="top">USD</p>
                            <p className="bottom">Dollar Backed Securities</p>
                          </div>
                        </div>
                      </td>
                      <td className="serial">2</td>
                      <td>
                        <div className="growth red">
                          <img src={redArr} alt="red" />
                          <p>-2.5</p>
                        </div>
                      </td>
                      <td>
                        <div className="growth green">
                          <img src={greenArr} alt="red" />
                          <p>500</p>
                        </div>
                      </td>
                      <td>
                        <div className="risk">
                          <p>Low</p>
                          <div className="line"></div>
                        </div>
                      </td>
                      <td>
                        <div className="trend">
                          <Trend
                            data={[0, 10, 5, 22, 3.6, 11]}
                            autoDraw
                            autoDrawDuration={3000}
                            autoDrawEasing="ease-in"
                            gradient={["#34E36F"]}
                          />
                        </div>
                      </td>
                      <td>
                        <button className="invest">Invest</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="pagination-wrap">
            <Pagination
              color="primary"
              onChange={() => {}}
              count={5}
              shape="rounded"
              components={{ previous: "Prev", next: "Next" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPage;
