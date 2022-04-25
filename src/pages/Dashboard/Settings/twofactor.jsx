import two from "../../../assets/drawables/lan.svg";
import sms from "../../../assets/drawables/sms.svg";
import SettingHead from "./settingHead";
import guard from "../../../assets/drawables/guard.svg";
import { useState } from "react";
import Modal from "components/ModalPopUp";
import TwoFaModal from "./twofaModal";
const TwoFactor = () => {
  const [isEnable, setIsEnable] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="pd_two">
      <div className="setting_box">
        <SettingHead
          img={two}
          title={"Two-Factor Authentication"}
          desc={"Used for log in, withdrawals and changes to security settings"}
        />
        <div className="two_box">
          <img src={sms} alt="sms" />
          <p className="sms">SMS Authentication</p>
          {!isEnable && <p className="setup">Not setup</p>}
          {isEnable && (
            <div className="show_enable">
              <div className="active_enable">
                <img src={guard} alt="" />
                <p>
                  Active : <span>(SMS or voice call)</span>
                </p>
              </div>
              <div className="show_number">
                <p className="security">We will security code via SMS to:</p>
                <p className="phone">+234808472***6</p>
              </div>
            </div>
          )}
          {isEnable ? (
            <button className="disenable">Disenable</button>
          ) : (
            <button
              onClick={() => {
                setOpenModal(true);
              }}
              className="enable"
            >
              <img src={guard} alt="guard" />
              Enable
            </button>
          )}
        </div>
      </div>

      <Modal
        title={"Enable SMS Authentication"}
        closeModal={() => setOpenModal(false)}
        openModal={openModal}
      >
        <TwoFaModal
          setIsEnable={() => {
            setIsEnable(true);
          }}
          closeModal={() => setOpenModal(false)}
        />
      </Modal>
    </div>
  );
};

export default TwoFactor;
