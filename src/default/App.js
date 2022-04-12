import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landing";
import Signup from "../pages/Authentication/signup";
import VerifyPhone from "../pages/Authentication/verifyPhone";
import Otp from "../pages/Authentication/Otp";

function App() {
  return (
    <div className="app_wrapper">
      <Routes>
        <Route index path="/" element={<LandingPage />} />
        <Route index path="/signup/:account" element={<Signup />} />
        <Route index path="/verify" element={<VerifyPhone />} />
        <Route index path="/otp" element={<Otp />} />
      </Routes>
    </div>
  );
}

export default App;
