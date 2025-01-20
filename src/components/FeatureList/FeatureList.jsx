import "./FeatureList.css";
import TruckFeatures from "../TruckFeatures/TruckFeatures";
import { useSelector } from "react-redux";
import { selectTruck } from "../../redux/trucksSlice";
import { camelCaseToWords } from "../../utils/utils";

const FeatureList = () => {
  const item = useSelector(selectTruck);

  return (
    <div className="feature-info">
      {Object.keys(item).length != 0 && (
        <div className="feature-list">
          <TruckFeatures item={item} />
        </div>
      )}
      {Object.keys(item).length != 0 && (
        <div className="feature-specs">
          <h3>Vehicle details</h3>
          <hr />
          <ul>
            <li>
              <p>Form</p>
              <p>{camelCaseToWords(item.form)}</p>
            </li>
            <li>
              <p>Length</p>
              <p>{item.length}</p>
            </li>
            <li>
              <p>Width</p>
              <p>{item.width}</p>
            </li>
            <li>
              <p>Height</p>
              <p>{item.height}</p>
            </li>
            <li>
              <p>Tank</p>
              <p>{item.tank}</p>
            </li>
            <li>
              <p>Consumption</p>
              <p>{item.consumption}</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default FeatureList;
