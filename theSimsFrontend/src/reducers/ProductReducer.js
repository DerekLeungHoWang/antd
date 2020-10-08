const initState = {
    isLoading: false,
    productList: [],
    cartList: []
}


const ProductReducer = (state = initState, action) => {



    switch (action.type) {

        case ("FETCH_PRODUCTS_START"):

            return {
                ...state,
                isLoading: true
            };
        case ("FETCH_PRODUCTS_SUCCESS"):

            return {
                ...state,
                isLoading: false,
                productList: action.payload.detail
            };

        case ("FETCH_PRODUCTSINCART_SUCCESS"):

            return {
                ...state,
                cartList: action.payload.detail
            }
        case ("ADD_TO_CART"):
            console.log(action);
            return {
                ...state,
                isLoading: true,
             
           
            }

        case ("ADD_TO_CART_SUCCESS"):
            console.log(action);
            return {
    
                ...state,

            }





        default:
            return state;
    }



}

export default ProductReducer