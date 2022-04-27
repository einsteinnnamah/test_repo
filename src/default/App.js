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
// import Bank from "../pages/Dashboard/Bank";
import MarketDashboard from "../pages/Dashboard/Market";
import EachMarket from "../pages/Dashboard/Market/EachMarket";
import CardInvest from "../pages/Dashboard/Market/Invest/index";
import SetCard from "../pages/Dashboard/Market/SetCard";
import SetBank from "../pages/Dashboard/Market/SetBank";
import Receipt from "../pages/Dashboard/Market/Receipt";
import SendMoneyIce from "../pages/Dashboard/Market/SendMoneyIce";
import Setting from "../pages/Dashboard/Settings";
import Notification from "../pages/Dashboard/Settings/notification";
import Language from "../pages/Dashboard/Settings/language";
import LoginSetting from "../pages/Dashboard/Settings/loginSetting";
import TwoFactor from "../pages/Dashboard/Settings/twofactor";
import Portfolio from "../pages/Dashboard/Portfolio";
import EachPortfolio from "../pages/Dashboard/Portfolio/EachPortfolio";
import Bank from "../pages/Dashboard/Bank/CreateCard/index";
import UserCard from "../pages/Dashboard/Bank/BankCard/index"
import CardTrans from "../pages/Dashboard/Bank/BankCard/CardTrans";
import Account from "../pages/Dashboard/Bank/Account";
import Overview from "../pages/Dashboard/Referral/Overview";
import ByCurrency from "../pages/Dashboard/Referral/ByCurrency";
import Profile from "../pages/Dashboard/Profile";
import Otherpage from "../pages/otherpage";
import CreateAccount from "../pages/Dashboard/Bank/Account/CreateAccount";



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
          <Route path="markets" element={<MarketDashboard />} />
          <Route path="markets/:id" element={<EachMarket />} />

          <Route path="portfolio" element={<Portfolio />} />
          <Route path="portfolio/:id" element={<EachPortfolio />} />
          <Route path="bank" element={<Bank />} />
          <Route path="profile" element={<Profile />} />
          
  
          <Route path="referral" element={<Overview />} />
          <Route path="settings" element={<Setting />} />
          <Route path="settings/notification" element={<Notification />} />
          <Route path="settings/language" element={<Language />} />
          <Route path="settings/login" element={<LoginSetting />} />
          <Route path="settings/twofactor" element={<TwoFactor />} />
          <Route path="bank/UserCard" element={<UserCard />} />
          <Route path="bank/UserCard/CardTrans" element={<CardTrans />} />
          <Route path="bank/UserCard" element={<CardTrans />} />
          <Route path="bank/Account" element={<Account />} />
          
          <Route path="referral/ByCurrency" element={<ByCurrency/>} />
          <Route path="settings" element={<Home />} />
        </Route>
        {/* outside dashboard */}
        
        <Route path="invest" element={<CardInvest />} />
        <Route path="/invest/setcard" element={<SetCard />} />
        <Route path="/invest/setbank" element={<SetBank />} />
        <Route path="/invest/receipt" element={<Receipt />} />
        <Route path="/invest/sendmoney" element={<SendMoneyIce />} />
        <Route path="Account/CreateAccount" element={<CreateAccount />} />
        <Route path="Otherpage" element={<Otherpage />} />
      </Routes>
    </div>
  );
}

export default App;
