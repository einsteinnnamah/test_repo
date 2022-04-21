import LanguageDropDown from "components/InputFields/languageDropDown";
import SubmitBtn from "components/SubmitBtn/SubmitBtn";
import { FormProvider, useForm } from "react-hook-form";
import lan from "../../../assets/drawables/lan.svg";
import SettingHead from "./settingHead";
const Language = () => {
  const methods = useForm();
  const onSubmit = (val) => {
    console.log(val);
  };
  return (
    <div className="pd_language">
      <div className="setting_box">
        <SettingHead
          img={lan}
          title={"Language Settings"}
          desc={"Select your default language"}
        />
        <div className="language_box">
          <FormProvider {...methods}>
            <form>
              <LanguageDropDown />
              <div className="cover_btn">
                <div className="btn_box">
                  <SubmitBtn btnText={"Save Changes"} />
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default Language;
