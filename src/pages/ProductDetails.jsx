import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useCart } from '../context/Context'


const ProductDetails = () => {
    const[product,setProduct] = useState({})
    const navigate = useNavigate()
    const {id}=useParams()
    const {state} = useCart()
    useEffect(()=>{
        const res =  state.products.find(p=>p.id===id)
        setProduct(res)
        if(!res){
            navigate("/")
        }

    },[id])
//     const product = {
//         fastDelivery: true,
// id
// : 
// "2c0a8901-7972-4eae-a8de-ebe2a5d4bd78",
// image
// : 
// "https://picsum.photos/seed/kU0T3/3635/354?grayscale&blur=3",
// inStock
// : 
// 3,
// name
// : 
// "Modern Ceramic Pizza",
// price
// : 
// "85.79",
// ratings
// : 
// 5
//     }
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
      {/* <p className="mt-4 text-gray-600">{product.description}</p> */}

      <div className="mt-6 flex space-x-4">
        <button
        //   onClick={addToCart}
          className={`px-4 py-2 text-white rounded-md ${
            product.inStock ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!product.inStock}
        >
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </button>
        <button onClick={() => navigate("/")} className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">
          Back to Products
        </button>
      </div>
    </div>
  )
}

export default ProductDetails
