import { useEffect, useRef, useState } from "react";
import "./style.scss";

const DropDownWrapper = ({ action, children, className }) => {
  const [showDropDown, setshowDropDown] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (showDropDown && ref.current && !ref.current.contains(e.target)) {
        setshowDropDown(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showDropDown]);

  return (
    <div ref={ref} className={`drop-down-wrapper ${className || ""}`}>
      <div
        onClick={() => setshowDropDown(!showDropDown)}
        className="drop-down-action"
      >
        {action}
      </div>
      <div
        className={`drop-down-content ${showDropDown ? "show-drop-down" : ""} `}
      >
        {children}
      </div>
    </div>
  );
};

export default DropDownWrapper;
