import InputField from "components/InputFields";
import InputPhone from "components/InputFields/inputPhone";
import SelectField from "components/InputFields/SelectField";
import SubmitBtn from "components/SubmitBtn/SubmitBtn";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import identity from "../../../assets/drawables/identity.svg";

import mark from "../../../assets/drawables/mark.svg";
import ImageUpload from "components/InputFields/imageUpload";
import SupportBtn from "components/SupportBtn";
import { useNavigate } from "react-router-dom";
import BackBtn from "components/BackBtn";
const IdentityInfo = () => {
  const methods = useForm();
  const navigate = useNavigate();
  const [upload, setUpload] = useState();
  console.log(upload);
  const onSubmit = (data) => {
    console.log(data);
    navigate("/complete");
  };
  return (
    <div className="pd_complete_registration">
      <BackBtn />
      <SupportBtn />
      <div className="center_container">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="formHead">
              <img src={identity} alt="profile" />
              <p>Proof of Identity</p>
            </div>

            <SelectField
              label="Select Type of ID card"
              name="state"
              selectOption={[
                { label: "Voter's Card", value: "voter's" },
                { label: "Nin", value: "nin" },
              ]}
            />
            <div className="command">
              <div className="eachCommand">
                <img src={mark} alt="mark" />
                <p>Ensure you picture is clear</p>
              </div>
              <div className="eachCommand">
                <img src={mark} alt="mark" />
                <p>Ensure to capture ID Number</p>
              </div>
            </div>

            <ImageUpload
              label={"Upload Font Side of your ID Card"}
              sub_label={"Font Side"}
              form_label={"front"}
            />
            <ImageUpload
              label={"Upload Back Side of your ID Card"}
              sub_label={"Back Side"}
              form_label={"back"}
            />

            <SubmitBtn disabled={false} isLoading={false} btnText={"Submit"} />
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default IdentityInfo;
