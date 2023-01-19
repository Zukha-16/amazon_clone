import { useState } from "react";

import Image from "next/image";
import { StarOutline, StarSolid } from "../styles/Icons";

const Product = ({ product }) => {
  const { id, title, price, description, category, image, rating } = product;
  const [stars] = useState(Math.floor(rating.rate));
  const [hasPrime] = useState(stars > 3 ? true : false);

  return (
    <div className="bg-white relative flex flex-col m-5 z-30 p-10">
      <p className="absolute top-2 right-2 italic text-gray-400">{category}</p>
      <div className="flex items-center justify-center">
        <div className="w-[200px] h-[200px] relative">
          <Image
            src={image}
            alt={title}
            fill={true}
            className="object-contain"
          />
        </div>
      </div>
      <h4 className="my-3">{title}</h4>
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
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <p className="text-lg font-semibold mb-2">£ {price.toFixed(2)}</p>

      {hasPrime && (
        <div className="flex items-center space-x-2 ">
          <Image
            src="https://links.papareact.com/fdw"
            alt="Prime product"
            width={50}
            height={50}
          />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}

      <button className="mt-auto button">Add to basket</button>
    </div>
  );
};
export default Product;
