import { Link, useMatch } from "react-router-dom";
import { ReactComponent as Home } from "../../assets/drawables/sidebar/home.svg";
import { ReactComponent as Market } from "../../assets/drawables/sidebar/market.svg";
import { ReactComponent as Bank } from "../../assets/drawables/sidebar/bank.svg";
import { ReactComponent as Profile } from "../../assets/drawables/sidebar/profile.svg";
import { ReactComponent as Portfolio } from "../../assets/drawables/sidebar/portfolio.svg";
import { ReactComponent as Setting } from "../../assets/drawables/sidebar/setting.svg";
import { ReactComponent as Referal } from "../../assets/drawables/sidebar/referal.svg";
import stack from "../../assets/drawables/sidebar/stack.svg";
import arr from "../../assets/drawables/sidebar/arr.svg";
import "./style.scss";
function CustomLink({ children, to, ...props }) {
  let match = useMatch(to !== "" ? `/dashboard/` + to + "/*" : "/dashboard");
  return (
    <Link className={`item ${match ? "active" : ""}`} to={to} {...props}>
      {children}
    </Link>
  );
}
const Sidebar = () => {
  return (
    <div className="pd_sidebar">
      <div className="open_up">
        <img src={arr} alt="arr" />
        <img src={stack} alt="stack" />
      </div>

      <div className="link_side">
        <CustomLink to="">
          <Home className="iconSide" />
          <p>Home</p>
        </CustomLink>

        <CustomLink to="markets">
          <Market className="iconSide" />
          <p>Markets</p>
        </CustomLink>

        <CustomLink to="portfolio">
          <Portfolio className="iconSide" />
          <p>Portfolio</p>
        </CustomLink>

        <CustomLink to="bank">
          <Bank className="iconSide" />
          <p>Bank</p>
        </CustomLink>

        <CustomLink to="profile">
          <Profile className="iconSide" />
          <p>Profile</p>
        </CustomLink>

        <CustomLink to="referral">
          <Referal className="iconSide" />
          <p>Referral</p>
        </CustomLink>

        <CustomLink to="settings">
          <Setting className="iconSide" />
          <p>Settings</p>
        </CustomLink>
      </div>
    </div>
  );
};

export default Sidebar;
