import { nanoid } from "nanoid";
import FeatureItem from "../FeatureItem/FeatureItem";
import "./TruckFeatures.css";

const TruckFeatures = ({ keys }) => {
  return (
    <div className="bages">
      {keys.map((el) => (
        <div key={nanoid()}>
          <FeatureItem name={el} />
        </div>
      ))}
    </div>
  );
};

export default TruckFeatures;
