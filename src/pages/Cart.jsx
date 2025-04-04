import React from 'react'
import { useCart } from '../context/Context'
import Rating from '../components/Rating'
import { GoStarFill,GoStar } from "react-icons/go";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const navigate = useNavigate()
  const {state,dispatch}=useCart()
  console.log(state.cart)
  const maxRating =5
  return (
    <div className='flex flex-col-reverse sm:flex-row '>

      <div className={`w-full  ${state.cart.length>0?'sm:w-[70%]':'sm:w-full'} `}>
        {
          state.cart.length>0 ? state.cart.map((product)=>(
            <div key={product.id} className='border-b-1 bg-white m-4 p-4 rounded-md flex justify-between items-center  gap-2'>
            <div className='flex flex-col sm:flex-row justify-center  items-center gap-2 '>
            <img src={product.image} alt={product.name} className='w-[100px] h-[50px] object-cover rounded-md' />
            <h2 className='text-xl font-bold text-center '>{product.name}</h2>
            <p className='text-gray-600'>Price: ${product.price}</p>
            {/* rating */}
            <div className='flex '>
              {
                [...Array(maxRating)].map((_,i)=>{
                  return product.ratings>i ? <GoStarFill className='text-yellow-500' /> : <GoStar className='text-gray-400'/>
                })
              }
            </div>

            </div>
            <div className='flex items-center gap-2'>
              <select onChange={(e)=>dispatch({type:'UPDATE_CART_QTY',payload:{id:product.id,qty:e.target.value}})} value={product.qty} className='min-w-[50px] border-1 border-gray-500 rounded-lg px-2 py-1' name="" id="">
             {
              [...Array(parseInt(product.inStock))].map((_,i)=>(
                <option value={i+1}>{i+1}</option>
              ))
             }
              </select>

              <button onClick={(e)=>{
                e.stopPropagation()
                dispatch({type:'REMOVE_FROM_CART',payload:product.id})
              }}  className='bg-red-500 text-white py-2 px-4 rounded-md'>Remove from Cart</button>
              </div>
            
            
          </div>
          )): <div className='flex min-h-[90vh] items-center justify-center'><h1 className='flex flex-col  text-center text-3xl font-bold '>Your Cart is Empty  <span onClick={()=>navigate('/')} className='hover:bg-black hover:text-white duration-300 transition-colors text-xl  flex items-center gap-3 border-1 rounded-lg justify-center py-1 my-1'>Go Back To Home<FaArrowLeftLong/></span></h1></div>
        }

      </div>
      {
        state.cart.length>0 && <div className='w-full sm:w-[30%] bg-slate-400 sm:min-h-screen flex flex-col items-center p-5'>
        <h2 className='text-xl'>Subtotal ({state.cart.length}) items</h2>
        <h2>Total Price:<span className='text-red-700 font-bold'> ₹ {state.cart.reduce((acc,curr)=>acc+(parseInt(curr.price)*parseInt(curr.qty)),0)}</span> </h2>
        <button className='bg-blue-500 text-white py-2 px-4 rounded-md'>Proceed to Checkout</button>
      </div>
      }
    </div>
  )
}

export default Cart
