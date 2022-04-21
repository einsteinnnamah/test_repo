import { useEffect, useState } from "react";
import dropIcon from "../../assets/drawables/dropIcon.svg";
import searchIcon from "../../assets/drawables/search.svg";
import england from "../../assets/drawables/england.svg";
import nigeria from "../../assets/drawables/nigeria.svg";
import angola from "../../assets/drawables/angola.svg";
import EachLocation from "./EachLocation";
import { useFormContext } from "react-hook-form";
import EachLanguage from "./EachLanguage";
const LanguageDropDown = () => {
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
  const countryList = [
    { img: nigeria, code: "+234", country: "Nigeria" },
    { img: england, code: "+61", country: "England" },
    { img: angola, code: "+1", country: "Angola" },
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

  const {
    register,
    formState: { errors },
  } = useFormContext();
  // const error = get(errors, 'country');

  return (
    <div className="pd_custom_flag_drop_down">
      <div className="cover_all">
        <label htmlFor="">Select Language</label>
        <div className="drop_box">
          <img src={searchIcon} alt="search" className="search" />
          <input
            onClick={() => {
              setShow(true);
            }}
            name="country"
            value={searchValue}
            {...register("country", {
              required: false,
            })}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            placeholder="Select a country "
            type="text"
          />
          <img
            onClick={() => {
              if (show) {
                setShow(false);
              } else {
                setShow(true);
              }
            }}
            src={dropIcon}
            alt="dropIcon"
            className="dropIcon"
          />
        </div>
      </div>
      <div className={`drop_down ${show ? "show" : ""}`}>
        <div className="overflow">
          <div className="all_country">
            <div className="location_list">
              {!searchResult.length ? (
                <p className="empty">Empty Search</p>
              ) : (
                searchResult.map((item) => {
                  return (
                    <EachLanguage
                      handleClick={() => {
                        setSearchValue(item.country);
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

export default LanguageDropDown;
