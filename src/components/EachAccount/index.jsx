import "./style.scss";
const Eachaccount = ({ flag, currency, amount }) => {
  return (
    <div className="pd_each_account">
      <div className="top_flex">
        <p>{currency}</p>
        <img src={flag} alt="flag" />
      </div>
      <p className="amount">{amount}</p>
    </div>
  );
};

export default Eachaccount;
