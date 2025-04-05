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

console.log(products)

  return (
    <div className=' flex  flex-col sm:flex-row min-h-screen bg-slate-200'>
<Filter />
<div className='flex flex-wrap items-stretch justify-evenly  gap-1 p-2
 w-full sm:w-[78%] flex-1
 '>
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
