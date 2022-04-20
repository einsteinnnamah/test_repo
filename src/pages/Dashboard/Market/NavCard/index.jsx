import { Avatar, Button, Radio } from "@mui/material";
import DropDownWrapper from "components/DropDownWrapper";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { ReactComponent as LogOutIcon } from "../../../../assets/drawables/logout.svg";
import avatar from "../../../../assets/drawables/avatar.png";
import bell from "../../../../assets/drawables/bell.svg";

import "./style.scss";
import { useState } from "react";
const NavCard = ({ active }) => {
  return (
    <div className="pd_nav_card">
      <div className="cover">
        <div className="box_first">
          <div className={`side ${active === "amount" ? "active" : ""}`}>
            <p>Amount</p>{" "}
            <Radio
              value="a"
              onChange={() => {}}
              name="radio-buttons"
              inputProps={{ "aria-label": "A" }}
              checked={true}
            />{" "}
          </div>
          <div className="separatorline"></div>
          <div className={`side ${active === "payment" ? "active" : ""}`}>
            <p>Payment</p>{" "}
            <Radio
              value="a"
              onChange={() => {}}
              name="radio-buttons"
              inputProps={{ "aria-label": "A" }}
              checked={true}
            />{" "}
          </div>
        </div>

        <div className="right">
          <div className="cover_drop">
            <DropDownWrapper
              action={
                <Button
                  startIcon={
                    <Avatar
                      sx={{ width: 25, height: 25 }}
                      alt="Remy Sharp"
                      src={avatar}
                    />
                  }
                  endIcon={<ArrowDropDownIcon />}
                  sx={{ p: "0.5rem" }}
                  className="profile-action"
                >
                  <p className="name_action">Ademola</p>
                </Button>
              }
              className="profile-drop-down"
            >
              <Button onClick={() => {}} startIcon={<LogOutIcon />}>
                Logout
              </Button>
            </DropDownWrapper>
          </div>
          <button className="notification">
            <img src={bell} alt="bell" />3
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavCard;
