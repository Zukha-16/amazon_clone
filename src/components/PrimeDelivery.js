import { useState } from "react";
import Image from "next/image";

const PrimeDelivery = ({ stars }) => {

  return (
    stars > 4 && (
      <div className="flex items-center space-x-2 ">
        <Image
          src="https://links.papareact.com/fdw"
          alt="Prime product"
          width={50}
          height={50}
        />
        <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
      </div>
    )
  );
};
export default PrimeDelivery;
