import React, { useState } from "react";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Badge from "./Badge";
import { IoSearch } from "react-icons/io5";
import ThemeBtn from "./ThemeBtn";
import { useCart } from "../context/Context";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const{state,dispatch}=useCart()

  return (
    <nav className="flex flex-col bg-slate-700 gap-3 sm:flex-row justify-between items-center min-h-[10vh] px-6 sm:px-[50px] py-2 shadow-lg">
      {/* Logo */}
      <h1 className="text-2xl flex-1 font-bold text-white">
        <Link to={"/"}>Shopping Cart</Link>
      </h1>

      {/* Search + Cart Section */}
      <div className="flex flex-1 justify-center gap-4 sm:justify-end items-center">
        {/* Search Bar with Icon */}
        <div className="relative w-full max-w-[300px]">
          <input
          onChange={(e)=>dispatch({type:'SEARCH_PRODUCT',payload:e.target.value})}
            type="text"
            placeholder="Search a product..."
            className="text-gray-500 w-full focus:outline-none bg-white pl-10 pr-4 py-2 rounded-md shadow-sm"
          />
          <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
        </div>

        {/* Cart Button with Dropdown */}
        <div className="relative flex ">
          <button
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            className="relative text-white text-2xl focus:outline-none"
          >
            <RiShoppingCart2Fill />
            <Badge text={state.cart.length} color={"bg-red-500"} />
          </button>

          {/* Dropdown Menu  */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg overflow-hidden shadow-lg ">
              <ul className="text-sm text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">View Cart</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Checkout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
