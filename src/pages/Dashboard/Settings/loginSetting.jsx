import SettingHead from "./settingHead";
import log from "../../../assets/drawables/log.svg";
import guard from "../../../assets/drawables/guard.svg";
import { FormProvider, useForm } from "react-hook-form";
import InputField from "components/InputFields";
import SubmitBtn from "components/SubmitBtn/SubmitBtn";
const LoginSetting = () => {
  const methods = useForm();
  const onSubmit = (val) => {
    console.log(val);
  };
  return (
    <div className="pd_login_setting">
      <div className="setting_box">
        <SettingHead
          img={log}
          title={"Login Settings"}
          desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, "}
        />
        <div className="log_setting">
          <div className="left_log">
            <p className="bold">Your Email Address</p>
            <div className="email_box">
              <p>Adekanbimichael@gmail.com</p>
              <span>
                {" "}
                <img src={guard} alt="" />
                Email Verified
              </span>
            </div>

            <FormProvider {...methods}>
              <p className="form_title">Change Password</p>
              <p className="sub">
                Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
              </p>
              <form onSubmit={methods.handleSubmit(onSubmit)} action="">
                <InputField
                  type="password"
                  name="current_password"
                  id="password"
                  placeholder="Current Password"
                  errMsg="invalid input"
                />
                <InputField
                  type="password"
                  name="new_password"
                  id="password"
                  placeholder="New Password"
                  errMsg="invalid input"
                />
                <InputField
                  type="password"
                  name="confirm_password"
                  id="password"
                  placeholder="Confirm new password"
                  errMsg="invalid input"
                />
                <div className="cover_btn">
                  <div className="btn_box">
                    <SubmitBtn
                      disabled={false}
                      isLoading={false}
                      btnText={"Save Changes"}
                    />
                  </div>
                </div>
              </form>
            </FormProvider>
          </div>
          <div className="right_log">
            <p className="bold">Login activities</p>
            <table>
              <thead>
                <th>Time</th>
                <th>Location</th>
                <th>I.P. Address</th>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
                  return (
                    <tr>
                      <td>2022-02-25 07:17:02</td>
                      <td>Nigeria</td>
                      <td>105.112.29.34</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSetting;
