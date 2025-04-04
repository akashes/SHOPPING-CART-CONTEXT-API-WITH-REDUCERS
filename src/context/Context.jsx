import { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
const CartContext = createContext()

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
    // console.log(products);
    const CartReducer=(state,action)=>{
        switch(action.type){
            case 'ADD_TO_CART':
            return {...state,cart:[...state.cart,{...action.payload,qty:1}]}

            case 'REMOVE_FROM_CART':
            return {...state,cart:state.cart.filter(p=>p.id!==action.payload)}

            case 'SEARCH_PRODUCT':
                console.log('inside search product')
                console.log(action.payload)
                
                return{...state,filtered:state.products.filter(p=>p.name.toLowerCase().includes(action.payload.toLowerCase()))}

            case 'APPLY_FILTERS':
                if(action.payload.ascending){
                    filteredProducts = products.sort(product=>product.price)
                }
             return {...state,}


            default:
                return state
        }
    }
    const [state,dispatch ]=useReducer(CartReducer,{
        products,
        cart:[],
        filtered:[]
    })
    
    return <CartContext.Provider value={{state,dispatch}} >
        {children}
    </CartContext.Provider>
}
export default CartContextProvider;

export const useCart=()=>{
   return useContext(CartContext)
}