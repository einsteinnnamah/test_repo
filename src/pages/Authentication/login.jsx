import InputField from "components/InputFields";
import AuthTemplate from "components/Templates/authTemplate";
import { FormProvider, useForm } from "react-hook-form";
import { ReactComponent as Indicate } from "../../assets/drawables/indicate.svg";
// import { ReactComponent as Apple } from "../../assets/drawables/apple.svg";
// import { ReactComponent as Google } from "../../assets/drawables/google.svg";
// import { ReactComponent as Facebook } from "../../assets/drawables/facebook.svg";
import "./style.scss";
import SubmitBtn from "components/SubmitBtn/SubmitBtn";
import IconWidget from "components/IconWidget";
import google from "../../assets/drawables/google.svg";
import facebook from "../../assets/drawables/facebook.svg";
import apple from "../../assets/drawables/apple.svg";
import lock from "../../assets/drawables/lock.svg";
import { Link } from "react-router-dom";
import Modal from "components/ModalPopUp";
import LoginModal from "components/LoginModal";
import { useState } from "react";
const Login = () => {
  const methods = useForm();
  const [openModal, setOpenModal] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
    setOpenModal(true);
  };
  return (
    <div className="pd_signup">
      <AuthTemplate>
        <p className="header_text">Welcome Back</p>

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
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

            <Link className="forgot" to="/signup">
              Forgot Password
            </Link>

            <SubmitBtn
              disabled={false}
              isLoading={false}
              icon={lock}
              btnText={"Sign in"}
            />
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
            I don’t have an account?<Link to="/"> Sign Up</Link>{" "}
          </p>
        </FormProvider>
      </AuthTemplate>

      <Modal closeModal={() => setOpenModal(false)} openModal={openModal}>
        <LoginModal />
      </Modal>
    </div>
  );
};

export default Login;
