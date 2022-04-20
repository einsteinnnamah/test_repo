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
import jointtype from "../../../../assets/drawables/jointtype.svg";
import perstype from "../../../../assets/drawables/perstype.svg";
import EachBankType from "components/EachBankType";
const SetBank = () => {
  const methods = useForm();
  const [openModal, setOpenModal] = useState(false);
  const [selected, setSelected] = useState("");
  const onSubmit = (val) => {};
  const handleChangeType = (id) => {
    setSelected(id);
  };
  const typeList = [
    {
      id: "1",
      name: "Personal Account",
      desc: "This account is owned by only you",
      active: "false",
      img: perstype,
    },
    {
      id: "2",
      name: "Joint Account",
      desc: "Owned together by you and somelse",
      active: "false",
      img: jointtype,
    },
  ];
  return (
    <div className="pd_set_bank">
      <NavCard active={"payment"} />
      <BackBtn />
      <SupportBtn className="down" />
      <div className="main_aspect">
        <div className="type_box">
          <p className="first_text">Select type of account</p>
          <div className="cover_bank_list">
            {typeList.map((item) => {
              return (
                <EachBankType
                  item={item}
                  active={selected}
                  handleChange={handleChangeType}
                />
              );
            })}
          </div>

          {selected === "2" && (
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <p className="form_head">
                  What is the second account holder name
                </p>
                <div className="form-group-wrap">
                  <InputField
                    type="text"
                    name="first_name"
                    placeholder="Raji Mustapha"
                    id="name"
                    label="First Name"
                    errMsg="invalid input"
                  />
                  <InputField
                    type="text"
                    name="last_name"
                    placeholder="Raji Mustapha"
                    id="name"
                    label="Last Name"
                    errMsg="invalid input"
                  />
                </div>
              </form>
            </FormProvider>
          )}

          <SubmitBtn btnText={"Next"} />
        </div>
      </div>
      <SmallModal closeModal={() => setOpenModal(false)} openModal={openModal}>
        <ProcessingModal loading={true} />
      </SmallModal>
    </div>
  );
};

export default SetBank;
