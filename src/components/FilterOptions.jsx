import { useEffect, useState } from "react";
import Filter from "./Filter";
import Rating from "./Rating";

const FilterOptions = ({ open,filters,setFilters }) => {
//   const [filters, setFilters] = useState({
//     sort: "",
//     outOfStock: false,
//     fastDelivery: false,
//     rating: 0,
//   });
  const setRating=(rating)=>{
    setFilters((prevFilters) => ({ ...prevFilters, rating }));
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newFilters = {
      ...filters,
      [name]: type === "checkbox" ? checked : value,
    };
    setFilters(newFilters);
    // onFilterChange(newFilters); 
    // Call parent function to apply filters
  };
  useEffect(()=>{


  },[filters])
console.log(filters)
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
              checked={filters.sort === "asc"}
              onChange={handleChange}
            />
            <span>Ascending</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="sort"
              value="desc"
              checked={filters.sort === "desc"}
              onChange={handleChange}
            />
            <span>Descending</span>
          </label>
        </fieldset>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="inStock"
            checked={filters.inStock}
            onChange={handleChange}
          />
          <span>In Stock</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="fastDelivery"
            checked={filters.fastDelivery}
            onChange={handleChange}
          />
          <span>Fast Delivery Only</span>
        </label>
        <Rating filters={filters} setFilters={setFilters}/>
        <button onClick={()=>setFilters({
    sort: "",
    outOfStock: false,
    fastDelivery: false,
  })} type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
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
