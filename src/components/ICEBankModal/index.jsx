import "./style.scss";
import eng from "../../assets/drawables/england.svg";
import EachIce from "./eachIce";
import SubmitBtn from "components/SubmitBtn/SubmitBtn";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const IceBankModal = ({ closeModal, setIceAmount }) => {
  const [selected, setSelected] = useState("");
  const [amount, setAmount] = useState("");
  const handleChange = (id) => {
    setSelected(id);
  };
  const navigate = useNavigate();
  const iceList = [
    {
      flag: eng,
      code: "USD",
      desc: "United States Dollar",
      amount: "$ 219.09",
      isAdditional: false,
      id: "1",
    },
    {
      flag: eng,
      code: "NGN",
      desc: "Nigerian Naira",
      amount: "N 90,345.00",
      isAdditional: false,
      id: "2",
    },
    {
      flag: eng,
      code: "EUR",
      desc: "EURO",
      amount: "$ 219.09",
      isAdditional: true,
      id: "3",
    },
  ];
  return (
    <div className="pd_ice_bank_modal">
      <p className="available">
        <span>3</span> account available
      </p>
      <div className="cover_ice">
        {iceList.map((item) => {
          return (
            <EachIce
              item={item}
              handleChange={handleChange}
              active={selected}
              setAmount={setAmount}
            />
          );
        })}
      </div>
      <SubmitBtn
        btnText={"Next"}
        onClick={() => {
          closeModal();
          setIceAmount(amount);
        }}
      />
    </div>
  );
};

export default IceBankModal;
