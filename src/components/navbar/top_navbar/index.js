import React from "react";
import "./index.css";
import Modal from "components/ModalPopUp";
import { useState } from "react";
import SignUpModal from "components/SignUpModal";
import { useNavigate } from "react-router-dom";
import ReactFlagsSelect from "react-flags-select";
import sun from "../../../assets/drawables/sun.svg";
import moon from "../../../assets/drawables/moon.svg";
import "./style.scss";
const TopNavbar = () => {
  const [selected, setSelected] = useState("GB");
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };

  return (
    <>
      <header className="App-header">
        <nav>
          <p>
            <span>Personal</span>
            <span className="dot">|</span>
            <span>Business</span>
          </p>
          <ul className="navList">
            <li>How it works</li>
            <li>Markets</li>
            <li>Forex Trading</li>
          </ul>
          <div className="selectLang">
            {/* <ReactLanguageSelect
          defaultLanguage="en"
          showSelectedLabel={true}
          showOptionLabel={true}
          selectedSize={14}
          optionsSize={14}
        /> */}
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
          <div className="btnDiv">
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="login"
            >
              Login
            </button>
            <button
              onClick={() => {
                setOpenModal(true);
              }}
              className="signup"
            >
              Sign Up
            </button>
          </div>
          <div className="toggleSide">
            <img src={sun} alt="sun" />
            <div className="togDiv">
              <label className="switch">
                <input
                  checked={toggle}
                  onClick={handleToggle}
                  type="checkbox"
                />
                <span className="slider round"></span>
              </label>
            </div>
            <img src={moon} alt="moon" />
          </div>
        </nav>
      </header>
      <Modal closeModal={() => setOpenModal(false)} openModal={openModal}>
        <SignUpModal />
      </Modal>
    </>
    // <div className="topnav">
    //   <div className="topnav-left">
    //     <h6>Personal</h6>
    //     <div className="divider" />
    //     <h6>Business</h6>
    //   </div>
    //   <div className="topnav-right">
    //     <div className="topnav-links">
    //       <p>How it works</p>
    //       <p>Markets</p>
    //       <p>Forex Trading</p>
    //       {/* <select name="" id="">
    //         <option value="en-US">English</option>
    //         <option value="fr">French</option>
    //       </select> */}
    //     </div>
    //     <div className="selectLang">
    //       <ReactFlagsSelect
    //         selected={selected}
    //         countries={["GB", "FR", "DE", "IT", "CN", "ES", "SA"]}
    //         customLabels={{
    //           GB: "ENGLISH",
    //           FR: "FRENCH",
    //           DE: "GERMAN",
    //           IT: "ITALIAN",
    //           CN: "CHINESE",
    //           ES: "SPANISH",
    //           SA: "ARABIC",
    //         }}
    //         onSelect={(code) => setSelected(code)}
    //         placeholder="Pick Language"
    //       />
    //     </div>
    //     <div className="topnav-login">
    //       <p
    //         onClick={() => {
    //           navigate("/login");
    //         }}
    //       >
    //         Log In
    //       </p>
    //       <button
    //         onClick={() => {
    //           setOpenModal(true);
    //         }}
    //       >
    //         Sign Up
    //       </button>
    //     </div>
    //     <div className="topnav-mode">
    //       <img src={sun} alt="sun" />
    //       <label>
    //         <Switch
    //           onChange={handleChange}
    //           checked={checked}
    //           className="react-switch"
    //         />
    //       </label>
    //       <img src={moon} alt="moon" />
    //     </div>
    //   </div>

    // </div>
  );
};

export default TopNavbar;
