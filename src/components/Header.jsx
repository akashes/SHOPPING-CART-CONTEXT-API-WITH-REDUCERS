import React, { useState } from "react";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Badge from "./Badge";
import { IoSearch } from "react-icons/io5";
import ThemeBtn from "./ThemeBtn";
import { useCart } from "../context/Context";
import { MdDelete } from "react-icons/md";


const Header = () => {
  const navigate = useNavigate()
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const{state,dispatch}=useCart()

  return (
    <nav className="flex flex-col bg-slate-700 gap-3 sm:flex-row justify-between mb-1 items-center min-h-[10vh] px-6 sm:px-[50px] py-2 shadow-lg">
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
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg overflow-hidden shadow-lg z-40  ">
              <ul className="text-sm text-gray-700">
              {
                 
                 state.cart.length>0 ? (
                    state.cart.map(i=>(
                      <div className=" flex justify-between items-center m-2 ">
                        <img className="rounded-full w-[50px] h-[50px] object-cover" src={i.image} alt="" />
                        <div className="flex flex-1 mx-1 flex-col">
                          <span>{i.name}</span>
                          <span  className="font-bold"> ₹ {i.price.split(".")[0]}</span>
                        </div>
                        <MdDelete className=" text-xl text-red-500 cursor-pointer" onClick={(e)=>{
                          e.stopPropagation()
                          setDropdownOpen(false)
                          dispatch({type:'REMOVE_FROM_CART',payload:i.id})
                        }} />
                      </div>
                    ))
                 ) : (
               <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer"> Cart is Empty</li>

                 )
               }
                <li onClick={()=>{
                  setDropdownOpen(false)
                  navigate('/cart')
                }} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">GO TO THE CART</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
