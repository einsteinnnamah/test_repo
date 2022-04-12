import InputPhone from "components/InputFields/inputPhone";
import PhoneInputField from "components/InputFields/PhoneInputField";
import SubmitBtn from "components/SubmitBtn/SubmitBtn";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./style.scss";
const VerifyPhone = () => {
  const methods = useForm();
  const onSubmit = (val) => {
    console.log(val);
  };
  return (
    <div className="pd_verify_phone">
      <div className="center_container">
        <p className="header_text">Verify your mobile number</p>
        <p className="sub_header_text">
          We are verifying your mobile number to keep your account secure 🔐. A
          code will be sent to you
        </p>
        <FormProvider {...methods}>
          <form
            onSubmit={() => {
              methods.handleSubmit(onSubmit);
            }}
          >
            <InputPhone />
            <SubmitBtn
              disabled={false}
              isLoading={false}
              btnText={"Send Verification Code"}
            />
          </form>
        </FormProvider>
        <Link className="later_link" to="/">
          I will do this later
        </Link>
      </div>
    </div>
  );
};

export default VerifyPhone;
