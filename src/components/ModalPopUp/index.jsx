import { Fade, IconButton, Slide } from "@mui/material";

import "./style.scss";
import cancel from "../../assets/drawables/cancel.svg";
const Modal = ({
  children,
  closeModal,
  openModal = true,
  title,
  noCancel = false,
}) => {
  return (
    <Fade in={openModal}>
      <div
        onClick={(e) => e.target === e.currentTarget && closeModal()}
        className="pd-modal"
      >
        <Slide direction="up" in={openModal} mountOnEnter unmountOnExit>
          <div className="popBox2">
            <div className="top">
              <p className="title">{title}</p>
              {!noCancel && (
                <img
                  onClick={closeModal}
                  src={cancel}
                  className="cancel"
                  alt="cancel"
                />
              )}
            </div>
            <div className="modal_cover">{children}</div>
          </div>
        </Slide>
      </div>
    </Fade>
  );
};

export default Modal;
