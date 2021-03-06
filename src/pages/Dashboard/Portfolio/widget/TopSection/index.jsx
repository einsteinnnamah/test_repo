import { useState } from "react";
import down from "../../../../../assets/drawables/down.svg";
import indicate from "../../../../../assets/drawables/indicate.svg";
import nig from "../../../../../assets/drawables/nigeria.svg";
import eng from "../../../../../assets/drawables/england.svg";
import eye from "../../../../../assets/drawables/eye.svg";
import greenArr from "../../../../../assets/drawables/greenArrow.svg";
import "./style.scss";
const TopSection = ({ isEmpty }) => {
  const [currency, setCurrency] = useState({
    flag: nig,
    code: "Nig",
    name: "Nigerian naira",
  });
  const [display, setDisplay] = useState(false);
  const [hide, setHide] = useState(false);
  const [showBtn, setShowBtn] = useState(true);
  const currencyList = [
    {
      flag: nig,
      code: "Nig",
      name: "Nigerian naira",
    },
    {
      flag: eng,
      code: "ENG",
      name: "United States Dollars",
    },
    {
      flag: nig,
      code: "Nig",
      name: "Nigerian naira",
    },
    {
      flag: eng,
      code: "ENG",
      name: "United States Dollars",
    },
  ];
  const handleCurrency = (item) => {
    setCurrency({
      flag: item.flag,
      code: item.code,
      name: item.name,
    });
  };
  return (
    <div className="pd_top_section">
      <div className="first_sect">
        <p className="see">See your total portfolio in </p>
        <div className="choose_currency_box">
          <div
            onClick={() => {
              setDisplay(!display);
            }}
            className="show_currency"
          >
            <img className="flag" src={currency.flag} alt="flag" />
            <p>{currency.code}</p>
            <img className="downarr" src={down} alt="down" />
          </div>
          <div className={`currency_list ${display ? "active" : ""}`}>
            {currencyList.map((item) => {
              return (
                <div
                  onClick={() => {
                    handleCurrency(item);
                  }}
                  className="each_currency_list"
                >
                  <img src={item.flag} alt="flag" />
                  <div className="text_part">
                    <p className="code">{item.code}</p>
                    <p className="desc">{item.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <img src={indicate} alt="indicate" className="indicate" />
      </div>
      <div className="sec_sect">
        <div className="value">
          <p>TOTAL PORTFOLIO VALUE</p>
          <img src={eye} alt="eye" />
        </div>
        <p className="amount bold">${hide ? "*******" : "120,345.20"}</p>
        <p className="growth bold">
          {" "}
          <img src={greenArr} alt="greenarrow" /> +1.47% ($3.21)
        </p>
      </div>
      <div className="third_sect">
        {!isEmpty && showBtn && (
          <button className={`explore`}>Explore Market</button>
        )}
      </div>
    </div>
  );
};

export default TopSection;
