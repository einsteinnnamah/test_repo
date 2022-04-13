import InputField from "components/InputFields";
import InputPhone from "components/InputFields/inputPhone";
import SelectField from "components/InputFields/SelectField";
import SubmitBtn from "components/SubmitBtn/SubmitBtn";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import profile from "../../../assets/drawables/profile.svg";
import yellowbtn from "../../../assets/drawables/yellowarrow.svg";
import support from "../../../assets/drawables/support.svg";
import CustomFlagDropDown from "components/InputFields/customFlagDropDown";
const PersonalInfo = () => {
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
      <button className="support">
        <img src={support} alt="support" />
        Support
      </button>
      <div className="center_container">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="formHead">
              <img src={profile} alt="profile" />
              <p>Tell us about yourself</p>
            </div>
            <InputField
              type="text"
              name="first_name"
              placeholder=""
              id="first_name"
              label="First Name"
              errMsg="invalid input"
            />
            <InputField
              type="text"
              name="middle_name"
              placeholder=""
              id="middle_name"
              required={false}
              label="Middle Name"
              errMsg="invalid input"
            />
            <InputField
              type="text"
              name="last_name"
              placeholder=""
              id="last_name"
              label="Last Name"
              errMsg="invalid input"
            />
            <InputField
              type="email"
              name="email"
              placeholder="stephen@gmail.com"
              id="email"
              label="Email Address"
              errMsg="invalid email input"
            />
            <InputPhone />
            <div className="form-group-wrap">
              <InputField
                type="date"
                name="date_of_birth"
                placeholder=""
                id="date_of_birth"
                label="Date of Birth"
                errMsg="invalid input"
              />
              <SelectField
                label="Gender"
                name="gender"
                selectOption={[
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                ]}
              />
            </div>
            <div className="form-group-wrap">
              <div className="form-group">
                <CustomFlagDropDown />
              </div>

              <SelectField
                label="state"
                name="state"
                selectOption={[
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                ]}
              />
            </div>

            <div className="residential_info">
              <p className="header_text">Residential Address</p>
              <div className="form-group-wrap">
                <InputField
                  type="text"
                  name="flat_no"
                  placeholder=""
                  id="flat_no"
                  label="Flat/Unit No"
                  errMsg="invalid input"
                />
                <InputField
                  type="text"
                  name="building_name"
                  placeholder=""
                  id="building_name"
                  label="Building Name/No"
                  errMsg="invalid input"
                />
              </div>
            </div>

            <InputField
              type="text"
              name="street"
              placeholder=""
              id="street"
              label="Street"
              errMsg="invalid input"
            />

            <div className="form-group-wrap">
              <InputField
                type="text"
                name="postal_code"
                placeholder=""
                id="postal_code"
                label="Postal Code"
                errMsg="invalid input"
              />
              <InputField
                type="text"
                name="city"
                placeholder=""
                id="city"
                label="City/Town"
                errMsg="invalid input"
              />
            </div>

            <div className="file_upload">
              <p className="text_head">Upload proof of residency</p>
              <p className="sub_text">
                Proof accepted includes, bank or credit card statement showing
                addressing, utility bills showing address
              </p>

              <div className="cover_file">
                <label htmlFor="residency">
                  <p className="upload">{upload ? upload : "Upload File"}</p>
                </label>
                <input
                  onChange={(e) => {
                    // let url = URL.createObjectURL(e.target.files[0]);
                    setUpload(e.target.files[0].name);
                  }}
                  hidden
                  type="file"
                  name="residency"
                  id="residency"
                />
              </div>
            </div>

            <SubmitBtn
              disabled={false}
              isLoading={false}
              btnText={"Continue"}
            />
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default PersonalInfo;
