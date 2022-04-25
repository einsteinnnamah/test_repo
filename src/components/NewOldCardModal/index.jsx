import "./style.scss";
import atmCard from "../../assets/drawables/atmcard.png";
import { useState } from "react";
import SubmitBtn from "components/SubmitBtn/SubmitBtn";
import { Link, useNavigate } from "react-router-dom";
import visa from "../../assets/drawables/visa.svg";
import mastercard from "../../assets/drawables/mastercard.svg";
import AtmCard from "components/AtmCard";

const NewOldCardModal = ({ setOpenModal2, setOpenModal }) => {
  const [isNew, setIsNew] = useState(true);
  const [selected, setSelected] = useState("");
  const [process, setProcess] = useState("false");
  const navigate = useNavigate();
  const cardList = [
    {
      img: mastercard,
      cardName: "Mastercard",
      number: "0000 0000 0*** **09",
      expDate: "Expires on 01/22",
      isExpired: false,
      id: 1,
    },
    {
      img: visa,
      cardName: "Visa",
      number: "0000 0000 0*** **09",
      expDate: "Expired on 01/22",
      isExpired: true,
      id: 2,
    },
    {
      img: mastercard,
      cardName: "Mastercard",
      number: "0000 0000 0*** **09",
      expDate: "Expires on 01/22",
      isExpired: false,
      id: 3,
    },
  ];
  const handleCardChange = (id) => {
    setSelected(id);
  };
  return (
    <div className="pd_new_old_card_modal">
      {isNew ? (
        <div className="pd_new_side">
          <img src={atmCard} alt="atm" />
          <SubmitBtn
            onClick={() => {
              navigate("/invest/setcard");
            }}
            btnText={"Use New Card"}
          />
        </div>
      ) : (
        <div className="pd_old_side">
          <div className="card_list">
            {cardList.map((item) => {
              return (
                <AtmCard
                  item={item}
                  key={item.id}
                  active={selected}
                  handleChange={handleCardChange}
                />
              );
            })}
            <SubmitBtn
              onClick={() => {
                setOpenModal(false);
                setOpenModal2(true);
              }}
              btnText={"Use this card"}
            />

            <Link to="/invest/setcard" className="add_new">
              Add new Card
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewOldCardModal;
