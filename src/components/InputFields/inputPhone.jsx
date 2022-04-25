import england from "../../assets/drawables/england.svg";
import nigeria from "../../assets/drawables/nigeria.svg";
import angola from "../../assets/drawables/angola.svg";
import dropIcon from "../../assets/drawables/dropIcon.svg";

import { useState } from "react";
import EachLocation from "./EachLocation";
import { useFormContext } from "react-hook-form";
const InputPhone = ({ label }) => {
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
  const [selected, setSelected] = useState({
    img: nigeria,
    code: "+234",
  });
  const [show, setShow] = useState(false);
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="pd_input_phone">
      <label htmlFor="">{label}</label>
      <div className="pd_mobile_container">
        <div
          onClick={() => {
            setShow(true);
          }}
          className="number_div"
        >
          <div className="current_hold">
            <img src={selected.img} alt="flag" className="flag" />
            <p>{selected.code}</p>
            <img src={dropIcon} alt="drop" className="drop" />
          </div>
        </div>
        <input
          name="mobile"
          {...register("country", {
            required: false,
          })}
          type="tel"
        />
        <div className={`drop_down ${show ? "show" : ""}`}>
          <div className="overflow">
            <div className="all_country">
              <div className="location_list">
                {countryList.map((item) => {
                  return (
                    <EachLocation
                      handleClick={() => {
                        setSelected({
                          img: item.img,
                          code: item.code,
                        });
                        setShow(false);
                      }}
                      item={item}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputPhone;
