import "./CustomToggle.css";
import icons from "../../img/icons.svg";

const CustomToggle = ({ label, checked, onChange, value }) => {
  return (
    <label className="custom-toggle">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        value={value}
        label={label}
      />
      <div className="toggle-btn">
        <svg className="toggle-icon" width="32" height="32">
          <use href={`${icons}#${value}`}></use>
        </svg>
        <p className="toggle-label">{label}</p>
      </div>
    </label>
  );
};

export default CustomToggle;
