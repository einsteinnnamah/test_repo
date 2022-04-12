import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ReactComponent as Mark } from "../../assets/drawables/mark.svg";
// import { ReactComponent as Woman } from "../../assets/drawables/woman.svg";
// import { ReactComponent as Bag } from "../../assets/drawables/bag.svg";

import woman from "../../assets/drawables/woman.svg";
import bag from "../../assets/drawables/bag.svg";
import "./style.scss";
import SubmitBtn from "components/SubmitBtn/SubmitBtn";
import { useNavigate } from "react-router-dom";
const SignUpModal = () => {
  const methods = useForm();
  const navigate = useNavigate();
  const accountList = [
    { type: "personal", img: woman },
    { type: "business", img: bag },
  ];
  const [accountType, setAccountType] = useState("");
  const handleAccount = (val) => {
    console.log(val);
    setAccountType(val);
  };
  const onSubmit = (val) => {
    console.log(val);
    navigate(`/signup/${val.account}`);
  };
  return (
    <div className="pd_signup_modal">
      <p className="first_text">Start your registration</p>
      <p className="sec_text">What type of account will you like to create?</p>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="flex">
            {accountList.map((el) => (
              <label
                className={`box ${accountType === el.type ? "active" : ""}`}
                key={el.type}
              >
                <div className="top">
                  <img src={el.img} alt="" />
                </div>
                <div className="bottom">
                  <p> {el.type.toUpperCase()} </p>
                  {accountType === el.type && <Mark />}
                </div>
                <input
                  hidden
                  value={el.type}
                  type={"radio"}
                  name="account"
                  {...methods.register("account", {
                    required: "Select An account",
                    onChange: (e) => {
                      handleAccount(e.target.value);
                    },
                  })}
                />
              </label>
            ))}
          </div>
          <SubmitBtn disabled={false} isLoading={false} btnText={"Continue"} />
        </form>
      </FormProvider>
    </div>
  );
};

export default SignUpModal;
