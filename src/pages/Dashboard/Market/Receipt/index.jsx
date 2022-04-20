import BackBtn from "components/BackBtn";
import SubmitBtn from "components/SubmitBtn/SubmitBtn";
import SupportBtn from "components/SupportBtn";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import NavCard from "../NavCard";
import "./style.scss";

import SmallModal from "components/ModalPopUp/smallModal";
import { useState } from "react";
import ProcessingModal from "components/ProcessingModal";
import copyImg from "../../../../assets/drawables/copyImg.svg";
const Receipt = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="pd_set_bank receipt">
      <NavCard active={"payment"} />
      <BackBtn />
      <SupportBtn className="down" />
      <div className="main_aspect">
        <div className="type_box">
          <div className="first_box">
            <p className="trans">Transfer this amount</p>
            <p className="amount"> $50.00</p>
          </div>
          <div className="line"></div>
          <div className="second_box">
            <p className="kindly">
              Kindly transfer the exact amount (USD 50.00) to the account number
              below and use the reference number (QWY73456UJS) in the narration
            </p>

            <div className="detail_box">
              <p className="title">Bank Details</p>
              <div className="eachDetail">
                <div className="left">
                  <p>Account Name</p>
                </div>
                <div className="right">
                  <p>ICE International</p>
                </div>
              </div>
              <div className="eachDetail">
                <div className="left">
                  <p>Account Number</p>
                </div>
                <div className="right">
                  <p>ICE International</p>
                  <img src={copyImg} alt="copy" />
                </div>
              </div>
              <div className="eachDetail">
                <div className="left">
                  <p>Bank Name</p>
                </div>
                <div className="right">
                  <p>ICE International</p>
                </div>
              </div>
              <div className="eachDetail">
                <div className="left">
                  <p>Bank Swift Code</p>
                </div>
                <div className="right">
                  <p>ICE International</p>
                  <img src={copyImg} alt="copy" />
                </div>
              </div>
              <div className="eachDetail">
                <div className="left">
                  <p>Reference Number</p>
                </div>
                <div className="right">
                  <p>ICE International</p>
                  <img src={copyImg} alt="copy" />
                </div>
              </div>
            </div>
          </div>
          <SubmitBtn
            onClick={() => {
              setOpenModal(true);
            }}
            className="green"
            btnText={"I have made this payment"}
          />
          <Link to="/invest" className="pay_link">
            I will make the transfer later
          </Link>
        </div>
      </div>
      <SmallModal closeModal={() => setOpenModal(false)} openModal={openModal}>
        <ProcessingModal
          loading={false}
          title={"Transfer Initiated"}
          desc={
            "Your transfer has been initiated. $50 will be added to your USD portfolio once we recieve payment"
          }
          isHome={true}
        />
      </SmallModal>
    </div>
  );
};

export default Receipt;
