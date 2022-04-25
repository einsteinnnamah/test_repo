import moveleft from "../../../../../assets/drawables/vector2.svg";
import moveright from "../../../../../assets/drawables/vector1.svg";
import "./style.scss";
import { useRef, useState } from "react";
import { OverFlowCarousel } from "./styledcomponent";
const PortFolioCarousel = ({
  title,
  width,
  noOfCard,
  margin,
  desc,
  isBtn = true,
  children,
}) => {
  const [translate, setTranslate] = useState(0);
  const [disable, setDisable] = useState(false);
  const [lastTranslate, setLastTranslate] = useState("");
  const [filterCard, setFilterCard] = useState("");
  const filterList = ["Top Risers", "Top Fallers", "Volume Leaders"];
  console.log(translate, "translate");
  const handleTranslate = (type) => {
    let screenwidth = ref.current.offsetWidth;

    let numberOfCard = noOfCard;
    // 1. width of screen is ref divided by width of each card plus margin
    let initialCardNumber = screenwidth / (width + 20 + margin);
    // 2.get remaining number of card
    let remainingNoOfCard = numberOfCard - initialCardNumber;
    // 3. to get maximum translation, remainingNoOfCard X width of card plus margin
    let maximumTranslateValue = remainingNoOfCard * (width + 20 + margin);
    let mainMax = maximumTranslateValue;

    console.log(mainMax, "mainmax");
    if (type === "forward") {
      let remainder = mainMax - (-1 * translate + (width + 20 + margin));
      console.log(remainder);
      if (remainder < 0) {
        setTranslate(translate + (width + 20 + margin));
        setLastTranslate(translate + remainder);
        setDisable(true);
      } else {
        setTranslate(translate - (width + 20 + margin));
        setLastTranslate("");
        setDisable(false);
      }
      // if (translate < -mainMax) {

      // } else {

      //
      // }
    } else {
      setDisable(false);
      setLastTranslate("");
      if (translate >= 0) {
        setTranslate(0);
      } else {
        setTranslate(translate + (width + 20 + margin));
      }
    }
  };
  const ref = useRef();

  return (
    <div className="pd_portfolio_carousel">
      <div className="top_side_carousel">
        <div className="left_side_carousel">
          {isBtn ? (
            <div className="btn_flex_box">
              {filterList.map((item) => {
                return (
                  <button
                    onClick={() => {
                      setFilterCard(item);
                    }}
                    className={`each_filter_btn ${
                      filterCard === item ? "active" : ""
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          ) : (
            <>
              <p className="title bold">{title}</p>
              <p className="desc">{desc}</p>{" "}
            </>
          )}
        </div>
        <div className="right_side_carousel">
          {isBtn ? (
            ""
          ) : (
            <button className="view_all">View All securities</button>
          )}
          <div className="cover_move">
            <div
              onClick={() => {
                handleTranslate("backward");
              }}
              className="moveright"
            >
              <img src={moveleft} alt="left" />
            </div>
            <div
              onClick={() => {
                if (disable) {
                } else {
                  handleTranslate("forward");
                }
              }}
              className="moveright"
            >
              <img src={moveright} alt="left" />
            </div>
          </div>
        </div>
      </div>

      <div ref={ref} className="overall_carousel">
        <OverFlowCarousel lastTranslate={lastTranslate} translate={translate}>
          {children}
        </OverFlowCarousel>
      </div>
    </div>
  );
};

export default PortFolioCarousel;
