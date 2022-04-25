import { Checkbox } from "@mui/material";
import SubmitBtn from "components/SubmitBtn/SubmitBtn";
import not from "../../../assets/drawables/not.svg";
import SettingHead from "./settingHead";
const Notification = () => {
  return (
    <div className="pd_notification">
      <div className="setting_box">
        <SettingHead
          img={not}
          title={"Notification Settings"}
          desc={"Please choose how you want to receive updates"}
        />

        <div className="notify_table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Push</th>
                <th>SMS</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((item) => {
                return (
                  <tr>
                    <td>
                      <p className="bold">Your Trading Activities</p>
                      <p className="faint">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod{" "}
                      </p>
                    </td>
                    <td>
                      <Checkbox />
                    </td>
                    <td>
                      <Checkbox />
                    </td>
                    <td>
                      <Checkbox />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="cover_btn">
            <div className="btn_box">
              <SubmitBtn btnText={"Save Changes"} />
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
