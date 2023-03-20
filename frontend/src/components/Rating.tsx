import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface RatingProps {
  stars: number[];
}

const starArray = [...Array(5).keys()].map(i => i + 1);

const Rating = ({ stars }: RatingProps) => (
  <div>
    {stars.map((rating, i) => (
      <div key={i}>
        Rating: ({Number(rating).toFixed(1)}){" "}
        {starArray.map(i => (
          <FontAwesomeIcon
            key={i}
            icon={faStar}
            color={rating >= i ? "orange" : "lightgrey"}
          />
        ))}
      </div>
    ))}
  </div>
);

export default Rating;