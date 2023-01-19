import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";

import CheckoutProduct from "../components/CheckoutProduct";
import Image from "next/image";

const Checkout = () => {
  const { items } = useSelector((state) => state.basket);
  const { data: session } = useSession();

  return (
    <div className="bg-gray-200">
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* Left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            alt="Ad"
            className="object-contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white rounded-t-2xl">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "Your Amazon Basket is empty"
                : "Shopping Basket"}
            </h1>
          </div>
          {items.map((item) => {
            return <CheckoutProduct key={item.id} product={item} />;
          })}
        </div>
        {/* Right */}
        <div className="lg:relative">
          {items.length > 0 && (
            <div className="flex flex-col bg-white p-10 shadow-md lg:sticky top-[105px]">
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items):{" "}
                <span className="font-bold">
                  £
                  {items
                    .reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    )
                    .toFixed(2)}
                </span>
              </h2>
              <button
                type="button"
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
                disabled={!session}
                onClick={() => {
                  console.log("Checkout");
                }}
              >
                {session ? "Proceed to Checkout" : "Sign in to Checkout"}
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
export default Checkout;
