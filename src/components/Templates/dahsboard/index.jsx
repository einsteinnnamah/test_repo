import NavbarDashboard from "components/NavbarDashboard";
import Sidebar from "components/Sidebar";
import "./style.scss";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="dashboard_layout">
      <Sidebar />
      <div className="main_side">
        <NavbarDashboard />
        <div className="screen_content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
