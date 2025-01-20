import icons from "../../img/icons.svg";
import { camelCaseToWords } from "../../utils/utils";

const FeatureItem = ({ name, value }) => {
  return (
    <div className="bage-item">
      <svg width="20" height="20">
        {name ? (
          <use href={`${icons}#${name}`}></use>
        ) : (
          <use href={`${icons}#${value}`}></use>
        )}
      </svg>
      <p>{camelCaseToWords(value)}</p>
    </div>
  );
};

export default FeatureItem;
