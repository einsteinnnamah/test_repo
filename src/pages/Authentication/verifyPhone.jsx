import PhoneInputField from "components/InputFields/PhoneInputField";
import SubmitBtn from "components/SubmitBtn/SubmitBtn";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./style.scss";
const VerifyPhone = () => {
  const methods = useForm();
  return (
    <div className="pd_verify_phone">
      <div className="center_container">
        <p className="header_text">Verify your mobile number</p>
        <p className="sub_header_text">
          We are verifying your mobile number to keep your account secure 🔐. A
          code will be sent to you
        </p>
        <FormProvider {...methods}>
          <PhoneInputField
            name="phone"
            id="phone"
            label="Enter mobile number"
            errMsg="invalid number input"
          />
          <SubmitBtn
            disabled={true}
            isLoading={false}
            btnText={"Send Verification Code"}
          />
        </FormProvider>
        <Link className="later_link" to="/">
          I will do this later
        </Link>
      </div>
    </div>
  );
};

export default VerifyPhone;
