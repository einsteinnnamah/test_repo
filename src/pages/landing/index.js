import "./index.css";
import TopNavbar from "components/navbar/top_navbar";
import BottomNav from "components/navbar/bottom_navbar";
import Header from "components/header";
import Market from "components/market";
import Transfer from "components/Transfer";

const Landing = () => {
  return (
    <div className={"landing_wrapper"}>
      <TopNavbar />
      <BottomNav />
      <Header />
      <Market />
      <Transfer />
    </div>
  );
};

export default Landing;
