const EachLocation = ({ item, handleClick }) => {
  return (
    <div onClick={handleClick} className="pd_each_location">
      <img src={item.img} alt="item.code" />
      <p className="code">{item.code}</p>
      <p className="country_name">{item.country}</p>
    </div>
  );
};

export default EachLocation;
