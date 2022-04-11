import "./style.scss";
const AuthTemplate = ({ children }) => {
  return (
    <div className="pd_auth_template">
      <div className="left_container">
        <div className="center_container">{children}</div>
      </div>
      <div className="right_container"></div>
    </div>
  );
};

export default AuthTemplate;
