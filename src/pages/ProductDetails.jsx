import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useCart } from '../context/Context'
import { GoStar, GoStarFill } from 'react-icons/go'


const ProductDetails = () => {
const {state,dispatch} = useCart()
    const[product,setProduct] = useState({})
    const navigate = useNavigate()
    const {id}=useParams()
    
    useEffect(()=>{
        const res =  state.products.find(p=>p.id===id)
        setProduct(res)
        if(!res){
            navigate("/")
        }

    },[id])

console.log(state)
console.log(product)
  return (
    <div className="max-w-3xl mx-auto p-6 border rounded-lg shadow-md mt-10">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md mb-4" />
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-gray-700">${product.price}</p>
      <p className={`text-sm ${product.inStock ? "text-green-500" : "text-red-500"}`}>
        {product.inStock ? "In Stock" : "Out of Stock"}
      </p>
      {product.fastDelivery && <p className="text-blue-500 text-sm">Fast Delivery Available</p>}
        <div className='flex '>
                    {
                      [...Array(5)].map((_,i)=>{
                        return product.ratings>i ? <GoStarFill className='text-yellow-500' /> : <GoStar className='text-gray-400'/>
                      })
                    }
                  </div>

      <div className="mt-6 flex space-x-4">
       
        {
          state.cart.some(p=>p.id===product.id)?
          <button onClick={(e)=>{
            e.stopPropagation()
            dispatch({type:'REMOVE_FROM_CART',payload:product.id})
          }}  className='bg-red-500 text-white py-2 px-4 rounded-md'>Remove from Cart</button>
          :<button 
           onClick={(e)=>{
            e.stopPropagation()
            dispatch({type:'ADD_TO_CART',payload:product})
          }}  className={`px-4 py-2 text-white rounded-md ${
            product.inStock>0 ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!product.inStock}>{product.inStock>0?"Add to Cart":"Out of stock"}</button>
        }
        <button onClick={() => navigate("/")} className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">
          Back to Products
        </button>
      </div>
    </div>
  )
}

export default ProductDetails
