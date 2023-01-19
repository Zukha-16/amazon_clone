import Image from "next/image";
import { ShoppingCart, MagnifyingGlassIcon, MenuIcon } from "../styles/Icons";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const { items } = useSelector((state) => state.basket);

  const userAuth = (session) => {
    if (session) {
      signOut();
    } else {
      signIn("google");
    }
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Top Navigation */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        {/* Logo */}
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 mx-6">
          <Image
            onClick={() => router.push("/")}
            src="https://links.papareact.com/f90"
            alt="Amazon Logo"
            width={110}
            height={40}
            className="cursor-pointer"
          />
        </div>

        {/* Search */}
        <div className="bg-yellow-400 hover:bg-yellow-500 hover:cursor-pointer transition-all duration-300 ease-in-out hidden sm:flex items-center h-10 rounded-md flex-grow">
          <input
            type="text"
            className="self-stretch h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          />
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>

        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div onClick={() => userAuth(session)} className="link">
            <p>{session ? `Hello, ${session.user.name}` : "Sign In"}</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="hidden md:inline link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div
            className="relative link flex items-center"
            onClick={() => router.push("/checkout")}
          >
            <span className="absolute top-0 -right-2 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              {items.length}
            </span>
            <ShoppingCart className="h-10 w-6" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* Bottom Navigation */}
      <div className="flex items-center space-x-2 md:space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
};
export default Header;
