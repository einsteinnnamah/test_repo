import "./style.scss";
import greenArr from "../../assets/drawables/greenArrow.svg";
import redArr from "../../assets/drawables/redArrow.svg";
import Marquee from "react-fast-marquee";
const ListConversion = () => {
  return (
    <Marquee className="listConversion">
      {[
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      ].map((item) => {
        return (
          <div className="eachConversion">
            <p className="name">USD</p>
            {item % 2 === 0 ? (
              <img src={greenArr} alt="green arrow" />
            ) : (
              <img src={redArr} alt="red arrow" />
            )}

            <p className={`percent ${item % 2 === 0 ? "green" : "red"}`}>
              14.2%
            </p>
          </div>
        );
      })}
    </Marquee>
  );
};

export default ListConversion;
