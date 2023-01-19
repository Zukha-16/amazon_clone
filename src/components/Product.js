import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "@/slices/basketSlice";

import ProductRating from "../components/ProductRating";
import PrimeDelivery from "../components/PrimeDelivery";
import Image from "next/image";

const Product = ({ product }) => {
  const { title, price, description, category, image, rating } = product;
  const dispatch = useDispatch();
  const [stars] = useState(Math.floor(rating.rate));

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

      <ProductRating stars={stars} />
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <p className="text-lg font-semibold mb-2">£ {price.toFixed(2)}</p>

      <PrimeDelivery stars={stars} />

      <button
        type="button"
        onClick={() => {
          dispatch(addToBasket({...product, quantity: 1}));
        }}
        className="mt-auto button"
      >
        Add to basket
      </button>
    </div>
  );
};
export default Product;
