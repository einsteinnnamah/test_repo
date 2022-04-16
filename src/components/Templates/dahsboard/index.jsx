import NavbarDashboard from "components/NavbarDashboard";
import Sidebar from "components/Sidebar";
import "./style.scss";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const DashboardLayout = () => {
  const [toggleNav, setToggleNav] = useState(true);
  return (
    <div className="dashboard_layout">
      <Sidebar toggleNav={toggleNav} setToggleNav={setToggleNav} />
      <div className="main_side">
        <NavbarDashboard toggleNav={toggleNav} setToggleNav={setToggleNav} />
        <div className="screen_content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
