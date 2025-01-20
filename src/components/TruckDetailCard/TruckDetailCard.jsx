import "./TruckDetailCard.css";
import { nanoid } from "@reduxjs/toolkit";
import icons from "../../img/icons.svg";
import FavoriteToggle from "../FavoriteToggle/FavoriteToggle";
import { useSelector } from "react-redux";

const TruckDetailCard = ({ item }) => {
  const favorites = useSelector((state) => state.trucks.favorites);
  const isFavorite =
    Object.keys(favorites).includes(item.id) && favorites[item.id];
  console.log("favorites", favorites);
  // console.log(item.id, isFavorite);

  return (
    <div className="detail-card">
      <div className="details-toppart">
        <div className="details-title">
          <p>{item.name}</p>
          <FavoriteToggle id={item.id} checked={isFavorite} />
        </div>
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
        <p className="price">&euro;{item.price},00</p>
      </div>

      <ul className="details-gallery">
        {item.gallery.map((el) => (
          <li key={nanoid()}>
            <img src={el.thumb} alt="Truck photo" width="292" height="312" />
          </li>
        ))}
      </ul>

      <p className="details-descripton">{item.description}</p>
    </div>
  );
};

export default TruckDetailCard;
