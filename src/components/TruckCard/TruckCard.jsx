import TruckFeatures from "../TruckFeatures/TruckFeatures";
import { NavLink } from "react-router-dom";
import icons from "../../img/icons.svg";
import "./TruckCard.css";
import FavoriteToggle from "../FavoriteToggle/FavoriteToggle";

const TruckCard = ({ item }) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

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
          <p>{item.name}</p>
          <div className="price">
            <p>&euro;{item.price},00</p>
            <FavoriteToggle />
          </div>
        </div>
        <div className="details">
          <div className="details-rating">
            <svg width="16" height="16">
              <use href={`${icons}#star`}></use>
            </svg>
            <p>
              <u>
                {item.rating} ({item.reviews.length} reviews)
              </u>
            </p>
          </div>
          <div className="details-location">
            <svg width="16" height="16">
              <use href={`${icons}#map`}></use>
            </svg>
            <p>{item.location}</p>
          </div>
        </div>
        <div className="descripton">
          <p> {item.description}</p>
        </div>
        <div className="features">
          <TruckFeatures item={item} />
        </div>
        <NavLink to={`/catalog/${item.id}/features`} target="_blank">
          <button onClick={handleClick}>Show more</button>
        </NavLink>
      </div>
    </div>
  );
};

export default TruckCard;
