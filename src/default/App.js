import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landing";
import Signup from "../pages/Authentication/signup";
import VerifyPhone from "../pages/Authentication/verifyPhone";
import Otp from "../pages/Authentication/Otp";
import Login from "../pages/Authentication/login";

import SelectForm from "../pages/Authentication/CompleteRegistration/selectForm";
import PersonalInfo from "../pages/Authentication/CompleteRegistration/personalInfo";

function App() {
  return (
    <div className="app_wrapper">
      <Routes>
        <Route index path="/" element={<LandingPage />} />
        <Route index path="/signup/:account" element={<Signup />} />
        <Route index path="/verify" element={<VerifyPhone />} />
        <Route index path="/otp" element={<Otp />} />
        <Route index path="/login" element={<Login />} />
        <Route index path="/complete" element={<SelectForm />} />
        <Route index path="/complete/profile" element={<PersonalInfo />} />
      </Routes>
    </div>
  );
}

export default App;
