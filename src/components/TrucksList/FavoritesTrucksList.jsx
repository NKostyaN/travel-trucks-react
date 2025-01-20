import "./TrucksList.css";
import { useSelector } from "react-redux";
import TruckCard from "../TruckCard/TruckCard";

const FavoritesTrucksList = ({ hits }) => {
  const favorites = useSelector((state) => state.trucks.favorites);

  return (
    <ul className="trucks-list">
      {hits.map(
        (el) =>
          Object.keys(favorites).includes(el.id) &&
          favorites[el.id] && (
            <li key={el.id}>
              <TruckCard item={el} />
            </li>
          )
      )}
    </ul>
  );
};

export default FavoritesTrucksList;
