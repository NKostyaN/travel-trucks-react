import "./ReviewItem.css";
import StarsDrawer from "../StarsDrawer/StarsDrawer";

const ReviewItem = ({ item }) => {
  return (
    <div className="review-item">
      <div className="review-title">
        <div className="review-circle">
          {item.reviewer_name.charAt(0).toUpperCase()}
        </div>
        <div className="review-name">
          <p>{item.reviewer_name}</p>
          <StarsDrawer rating={item.reviewer_rating} />
        </div>
      </div>
      <p className="review-comment">{item.comment}</p>
    </div>
  );
};

export default ReviewItem;
