

export   const CartReducer=(state,action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
        return {...state,cart:[...state.cart,{...action.payload,qty:1}]}

        case 'REMOVE_FROM_CART':
        return {...state,cart:state.cart.filter(p=>p.id!==action.payload)}

        case 'UPDATE_CART_QTY':
            return {...state,cart:state.cart.map(p=>p.id===action.payload.id?{...p,qty:action.payload.qty}:p)}
           

        case 'SEARCH_PRODUCT':
            console.log('inside search product')
            console.log(action.payload)
            const searchSource = state.filtered.length>0 ? state.filtered : state.products
            const searchedResults = searchSource.filter(p=>p.name.toLowerCase().includes(action.payload.toLowerCase()))

            return {
                ...state,
                filtered: searchedResults.length > 0 ? searchedResults : state.filtered, 
                searchNotFound: searchedResults.length === 0, // Flag for empty search
            };
        case 'APPLY_FILTERS':
              let  filteredProducts = state.products.filter(p=>action.payload.inStock?p.inStock>0 : true)
                .filter(p=>action.payload.fastDelivery?p.fastDelivery:true)
                .filter(p=>action.payload.rating?p.ratings>=action.payload.rating:true)
                .sort((a,b)=>(action.payload.sort==="asc"?a.price-b.price:action.payload.sort==="desc"?b.price-a.price:0))
            
         return {...state,filtered:filteredProducts}

        case 'CLEAR_FILTERS':
            return {...state,filtered:[]}


        default:
            return state
    }
}


export const productReducer=(state,action)=>{
    switch(action.type){

        case 'SORT_BY_PRICE':
            return {...state,sort:action.payload}

            case 'FILTER_BY_STOCK':
                return {...state,byStock:!state.byStock}

                case 'FILTER_BY_DELIVERY':
                return {...state,byFastDelivery:!state.byFastDelivery}

                case 'FILTER_BY_RATING':
                    return {...state,byRating:action.payload}

                    case 'FILTER_BY_SEARCH':
                        console.log('inside ...............')
                        console.log('updating',action.payload)
                        console.log(action.payload)
                        return {...state,searchQuery:action.payload}

                        case 'CLEAR_FILTERS':
                            return {
                                byStock:false,
                                byFastDelivery:false,
                                byRating:0,
                                searchQuery:''
                            }
                
    }

}