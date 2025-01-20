import icons from "../../img/icons.svg";
import "./CustomRadioButton.css";

const CustomRadioButton = ({ label, checked, onChange, value }) => {
  return (
    <label className="custom-radio">
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        value={value}
      />
      <div className="radio-btn">
        <svg className="type-icon" width="32" height="32">
          <use href={`${icons}#${value}`}></use>
        </svg>
        <p className="type-label">{label}</p>
      </div>
    </label>
  );
};

export default CustomRadioButton;
