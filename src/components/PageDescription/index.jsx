import "./style.scss";
const PageDescription = ({ title, description, date }) => {
  return (
    <div className="pd_page_description">
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      <p className="date">{date}</p>
    </div>
  );
};

export default PageDescription;
