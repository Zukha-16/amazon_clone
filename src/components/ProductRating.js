import { StarSolid, StarOutline } from "../styles/Icons";

const ProductRating = ({ stars }) => {
  return (
    <div className="flex">
      {Array(stars)
        .fill()
        .map((_, i) => {
          return (
            <div key={i}>
              <StarSolid className="h-5" color="rgb(234, 179, 8)" />
            </div>
          );
        })}
      {Array(5 - stars)
        .fill()
        .map((_, i) => {
          return (
            <div key={i}>
              <StarOutline className="h-5" color="rgb(234, 179, 8)" />
            </div>
          );
        })}
    </div>
  );
};
export default ProductRating;
