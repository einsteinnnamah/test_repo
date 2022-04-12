import "./style.scss";
const SubmitBtn = ({
  isLoading,
  btnText,
  className,
  style,
  disabled,
  ...others
}) => {
  return (
    <button
      type="submit"
      style={style}
      className={`btn-primary submit-btn ${className ? className : ""} ${
        disabled || isLoading ? "disabled" : ""
      } `}
      disabled={disabled || isLoading}
      {...others}
    >
      {isLoading ? <div className="spin" /> : btnText}
    </button>
  );
};

export default SubmitBtn;
