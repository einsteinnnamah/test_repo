import { Fade, IconButton, Slide } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

import "./style.scss";
import cancel from "../../assets/drawables/cancel.svg";
const Modal = ({ children, closeModal, openModal = true, title }) => {
  return (
    <Fade in={openModal}>
      <div
        onClick={(e) => e.target === e.currentTarget && closeModal()}
        className="pd-modal"
      >
        <Slide direction="up" in={openModal} mountOnEnter unmountOnExit>
          <div className="popBox2">
            <div className="top">
              <img src={cancel} className="cancel" alt="cancel" />
            </div>

            {children}
          </div>
        </Slide>
      </div>
    </Fade>
  );
};

export default Modal;
