import React, { useState } from 'react'
import { useCart } from '../context/Context'
import Product from '../components/Product'
import Filter from '../components/Filter'


const Home = () => {
  const {state:{products},productState:{sort,byStock,byFastDelivery,byRating,searchQuery}}=useCart()

  const transformProducts = ()=>{
    let sortedProducts = products
    if(sort){
      sortedProducts = sortedProducts.sort((a,b)=>(sort==="lowToHigh"?a.price-b.price:sort==="highToLow"?b.price-a.price:0))

    }
    if(!byStock){
      sortedProducts = sortedProducts.filter(p=>p.inStock>0)
    }
    if(byFastDelivery){
      sortedProducts = sortedProducts.filter(p=>p.fastDelivery)
    }
    if(byRating){
      sortedProducts = sortedProducts.filter(p=>p.ratings>=byRating)
    }
    if(searchQuery){
      sortedProducts = sortedProducts.filter(p=>p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }
    return sortedProducts


  }
//       const [filters, setFilters] = useState({
//           sort: "",
//           inStock: false,
//           fastDelivery: false,
//           rating: 0,
//         });
// console.log(filters)

//filtering products
console.log(products)

  // const filteredProducts = products?.filter((p) => filters.inStock?p.inStock>0 : true)
  //                            .filter(p=>filters.fastDelivery?p.fastDelivery:true)
  //                            .filter(p=>filters.rating?p.ratings>=filters.rating:true)
  //                            .sort((a,b)=>(filters.sort==="asc"?a.price-b.price:filters.sort==="desc"?b.price-a.price:0))
  
  // console.log(filteredProducts)

  // const displayedProduct = filtered.length>0 ? filtered : products
  return (
    <div className=' flex  flex-col sm:flex-row min-h-screen bg-slate-200'>
<Filter />
<div className='flex flex-wrap justify-around items-center gap-4 p-4 w-[78%]'>
  {
    transformProducts().length>0 && transformProducts().map((product)=>(
      <Product product={product} />
    ))
    
  }

</div>
    </div>
  )
}

export default Home
