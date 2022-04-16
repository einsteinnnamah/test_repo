import "./App.css";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "../pages/landing";
import Signup from "../pages/Authentication/signup";
import VerifyPhone from "../pages/Authentication/verifyPhone";
import Otp from "../pages/Authentication/Otp";
import Login from "../pages/Authentication/login";
import SelectForm from "../pages/Authentication/CompleteRegistration/selectForm";
import PersonalInfo from "../pages/Authentication/CompleteRegistration/personalInfo";
import IdentityInfo from "../pages/Authentication/CompleteRegistration/proofOfIdentity";
import MarketPage from "../pages/Market/index";
import CurrencyPage from "../pages/Market/currencypage";
import DashboardLayout from "components/Templates/dahsboard";
import Home from "../pages/Dashboard/Home";

function App() {
  const user = true;
  const PrivateRoute = ({ children }) => {
    let location = useLocation();
    return (
      <>{user ? children : <Navigate to="/" state={{ from: location }} />}</>
    );
  };
  return (
    <div className="app_wrapper">
      <Routes>
        {/* public routes */}
        <Route index path="/" element={<LandingPage />} />
        <Route index path="/signup/:account" element={<Signup />} />
        <Route index path="/verify" element={<VerifyPhone />} />
        <Route index path="/otp" element={<Otp />} />
        <Route index path="/login" element={<Login />} />
        <Route index path="/complete" element={<SelectForm />} />
        <Route index path="/complete/profile" element={<PersonalInfo />} />
        <Route index path="/complete/identity" element={<IdentityInfo />} />
        <Route index path="/market" element={<MarketPage />} />
        <Route index path="/market/:id" element={<CurrencyPage />} />

        {/* private routes */}

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route path="" element={<Home />} />
          {/* you can change the component here, please do no change the path */}
          <Route path="markets" element={<Home />} />
          <Route path="portfolio" element={<Home />} />
          <Route path="bank" element={<Home />} />
          <Route path="profile" element={<Home />} />
          <Route path="referral" element={<Home />} />
          <Route path="settings" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
