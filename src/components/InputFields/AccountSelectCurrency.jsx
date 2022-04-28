import { useEffect, useState } from "react";

import searchIcon from "../../assets/drawables/search.svg";
import england from "../../assets/drawables/england.svg";
import nigeria from "../../assets/drawables/nigeria.svg";
import angola from "../../assets/drawables/angola.svg";
import EachLocation from "./EachLocation";
import down from "../../assets/drawables/down.svg";
import { code, country } from "currency-codes";
const AccountSelectCurrency = ({ defaultCurrency, handleCurrency }) => {
  // const [selected, setSelected] = useState({ img: "", code: "", country: "" });
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  // const handleShow = () => {
  //   setShow(!show);
  // };
  const [location, setLocation] = useState({
    img: nigeria,
    code: "+234",
    country: "Nigeria",
  });

  const [answer, setAnswer] = useState({
    img: england,
    code: "+234",
    country: "Usa",
  });

  useEffect(() => {
    handleCurrency(answer.code);
  }, [answer]);

  const handleAnswer = ({ img, code, country }) => {
    setAnswer({
      img,
      code,
      country,
    });
  };
  const countryList = [
    { img: nigeria, code: "NGN", country: "Nigerian Naira" },
    { img: england, code: "ENG", country: "England Pounds" },
    { img: angola, code: "ANG", country: "Angola" },
    { img: nigeria, code: "+234", country: "Nigeria" },
    { img: england, code: "+61", country: "England" },
    { img: angola, code: "+1", country: "Angola" },
    { img: nigeria, code: "+234", country: "Nigeria" },
    { img: england, code: "+61", country: "England" },
    { img: angola, code: "+1", country: "Angola" },
    { img: angola, code: "+1", country: "Angola" },
    { img: nigeria, code: "+234", country: "Nigeria" },
    { img: england, code: "+61", country: "England" },
    { img: angola, code: "+1", country: "Angola" },
    { img: angola, code: "+1", country: "Angola" },
    { img: nigeria, code: "+234", country: "Nigeria" },
    { img: england, code: "+61", country: "England" },
    { img: angola, code: "+1", country: "Angola" },
    { img: angola, code: "+1", country: "Angola" },
    { img: nigeria, code: "+234", country: "Nigeria" },
    { img: england, code: "+61", country: "England" },
    { img: angola, code: "+1", country: "Angola" },
  ];
  const [searchResult, setSearchResult] = useState(countryList);

  useEffect(() => {
    if (searchValue) {
      const newList = [...countryList].filter((item) => {
        return item.country
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase());
      });

      setSearchResult(newList);
    } else {
      setSearchResult(countryList);
    }
  }, [searchValue]);

  return (
    <div className="pd_convert_flag_drop_down account_currency_selector">
      <div
        onClick={() => {
          if (show) {
            setShow(false);
          } else {
            setShow(true);
          }
        }}
        className="showCurrency"
      >
        <div className="show_mini_details">
          <img className="smallFlag" src={answer.img} alt="" />
          <div className="name"><span>{answer.code}</span> {answer.country}</div>
          <img className="account_droper" src={down} alt="down" />
        </div>
        
      </div>

      <div className={`drop_down account_select_drop ${show ? "show" : ""}`}>
        <div className="drop_box">
          <img src={searchIcon} alt="search" className="search" />
          <input
            onClick={() => {
              setShow(true);
            }}
            name="country"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            placeholder="Search for currency"
            type="text"
          />
        </div>
        <div className="overflow">
          <div className="own_country">
            <p className="title">POPULAR CURRENCIES</p>

            <EachLocation
              handleClick={() => {
                handleAnswer(location);
                setShow(false);
              }}
              item={location}
            />
            <EachLocation
              handleClick={() => {
                handleAnswer(location);
                setShow(false);
              }}
              item={location}
            />
            <EachLocation
              handleClick={() => {
                handleAnswer(location);
                setShow(false);
              }}
              item={location}
            />
          </div>
          <div className="all_country">
            <p className="title">ALL CURRENCIES</p>
            <div className="location_list">
              {!searchResult.length ? (
                <p className="empty">Empty Search</p>
              ) : (
                searchResult.map((item) => {
                  return (
                    <EachLocation
                      handleClick={() => {
                        handleAnswer(item);
                        setShow(false);
                      }}
                      item={item}
                    />
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default AccountSelectCurrency;
