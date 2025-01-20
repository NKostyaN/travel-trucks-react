import "./FavoriteToggle.css";
import icons from "../../img/icons.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites } from "../../redux/trucksSlice";

const FavoriteToggle = ({ id, checked, onChange, value }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.trucks.favorites);
  const setFavorite = (event) => {
    dispatch(addToFavorites({ [id]: event.target.checked }));
  };

  return (
    <label className="favorite-toggle">
      <input
        type="checkbox"
        checked={checked}
        onChange={setFavorite}
        value={value}
      />
      <svg className="favorite-btn" width="24" height="21">
        <use href={`${icons}#hart`}></use>
      </svg>
    </label>
  );
};

export default FavoriteToggle;
