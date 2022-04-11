import "./index.css";
import TopNavbar from "components/navbar/top_navbar";
import BottomNav from "components/navbar/bottom_navbar";
import Header from "components/header";
import Market from "components/market";

const Landing = () => {
  return (
    <div className={"landing_wrapper"}>
      <TopNavbar />
      <BottomNav />
      <Header />
      <Market />
    </div>
  );
};

export default Landing;
