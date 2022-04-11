import "./index.css";
import TopNavbar from "components/navbar/top_navbar";
import BottomNav from "components/navbar/bottom_navbar";
import Header from "components/header";
import Market from "components/market";
import Modal from "components/ModalPopUp";
import { useState } from "react";
import SignUpModal from "components/SignUpModal";

const Landing = () => {
  const [openModal, setOpenModal] = useState(true);
  return (
    <div className={"landing_wrapper"}>
      <TopNavbar />
      <BottomNav />
      <Header />
      <Market />
      <Modal closeModal={() => setOpenModal(false)} openModal={openModal}>
        <SignUpModal />
      </Modal>
    </div>
  );
};

export default Landing;
