import "./style.scss";
import indicate from "../../../assets/drawables/indicate.svg";
import CurrencyDrop from "components/currencyDrop";
import { useState } from "react";
import nig from "../../../assets/drawables/nigeria.svg";
import greenArr from "../../../assets/drawables/greenArrow.svg";
import question from "../../../assets/drawables/question.svg";
import Eachaccount from "components/EachAccount";
import england from "../../../assets/drawables/england.svg";
import EachAsstes from "components/EachAsset";
import SubmitBtn from "components/SubmitBtn/SubmitBtn";
import { Link } from "react-router-dom";
import EachTransaction from "components/EachTransaction";
import Modal from "components/ModalPopUp";
import TrackTransaction from "./widget/TrackTransactionModal";
const Home = () => {
  const [currency, setCurrency] = useState();
  const [tender, setTender] = useState("");
  const [buy, setBuy] = useState("");
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="pd_home">
      <div className="home_flex">
        <div className="white_part">
          <p className="welcome">
            Hello, <span> Ademola! ✌🏾</span>
          </p>
          <p className="sub_welcome">
            Welcome to ICE Bank. This is an overview of your investments and
            activities
          </p>
          <div className="money_box">
            <div className="first_box">
              <p className="top">See your total portfolio in </p>
              <div className="flex_currency">
                <CurrencyDrop
                  handleCurrency={(val) => {
                    setCurrency(val);
                  }}
                  defaultCurrency={{ flag: nig, code: "NGN" }}
                />
                <img src={indicate} alt="indicate" />
              </div>
            </div>
            <div className="sec_box">
              <p className="port">TOTAL PORTFOLIO VALUE</p>
              <p className="money">$120,345.20</p>
              <div className="green">
                <img src={greenArr} alt="green" />
                <p>+1.47% ($3.21)</p>
              </div>
            </div>
            <p className="date">10.03.2022 10:00AM</p>
          </div>
          <div className="pink_box">
            <div className="cover">
              <p>
                <span> $1,000 </span>
                free transfer units left
              </p>
              <img src={question} alt="question" />
            </div>
          </div>

          <div className="account_side">
            <p className="first_text">YOUR ACCOUNTS</p>
            <div className="account_flex">
              <Eachaccount
                currency={"US Dollar"}
                flag={england}
                amount={"$0.00"}
              />
              <Eachaccount
                currency={"US Dollar"}
                flag={england}
                amount={"$0.00"}
              />
              <div className="create_box">
                <p>+ Create Account</p>
              </div>
            </div>
          </div>
          <div className="account_side ">
            <p className="first_text">YOUR ASSETS</p>
            <div className="cover_flex overflow">
              <div className="account_flex over">
                <EachAsstes
                  currency={"USD"}
                  flag={england}
                  amount={"$7.356,67"}
                  isRed={true}
                  percent={"5.2"}
                />
                <EachAsstes
                  currency={"USD"}
                  flag={england}
                  amount={"$7.356,67"}
                  isRed={false}
                  percent={"5.2"}
                />
                <EachAsstes
                  currency={"USD"}
                  flag={england}
                  amount={"$7.356,67"}
                  isRed={true}
                  percent={"5.2"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="dark_part">
          <div className="convBox">
            <div className="cover_money">
              <p className="title">Send Money</p>
              <div className="changeBox">
                <div className="top hard">
                  <div className="left">
                    <p className="changeText">Tender</p>
                    <p className="number">20</p>
                  </div>
                  <div className="right">
                    <CurrencyDrop
                      handleCurrency={(val) => {
                        setTender(val);
                      }}
                      defaultCurrency={{ flag: nig, code: "NGN" }}
                    />
                  </div>
                </div>
                <div className="top">
                  <div className="left">
                    <p className="changeText">Buy</p>
                    <p className="number">20</p>
                  </div>
                  <div className="right">
                    <CurrencyDrop
                      handleCurrency={(val) => {
                        setBuy(val);
                      }}
                      defaultCurrency={{ flag: nig, code: "NGN" }}
                    />
                  </div>
                </div>
              </div>
              <SubmitBtn className="green" btnText={"Send Money"} />{" "}
            </div>
            <div className="cover_transaction">
              <div className="title_flex">
                <p>Transaction History</p>
                <Link to={"/"}>View All</Link>
              </div>
              <p className="day">Today</p>

              <EachTransaction
                tranName={"Ademola"}
                amount={"534.23 NGN"}
                tranStat={"In progress"}
                handleClick={() => {
                  setOpenModal(true);
                }}
              />
              <EachTransaction
                tranName={"Ademola"}
                amount={"534.23 NGN"}
                tranStat={"Succesful"}
                handleClick={() => {
                  setOpenModal(true);
                }}
              />
              <EachTransaction
                tranName={"Ademola"}
                amount={"534.23 NGN"}
                tranStat={"Failed"}
                handleClick={() => {
                  setOpenModal(true);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal
        closeModal={() => setOpenModal(false)}
        openModal={openModal}
        title={"Track Transfer"}
      >
        <TrackTransaction closeModal={() => setOpenModal(false)} />
      </Modal>
    </div>
  );
};

export default Home;
