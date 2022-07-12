export const initialState = {
    basket: [],
    wishList: [],
    user: null,
    totalPrice: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case "ADD_TO_WISHLIST":
            return {
                ...state,
                wishList: [...state.wishList, action.item],
            };
        
        case "REMOVE_FROM_WISHLIST":
            const index = state.wishList.findIndex(tx => tx.id === action.id);
            let newWishList = [...state.wishList];

            if(index >= 0){
                newWishList = newWishList.filter((tx, i) => i !== index);
            }

            return {
                ...state,
                wishList: newWishList
            }

        case "REMOVE_FROM_BASKET":
            const idx = state.basket.findIndex(tx => tx.id === action.id);
            let newBasket = [...state.basket];

            if (idx >= 0) {
                newBasket = newBasket.filter((tx, i) => i !== idx);
            }

            return {
                ...state,
                basket: newBasket
            }

        case "REMOVE_ALL":
            return {
                ...state,
                basket: []
            }

        case "SET_USER":
            return {
                ...state,
                user: action.user
            }

        case "SET_PRICE":
            return {
                ...state,
                totalPrice: action.price
            }

        default:
            return state;
    }
};

export default reducer;
