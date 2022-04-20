import NavCard from "../NavCard";
import eng from "../../../../assets/drawables/england.svg";
import line from "../../../../assets/drawables/line.svg";
import "./style.scss";
import Trend from "react-trend";
import indicator from "../../../../assets/drawables/indicate.svg";
import cancel from "../../../../assets/drawables/cancel.svg";
import { FormProvider, useForm } from "react-hook-form";
import SubmitBtn from "components/SubmitBtn/SubmitBtn";
import CurrencyPhone from "components/InputFields/currencyPhone";
import SupportBtn from "components/SupportBtn";
import { useState } from "react";
import bankImg from "../../../../assets/drawables/bankImg.svg";
import timeImg from "../../../../assets/drawables/timeImg.svg";
import atm from "../../../../assets/drawables/atm.svg";
import PickBank from "../widget/PickBank/pickBank";
import Modal from "components/ModalPopUp";
import NewOldCardModal from "components/NewOldCardModal";
import SmallModal from "components/ModalPopUp/smallModal";

import ProcessingModal from "components/ProcessingModal";
import { useNavigate } from "react-router-dom";
import IceBankModal from "components/ICEBankModal";
const CardInvest = () => {
  const methods = useForm();
  const [active, setActive] = useState("amount");
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [iceAmount, setIceAmount] = useState("");
  const navigate = useNavigate();
  const onSubmit = (val) => {
    console.log(val);
  };
  const [selected, setSelected] = useState("");
  const selection = [
    {
      name: " ICE Bank",
      desc: "Pay now from your ICE Bank USD account",
      img: bankImg,
      id: "1",
    },
    {
      name: "Debit/Credit Card",
      desc: "Pay using your credit/debit card. ",
      img: atm,
      id: "2",
    },
    {
      name: "Bank Transfer",
      desc: "Pay now from your bank account. ",
      img: bankImg,
      id: "3",
    },
  ];
  const handleChange = (id) => {
    setSelected(id);
  };
  console.log(iceAmount);
  return (
    <div className="pd_card_invest">
      <NavCard active={active} />
      <SupportBtn className={"down"} />
      <div className="cover_main">
        <div className="left">
          <p className="title">Currency Performance Brief</p>
          <div className="card_left">
            <div className="top">
              <div className="flag_side">
                {" "}
                <div className="flag_div">
                  <img src={eng} alt="end" /> <p>Price (%)</p>
                </div>{" "}
                <div className="flag_div line_div">
                  <img src={line} alt="line" />
                  <p>2.0</p>
                </div>{" "}
              </div>
              <p className="rate_side">
                Risk Rating
                <span>Low</span>
              </p>
            </div>
            <div className="bottom">
              <Trend
                data={[0, 10, 5, 22, 3.6, 11]}
                autoDraw
                autoDrawDuration={3000}
                autoDrawEasing="ease-in"
                gradient={["#34E36F"]}
              />
            </div>
          </div>
          <div className="indicate_div">
            <img src={indicator} alt="indicator" />
            <p>Last updated 5 mins ago</p>
          </div>
        </div>
        <div className="right">
          <div className="leftAmount">
            {active === "amount" ? (
              <div className="amount_box">
                <div className="currency_top">
                  <p>Invest in USD</p>
                  <img src={cancel} alt="cancel" />
                </div>
                <div className="currency_form">
                  <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                      <CurrencyPhone
                        label={"How much do you want to invest?"}
                      />
                      <SubmitBtn
                        onClick={() => {
                          setActive("payment");
                        }}
                        btnText={"Continue"}
                      />
                    </form>
                  </FormProvider>
                </div>
                <div className="indicate_div">
                  <img src={indicator} alt="indicator" />
                  <p>Last updated 5 mins ago</p>
                </div>
              </div>
            ) : (
              <div className="bank_select_box">
                <p className="title">How do you want to pay?</p>
                <div className="cover_bank_list">
                  {selection.map((item) => {
                    return (
                      <PickBank
                        item={item}
                        active={selected}
                        handleChange={handleChange}
                        key={item.id}
                        iceAmount={iceAmount}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          <div className="rightAmount">
            <div className="title">Details</div>
            <div className="amount_box">
              <div className="each_amount">
                <p className="left_text">Investment Amount</p>
                <p className="right_text">$1,000.00</p>
              </div>
              <div className="each_amount">
                <p className="left_text">Processing Fee</p>
                <p className="right_text">$1.56</p>
              </div>

              <div className="total_div">
                <p className="left_text">Total</p>
                <p className="right_text">$1,001.56</p>
              </div>
              {selected === "2" && (
                <div className="process">
                  <div className="left_text">
                    <img src={timeImg} alt="time" />
                    <p>Processing time</p>
                  </div>
                  <p className="right_text">⌛ 5 seconds</p>
                </div>
              )}

              {selected && (
                <SubmitBtn
                  onClick={() => {
                    if (selected === "2") {
                      setOpenModal(true);
                    }
                    if (selected === "3") {
                      navigate("/invest/setbank");
                    }
                    if (selected === "1") {
                      if (iceAmount) {
                        navigate("/invest/sendmoney");
                      } else {
                        setOpenModal3(true);
                      }
                    }
                  }}
                  className="green"
                  btnText={"Continue to Pay"}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <Modal
        title={"Select Card"}
        closeModal={() => setOpenModal(false)}
        openModal={openModal}
      >
        <NewOldCardModal
          setOpenModal={setOpenModal}
          setOpenModal2={setOpenModal2}
        />
      </Modal>
      <Modal
        title={"Select ICE Bank Balance"}
        closeModal={() => setOpenModal3(false)}
        openModal={openModal3}
      >
        <IceBankModal
          closeModal={() => setOpenModal3(false)}
          setIceAmount={setIceAmount}
        />
      </Modal>
      <SmallModal
        closeModal={() => setOpenModal2(false)}
        openModal={openModal2}
      >
        <ProcessingModal loading={false} />
      </SmallModal>
    </div>
  );
};

export default CardInvest;
