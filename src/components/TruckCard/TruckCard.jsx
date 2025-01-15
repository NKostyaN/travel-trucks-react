import TruckFeatures from "../TruckFeatures/TruckFeatures";
import "./TruckCard.css";

const TruckCard = ({ item }) => {
  const handleClick = () => {
    console.log(item.id, item.name);
  };

  const availableFeatures = Object.keys(item).filter(
    (key) => item[key] === true
  );

  return (
    <div className="card">
      <img
        src={item.gallery[0].thumb}
        alt="Truck photo"
        width="292"
        height="320"
      />
      <div className="info">
        <div className="title">
          {/* <p>{item.id}</p> */}
          {/* <h2> */}
          <p>{item.name}</p>
          <p>&euro;{item.price},00 &#9825;</p>
          {/* </h2> */}
        </div>
        <div className="details">
          <p>{item.rating}</p>
          <p>{item.location}</p>
        </div>
        <div className="descripton">
          <p> {item.description}</p>
        </div>
        <div className="features">
          <TruckFeatures item={item} keys={availableFeatures} />
        </div>
        <button onClick={handleClick}>Show more</button>
      </div>
    </div>
  );
};

export default TruckCard;
