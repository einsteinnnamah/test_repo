import InputField from "components/InputFields";
import InputPhone from "components/InputFields/inputPhone";
import SelectField from "components/InputFields/SelectField";
import SubmitBtn from "components/SubmitBtn/SubmitBtn";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import identity from "../../../assets/drawables/identity.svg";
import yellowbtn from "../../../assets/drawables/yellowarrow.svg";

import mark from "../../../assets/drawables/mark.svg";
import ImageUpload from "components/InputFields/imageUpload";
import SupportBtn from "components/SupportBtn";
const IdentityInfo = () => {
  const methods = useForm();
  const [upload, setUpload] = useState();
  console.log(upload);
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="pd_complete_registration">
      <button className="yellow_btn">
        <img src={yellowbtn} alt="yellow" />
        Back
      </button>
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
