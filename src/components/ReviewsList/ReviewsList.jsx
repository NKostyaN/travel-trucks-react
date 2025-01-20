import "./ReviewsList.css";
import { nanoid } from "@reduxjs/toolkit";
import ReviewItem from "../ReviewItem/ReviewItem";
import { useSelector } from "react-redux";
import { selectTruck } from "../../redux/trucksSlice";

const ReviewsList = () => {
  const item = useSelector(selectTruck);

  return (
    <div className="reviews-list">
      {Object.keys(item).length != 0 && (
        <ul>
          {item.reviews.map((el) => (
            <li key={nanoid()}>
              <ReviewItem item={el} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReviewsList;
