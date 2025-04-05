import { useEffect, useState } from "react";
import Filter from "./Filter";
import Rating from "./Rating";
import { useCart } from "../context/Context";

const FilterOptions = (
    { open }
) => {
    const {productState:{byStock,byFastDelivery,byRating,searchQuery,sort},productDispatch}=useCart()
    console.log(byStock,byFastDelivery,sort,byRating,searchQuery)

 





  return (
    <>
    {
        open && (
            <div className={`transition-all duration-1000 p-4 border rounded-lg shadow-md max-w-sm `}>
      <form className="space-y-3">
        <fieldset>
          <legend className="font-medium">Sort By:</legend>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="sort"
              value="asc"
              checked={sort==='lowToHigh'?true:false}
              onChange={()=>{
                productDispatch({
                    type:'SORT_BY_PRICE',
                    payload:'lowToHigh'
                })
              }}
            />
            <span>Ascending</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="sort"
              value="desc"
              checked={sort==='highToLow'?true:false}
              onChange={()=>{
                productDispatch({
                    type:'SORT_BY_PRICE',
                    payload:'highToLow'
                })
              }}
            />
            <span>Descending</span>
          </label>
        </fieldset>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="inStock"
            checked={byStock}
            onChange={()=>{
                productDispatch({
                    type:'FILTER_BY_STOCK',
                })
            }}
          />
          <span>Include out of  Stock</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="fastDelivery"
            checked={byFastDelivery}
            onChange={()=>{
                productDispatch({
                    type:'FILTER_BY_DELIVERY',
                })
            }}
          />
          <span>Fast Delivery Only</span>
        </label>
        <Rating />
        <button type="button" onClick={()=>{
            productDispatch({
                type:'CLEAR_FILTERS',
            })
        }} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
            Clear Filters
        </button>
      </form>
    </div>
        )
    }
    </>
  );
};

export default FilterOptions;
