// import { SET_SHOP_PRODUCTS } from '../actions/types';


const INITIAL_STATE = {
    shopCatagories: [],
    selectedCatagoryId: 0,
    productsSelected: []
}


export default function(state=INITIAL_STATE, action) {
    switch(action.type) {
        // case SET_SHOP_PRODUCTS:
        //     return{
        //         ...state,
        //         shopCatagories: action.payload
        //     }
        default: return state;
    }
}