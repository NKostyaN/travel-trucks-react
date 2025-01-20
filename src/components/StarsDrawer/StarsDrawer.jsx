import icons from "../../img/icons.svg";
import { nanoid } from "nanoid";

const StarsDrawer = ({ rating }) => {
  const arr = new Array(5).fill(false);
  for (let i = 0; i < rating; i++) {
    arr[i] = true;
  }

  return (
    <div className="stars-drawer">
      {arr.map((el) =>
        el ? (
          <svg key={nanoid()} className="yellow-star" width="16" height="15">
            <use href={`${icons}#star`}></use>
          </svg>
        ) : (
          <svg key={nanoid()} className="gray-star" width="16" height="15">
            <use href={`${icons}#star`}></use>
          </svg>
        )
      )}
    </div>
  );
};

export default StarsDrawer;
