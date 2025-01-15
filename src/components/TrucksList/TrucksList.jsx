import TruckCard from "../TruckCard/TruckCard";
import "./TrucksList.css";

const TrucksList = ({ hits }) => {
  return (
    <ul className="trucks-list">
      {hits.map((el) => (
        <li key={el.id}>
          <TruckCard item={el} />
        </li>
      ))}
    </ul>
  );
};

export default TrucksList;
