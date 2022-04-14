import InputField from "components/InputFields";
import ListConversion from "components/ListConversion";
import TopNavbar from "components/navbar/top_navbar";
import PageDescription from "components/PageDescription";
import { ReactComponent as SearchIcon } from "../../assets/drawables/search.svg";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import "./style.scss";
const MarketPage = () => {
  const methods = useForm();
  const [status, setStatus] = useState("tracked");
  const listStatus = [
    "Tracked",
    "Alphabetical Order",
    "Region",
    "Risk Category",
    "Yield",
  ];
  const handleStatus = (type) => {
    setStatus(type);
  };
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
          <div className="search_cover">
            <FormProvider {...methods}>
              <form>
                {" "}
                <InputField
                  type="text"
                  name="search"
                  placeholder="Search currencies"
                  id="search"
                  required={false}
                  iconPosition={"left"}
                  iconPlaceholder={<SearchIcon />}
                  errMsg="invalid  input"
                />{" "}
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPage;
