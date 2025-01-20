import icons from "../../img/icons.svg";
import "./FavoriteToggle.css";

const FavoriteToggle = ({ checked, onChange, value }) => {
  return (
    <label className="favorite-toggle">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        value={value}
      />
      <svg className="favorite-btn" width="24" height="21">
        <use href={`${icons}#hart`}></use>
      </svg>
    </label>
  );
};

export default FavoriteToggle;
