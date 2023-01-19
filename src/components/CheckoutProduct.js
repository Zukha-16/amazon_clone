import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  changeQuantity,
} from "../slices/basketSlice";

import Image from "next/image";
import ProductRating from "../components/ProductRating";
import PrimeDelivery from "../components/PrimeDelivery";

const CheckoutProduct = ({ product }) => {
  const { id, title, price, description, category, image, rating, quantity } =
    product;
  const [stars] = useState(Math.floor(rating.rate));
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-5 grid-flow-dense bg-white px-2 py-4">
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        className="object-contain self-center "
      />
      <div className="col-span-4 sm:col-span-3 mx-5">
        <p>{title}</p>
        <ProductRating stars={stars} />

        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <PrimeDelivery stars={stars} />

        <p className="text-lg font-semibold mb-2">£ {price.toFixed(2)}</p>
      </div>
      {/* Right add/remove buttons */}
      <div className="col-span-5 sm:col-span-1 w-full flex flex-row sm:flex-col justify-end sm:justify-center gap-6 my-4 sm:m-0">
        <div className="flex flex-row items-center justify-center gradient_bg">
          <button
            type="button"
            onClick={() => {
              if (quantity === 1) {
                dispatch(removeFromBasket(id));
              } else {
                dispatch(changeQuantity({ id, type: "decrease" }));
              }
            }}
            className="sm:flex-grow active:from-yellow-500 active:to-yellow-400 gradient_bg py-2 px-4"
          >
            -
          </button>
          <p className="sm:flex-grow text-center py-1 px-4 bg-white rounded-sm">
            {quantity}
          </p>
          <button
            type="button"
            onClick={() => {
              dispatch(changeQuantity({ id, type: "increase" }));
            }}
            className="sm:flex-grow active:from-yellow-500 active:to-yellow-400 gradient_bg py-2 px-4"
          >
            +
          </button>
        </div>
        <button
          onClick={() => {
            dispatch(removeFromBasket(id));
          }}
          className="button text-center"
        >
          Remove from Basket
        </button>
      </div>
    </div>
  );
};
export default CheckoutProduct;
