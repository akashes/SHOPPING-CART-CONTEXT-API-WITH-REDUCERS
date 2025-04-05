import { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
const CartContext = createContext()
import { CartReducer, productReducer } from "./Reducers";

const CartContextProvider=({children})=>{
    faker.seed(99)
    const products = [...Array(20)].map(()=>(
        {
            id: faker.string.uuid(),
            name: faker.commerce.productName(),
            price: faker.commerce.price({ min: 10, max: 500, dec: 2 }), 
            image: faker.image.urlPicsumPhotos(),
            inStock: faker.helpers.arrayElement([0,1, 3, 5, 6, 7]),
            fastDelivery: faker.datatype.boolean(), 
            ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]), 
        }
    ))
  
    const [state,dispatch ]=useReducer(CartReducer,{
        products,
        cart:[],
        filtered:[]
    })

    const [productState,productDispatch]=useReducer(productReducer,{
        byStock:false,
        byFastDelivery:false,
        byRating:0,
        searchQuery:''
    })
    
    return <CartContext.Provider value={{state,dispatch,productState,productDispatch}} >
        {children}
    </CartContext.Provider>
}
export default CartContextProvider;

export const useCart=()=>{
   return useContext(CartContext)
}