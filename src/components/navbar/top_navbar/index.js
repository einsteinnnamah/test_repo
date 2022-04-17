import React from "react";
import "./index.css";
import Modal from "components/ModalPopUp";
import { useState } from "react";
import SignUpModal from "components/SignUpModal";
import { useNavigate } from "react-router-dom";
import ReactFlagsSelect from "react-flags-select";
import sun from "../../../assets/drawables/sun.svg";
import moon from "../../../assets/drawables/moon.svg";
import Switch from "react-switch";

const TopNavbar = () => {
  const [selected, setSelected] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };

  return (
    <div className="topnav">
      <div className="topnav-left">
        <h6>Personal</h6>
        <div className="divider" />
        <h6>Business</h6>
      </div>
      <div className="topnav-right">
        <div className="topnav-links">
          <p>How it works</p>
          <p>Markets</p>
          <p>Forex Trading</p>
          {/* <select name="" id="">
            <option value="en-US">English</option>
            <option value="fr">French</option>
          </select> */}
        </div>
        <div className="selectLang">
          <ReactFlagsSelect
            selected={selected}
            countries={["GB", "FR", "DE", "IT", "CN", "ES", "SA"]}
            customLabels={{
              GB: "ENGLISH",
              FR: "FRENCH",
              DE: "GERMAN",
              IT: "ITALIAN",
              CN: "CHINESE",
              ES: "SPANISH",
              SA: "ARABIC",
            }}
            onSelect={(code) => setSelected(code)}
            placeholder="Pick Language"
          />
        </div>
        <div className="topnav-login">
          <p
            onClick={() => {
              navigate("/login");
            }}
          >
            Log In
          </p>
          <button
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Sign Up
          </button>
        </div>
        <div className="topnav-mode">
          <img src={sun} alt="sun" />
          <label>
            <Switch
              onChange={handleChange}
              checked={checked}
              className="react-switch"
            />
          </label>
          <img src={moon} alt="moon" />
        </div>
      </div>

      <Modal closeModal={() => setOpenModal(false)} openModal={openModal}>
        <SignUpModal />
      </Modal>
    </div>
  );
};

export default TopNavbar;
