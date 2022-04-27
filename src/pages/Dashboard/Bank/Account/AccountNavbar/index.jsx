import { useState } from "react";
import sun from "assets/drawables/sun.svg";
import moon from "assets/drawables/moon.svg";
import "./style.scss";
import DropDownWrapper from "components/DropDownWrapper";
import { Avatar, Button } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { ReactComponent as LogOutIcon } from "assets/drawables/logout.svg";
import avatar from "assets/drawables/avatar.png";
import bell from "assets/drawables/bell.svg";
import arr from "assets/drawables/sidebar/arr.svg";
import stack from "assets/drawables/sidebar/stack.svg";
const AccountNavbar = ({ setToggleNav, toggleNav }) => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="pd_navbar_dashboard">
      <div className=" accountnavbar right">
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
  );
};

export default AccountNavbar;
