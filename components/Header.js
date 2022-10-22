import Image from "next/image";
import {
  Bars3Icon as MenuIcon,
  MagnifyingGlassIcon as SearchIcon,
  ShoppingCartIcon as CartIcon,
} from "@heroicons/react/24/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
  const router = useRouter();
  const { session } = useSession();
  const items = useSelector(selectItems);

  return (
    <header>
      {/* Top nav */}
      <div className="flex items-center flex-grow bg-amazon_blue p-1 py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            className="cursor-pointer"
            src="https://links.papareact.com/f90"
            alt="amazon logo"
            width={150}
            height={40}
            objectFit="contain"
          />
        </div>
        {/* SearchBar */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow rounded-l-md flex-shrink focus:outline-none px-4"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div onClick={session ? signOut : signIn} className="link">
            <p>{session ? `Hello ${session.user.name}` : "Sign in"}</p>
            <p className="font-extrabold md:text-sm">Accounts & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="link relative flex items-center"
          >
            <span className="absolute top-0 right-0 md:right-10 bg-yellow-400 rounded-full h-4 w-4 text-black text-center font-bold">
              {items.length}
            </span>
            <CartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm xl:text-base">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today&#39;s deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
      </div>
    </header>
  );
}

export default Header;
