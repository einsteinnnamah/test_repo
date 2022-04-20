import BackBtn from "components/BackBtn";
import SubmitBtn from "components/SubmitBtn/SubmitBtn";
import SupportBtn from "components/SupportBtn";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import NavCard from "../NavCard";
import "./style.scss";
import vismaster from "../../../../assets/drawables/vismaster.svg";
import InputField from "components/InputFields";
import { Checkbox } from "@mui/material";
import SmallModal from "components/ModalPopUp/smallModal";
import { useState } from "react";
import ProcessingModal from "components/ProcessingModal";
const SetCard = () => {
  const methods = useForm();
  const [openModal, setOpenModal] = useState(false);
  const onSubmit = (val) => {};
  return (
    <div className="pd_set_card">
      <NavCard active={"payment"} />
      <BackBtn />
      <SupportBtn className="down" />
      <div className="main_aspect">
        <p className="first_text">Enter your card details</p>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} action="">
            <InputField
              type="number"
              name="card_number"
              placeholder="1234 0384 3445 2389"
              id="card_number"
              label="Card Number"
              errMsg="invalid input"
              isMaster={true}
            />
            <div className="form-group-wrap">
              <InputField
                type="date"
                name="expiry_date"
                id="expiry_date"
                label="Expiry Date"
                errMsg="invalid input"
              />
              <InputField
                type="password"
                name="security_code"
                id="security_code"
                label="Security Code"
                errMsg="invalid input"
                isInd={true}
              />
            </div>
            <InputField
              type="text"
              name="name"
              placeholder="Raji Mustapha"
              id="name"
              label="Name on Card"
              errMsg="invalid input"
            />
            <div className="check_container">
              <Checkbox defaultChecked color="secondary" />
              <p>Save this card details</p>
            </div>
            <SubmitBtn
              onClick={() => {
                setOpenModal(true);
              }}
              className="green"
              btnText="Pay $1,001.56"
            />
            <Link to="/invest" className="pay_link">
              Change payment method
            </Link>
            <div className="secure_box">
              <p>Payment secured by</p>
              <img src={vismaster} alt="vismaster" />
            </div>
          </form>
        </FormProvider>
      </div>
      <SmallModal closeModal={() => setOpenModal(false)} openModal={openModal}>
        <ProcessingModal loading={true} />
      </SmallModal>
    </div>
  );
};

export default SetCard;
