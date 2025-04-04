import React, { useState } from 'react'
import { useCart } from '../context/Context'
import Product from '../components/Product'
import Filter from '../components/Filter'


const Home = () => {
  const {state:{products},}=useCart()
      const [filters, setFilters] = useState({
          sort: "",
          inStock: false,
          fastDelivery: false,
          rating: 0,
        });
console.log(filters)

//filtering products
console.log(products)
  // const filteredProducts = products?.filter(p=>{
  //   if(filters.outOfStock){
  //   return  p.outOfStock
  //   }else{
  //   return  p
  //   }
  // })
  const filteredProducts = products?.filter((p) => filters.inStock?p.inStock>0 : true)
                             .filter(p=>filters.fastDelivery?p.fastDelivery:true)
                             .filter(p=>filters.rating?p.ratings>=filters.rating:true)
                             .sort((a,b)=>(filters.sort==="asc"?a.price-b.price:filters.sort==="desc"?b.price-a.price:0))
  
  console.log(filteredProducts)
  return (
    <div className=' flex  flex-col sm:flex-row min-h-screen bg-slate-200'>
<Filter filters={filters} setFilters={setFilters} />
<div className='flex flex-wrap justify-around items-center gap-4 p-4 w-[78%]'>
  {
    filteredProducts.length>0 && filteredProducts.map((product)=>(
      <Product product={product} />
    ))
    
  }

</div>
    </div>
  )
}

export default Home
