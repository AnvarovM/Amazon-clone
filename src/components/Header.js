import React from "react";
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon
} from '@heroicons/react/outline'

function Header() {
  return (
    <header>
      {/* top header */}
      <div className="flex items-center bg-amazon_blue p-1 flex-row py-2">
            <div className="mt-2 mx-2 md:mx-4 flex flex-grow items-center sm:flex-grow-0">
                <img className="cursor-pointer w-28 h-auto" src="https://links.papareact.com/f90" alt="amazon logo" />
            </div>
            {/* middle header search bar */}
            <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                <input className="p-2 h-full w-6 flex-grow focus:outline-none flex-shrink px-4 rounded-l-md" type="text" placeholder="Search" />
                <SearchIcon className='h-12 p-4 cursor-pointer' />
            </div>
            {/* right header */}
            <div className="text-white flex items-center text-xs space-x-6 mx-4 md:mx-6 whitespace-nowrap">
                <div className="link">
                    <p>Hello, Anvarovm</p>
                    <p className="font-extrabold md:text-sm">Account & Lists</p>
                </div>
                <div className="link">
                    <p>Returns</p>
                    <p className="font-extrabold md:text-sm">& Orders</p>
                </div>
                <div className="link relative flex items-center">
                    <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-500 text-center rounded-full font-bold">0</span>
                    <ShoppingCartIcon className="h-10" />
                    <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
                </div>
            </div>
      </div>

      {/* bottom header */}
      <div className="flex items-center space-x-3 p-2 pl-4 bg-amazon_blue-light text-sm font-medium">
        <p className="link flex items-center"><MenuIcon className="h-6 mr-1" /> All</p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link hidden lg:inline-flex">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Foods & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">By Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Heath & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
