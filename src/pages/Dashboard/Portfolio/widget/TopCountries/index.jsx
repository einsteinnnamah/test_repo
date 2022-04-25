import EachTopCountry from "components/EachTopCountry";
import "./style.scss";
import england from "../../../../../assets/drawables/england.svg";
const TopCountries = ({ title, subTitle, isCheck = true }) => {
  return (
    <div className="pd_top_countries">
      <p className={`first_text bold ${subTitle ? "sub" : ""}`}>{title}</p>
      {subTitle && <p className="sect_text">{subTitle}</p>}
      {[1, 2, 3, 4, 5, 6, 7].map((item) => {
        return (
          <EachTopCountry
            isMarked={item % 2 === 0 ? true : false}
            rate={item % 2 === 0 ? "up" : "down"}
            rateNo={2.5}
            name={"British Pound"}
            code={"GBP"}
            flag={england}
            isCheck={isCheck}
          />
        );
      })}
    </div>
  );
};

export default TopCountries;
