import "./index.css";
import TopNavbar from "components/navbar/top_navbar";
import BottomNav from "components/navbar/bottom_navbar";
import Header from "components/header";
import Market from "components/market";
import Transfer from "components/Transfer";
import Transactions from "components/Transactions";
import Referral from "components/Referral";
import VirtualCard from "components/VirtualCard";

const Landing = () => {
  return (
    <div className={"landing_wrapper"}>
      <TopNavbar />
      <BottomNav />
      <Header />
      <Market />
      <Transfer />
      <Transactions />
      <Referral />
      <VirtualCard />
    </div>
  );
};

export default Landing;
