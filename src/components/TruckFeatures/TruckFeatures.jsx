import "./TruckFeatures.css";
import { nanoid } from "nanoid";
import FeatureItem from "../FeatureItem/FeatureItem";

const TruckFeatures = ({ item }) => {
  const availableFeatures = Object.keys(item).filter(
    (key) => item[key] === true
  );

  return (
    <div className="bages">
      <FeatureItem name="transmission" value={item.transmission} />
      <FeatureItem name="engine" value={item.engine} />
      {availableFeatures.map((el) => (
        <FeatureItem value={el} key={nanoid()} />
      ))}
    </div>
  );
};

export default TruckFeatures;
