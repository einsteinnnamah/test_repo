const EachLanguage = ({ item, handleClick }) => {
  return (
    <div onClick={handleClick} className="pd_each_location eachlang">
      <p className="country_name">{item.country}</p>
    </div>
  );
};

export default EachLanguage;
