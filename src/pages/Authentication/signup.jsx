import InputField from "components/InputFields";
import AuthTemplate from "components/Templates/authTemplate";
import { FormProvider, useForm } from "react-hook-form";
import { ReactComponent as Indicate } from "../../assets/drawables/indicate.svg";
// import { ReactComponent as Apple } from "../../assets/drawables/apple.svg";
// import { ReactComponent as Google } from "../../assets/drawables/google.svg";
// import { ReactComponent as Facebook } from "../../assets/drawables/facebook.svg";
import "./style.scss";

import ContrySelectFlag from "components/InputFields/countrySelectFlag";
import { Checkbox } from "@mui/material";
import SubmitBtn from "components/SubmitBtn/SubmitBtn";
import IconWidget from "components/IconWidget";
import google from "../../assets/drawables/google.svg";
import facebook from "../../assets/drawables/facebook.svg";
import apple from "../../assets/drawables/apple.svg";
import CustomFlagDropDown from "components/InputFields/customFlagDropDown";
const Signup = () => {
  const methods = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="pd_signup">
      <AuthTemplate>
        <p className="header_text">Create an account</p>

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {/* <ContrySelectFlag
              placeholder="Select Country"
              name="country"
              label="Where do you reside?"
            /> */}
            <CustomFlagDropDown />

            <InputField
              type="email"
              name="email"
              placeholder="raji@gmail.com"
              id="email"
              label="Email Address"
              errMsg="invalid email input"
            />

            <InputField
              type="password"
              name="password"
              id="password"
              label="Password"
              errMsg="invalid input"
            />
            <div className="indicate">
              <Indicate className="icon" />
              <p>
                Your password should be at least 8 characters, and include 1
                upper case letter, 1 lower case letter and 1 number
              </p>
            </div>
            <div className="check_container">
              <Checkbox defaultChecked color="secondary" />
              <p>
                I agree to ICE's <a href="/">Terms of Service</a>{" "}
              </p>
            </div>
            <SubmitBtn disabled={true} isLoading={false} btnText={"Sign up"} />
          </form>
          <p className="continue">Or Continue with</p>
          <div className="socials">
            <IconWidget>
              {" "}
              {/* <Google /> */}
              <img src={google} alt="" />
            </IconWidget>
            <IconWidget>
              {" "}
              {/* <Facebook /> */}
              <img src={facebook} alt="" />
            </IconWidget>
            <IconWidget>
              {" "}
              {/* <Apple />{" "} */}
              <img src={apple} alt="" />
            </IconWidget>
          </div>

          <p className="login_text">
            Already have an account?<a href="/"> Log in</a>{" "}
          </p>
        </FormProvider>
      </AuthTemplate>
    </div>
  );
};

export default Signup;
