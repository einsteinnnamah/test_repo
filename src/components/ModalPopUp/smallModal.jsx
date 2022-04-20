import { Fade, Slide } from "@mui/material";

import "./style.scss";

const SmallModal = ({ children, closeModal, openModal = true }) => {
  return (
    <Fade in={openModal}>
      <div
        onClick={(e) => e.target === e.currentTarget && closeModal()}
        className="pd-modal small"
      >
        <Slide direction="up" in={openModal} mountOnEnter unmountOnExit>
          <div className="popBox2">
            <div className="modal_cover">{children}</div>
          </div>
        </Slide>
      </div>
    </Fade>
  );
};

export default SmallModal;
