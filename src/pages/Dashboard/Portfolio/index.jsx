import ListConversion from "components/ListConversion";
import ChartSection from "./widget/ChartSection";
import EachSecurity from "./widget/EachSecurity";
import PortFolioCarousel from "./widget/PortfolioCarousel";
import TopSection from "./widget/TopSection";
import eng from "../../../assets/drawables/england.svg";
import nig from "../../../assets/drawables/nigeria.svg";
import "./style.scss";
import EachHighlight from "./widget/EachHighlight";
import { useState } from "react";
import investment from "../../../assets/drawables/investment.svg";
const Portfolio = () => {
  const securityList = [
    {
      flag: eng,
      time: "12:23:02",
      name: "United States Dollar",
      code: "USD",
      amount: "$ 219.09",
      growth: "+1.47%",
      isRed: false,
      risk: "Low",
      isNetRed: true,
      net: "-2.5",
      date: "January 9",
    },
    {
      flag: nig,
      time: "12:23:02",
      name: "United States Dollar",
      code: "USD",
      amount: "$ 219.09",
      growth: "+1.47%",
      isRed: false,
      risk: "Low",
      isNetRed: true,
      net: "-2.5",
      date: "January 9",
    },
    {
      flag: eng,
      time: "12:23:02",
      name: "United States Dollar",
      code: "USD",
      amount: "$ 219.09",
      growth: "+1.47%",
      isRed: false,
      risk: "Low",
      isNetRed: true,
      net: "-2.5",
      date: "January 9",
    },
    {
      flag: nig,
      time: "12:23:02",
      name: "United States Dollar",
      code: "USD",
      amount: "$ 219.09",
      growth: "+1.47%",
      isRed: false,
      risk: "Low",
      isNetRed: true,
      net: "-2.5",
      date: "January 9",
    },
    {
      flag: eng,
      time: "12:23:02",
      name: "United States Dollar",
      code: "USD",
      amount: "$ 219.09",
      growth: "+1.47%",
      isRed: false,
      risk: "Low",
      isNetRed: true,
      net: "-2.5",
      date: "January 9",
    },
    {
      flag: nig,
      time: "12:23:02",
      name: "United States Dollar",
      code: "USD",
      amount: "$ 219.09",
      growth: "+1.47%",
      isRed: false,
      risk: "Low",
      isNetRed: true,
      net: "-2.5",
      date: "January 9",
    },
    {
      flag: eng,
      time: "12:23:02",
      name: "United States Dollar",
      code: "USD",
      amount: "$ 219.09",
      growth: "+1.47%",
      isRed: false,
      risk: "Low",
      isNetRed: true,
      net: "-2.5",
      date: "January 9",
    },
    {
      flag: nig,
      time: "12:23:02",
      name: "United States Dollar",
      code: "USD",
      amount: "$ 219.09",
      growth: "+1.47%",
      isRed: true,
      risk: "Low",
      isNetRed: true,
      net: "-2.5",
      date: "January 9",
    },
    {
      flag: eng,
      time: "12:23:02",
      name: "United States Dollar",
      code: "USD",
      amount: "$ 219.09",
      growth: "+1.47%",
      isRed: false,
      risk: "Low",
      isNetRed: true,
      net: "-2.5",
      date: "January 9",
    },
    {
      flag: nig,
      time: "12:23:02",
      name: "United States Dollar",
      code: "USD",
      amount: "$ 219.09",
      growth: "+1.47%",
      isRed: true,
      risk: "Low",
      isNetRed: true,
      net: "-2.5",
      date: "January 9",
    },
    {
      flag: eng,
      time: "12:23:02",
      name: "United States Dollar",
      code: "USD",
      amount: "$ 219.09",
      growth: "+1.47%",
      isRed: false,
      risk: "Low",
      isNetRed: true,
      net: "-2.5",
      date: "January 9",
    },
    {
      flag: nig,
      time: "12:23:02",
      name: "United States Dollar",
      code: "USD",
      amount: "$ 219.09",
      growth: "+1.47%",
      isRed: true,
      risk: "Low",
      isNetRed: true,
      net: "-2.5",
      date: "January 9",
    },
  ];
  const [isEmpty, setIsEmpty] = useState(true);
  return (
    <div className="pd_portfolio">
      <ListConversion />
      <TopSection isEmpty={isEmpty} />
      <div className="cover_portfolio">
        {isEmpty && (
          <>
            {" "}
            <p className="port bold">Your Portfolio</p>
            <p className="port">
              You have invested in 0 currency backed securities
            </p>{" "}
          </>
        )}
        {isEmpty && (
          <div className="cover_invest">
            <img src={investment} alt="invest" />
            <p className="show bold">Your porfolio will show here</p>
            <p className="active">
              You have no active investment. Explore the <br /> Markets to
              begin.
            </p>
            <button
              onClick={() => {
                setIsEmpty(false);
              }}
              className="explore"
            >
              Explore Market
            </button>
          </div>
        )}
        {!isEmpty && (
          <PortFolioCarousel
            title={"Your Portfolio"}
            width={270}
            noOfCard={securityList.length}
            margin={26}
            desc={"You have invested in 4 currency backed securities"}
            isBtn={false}
            isEmpty={isEmpty}
          >
            {securityList.map((item) => {
              return (
                // <div className="eachCar">
                //   <p>{item}</p>
                // </div>
                <EachSecurity item={item} />
              );
            })}
          </PortFolioCarousel>
        )}
      </div>

      {!isEmpty && (
        <>
          {" "}
          <ChartSection />
          <div className="highlight_part">
            <p className="bold market_title">Market Highlights</p>
            <p className="desc">
              Get insight on how world currencies are performing
            </p>

            <PortFolioCarousel
              width={285}
              noOfCard={securityList.length}
              margin={22}
              isBtn={true}
            >
              {securityList.map((item) => {
                return (
                  // <div className="eachCar">
                  //   <p>{item}</p>
                  // </div>
                  <EachHighlight item={item} />
                );
              })}
            </PortFolioCarousel>
            <button className={`explore`}>Explore Market</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Portfolio;
