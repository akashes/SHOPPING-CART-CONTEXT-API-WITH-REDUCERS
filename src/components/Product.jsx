import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/Context'

const Product = ({product}) => {
  const navigate = useNavigate()
  const{state,dispatch}=useCart()
  return (
<div onClick={()=>navigate(`/product/${product.id}`)} key={product.id} className=' w-[50%]  md:w-[300px]   bg-white m-2 md:m-4 p-2 md:p-4 rounded-md shadow-md flex flex-col justify-between gap-1 md:gap-2'>
        <img src={product.image} alt={product.name} className='w-full h-40 object-cover rounded-md' />
        <h2 className='text-md md:text-xl font-bold'>{product.name}</h2>
        <p className='text-gray-600'>Price: ${product.price}</p>
        {
          state.cart.some(p=>p.id===product.id)?
          <button onClick={(e)=>{
            e.stopPropagation()
            dispatch({type:'REMOVE_FROM_CART',payload:product.id})
          }}  className='bg-red-500 text-white py-1 md:py-2 px-4 rounded-md'>Remove from Cart</button>
          :<button 
          disabled={product.inStock===0}
          onClick={(e)=>{
            e.stopPropagation()
            dispatch({type:'ADD_TO_CART',payload:product})
          }}  className={` ${product.inStock>0?"bg-blue-500":"bg-slate-500 opacity-80"} text-white py-1 md:py-2 px-4 rounded-md`}> {product.inStock>0 ?"Add to Cart":"Out Of Stock"} </button>
        }
      </div>
  )
}

export default Product
