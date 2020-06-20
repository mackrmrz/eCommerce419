import {
    SET_USERS_PURCHASES, 
    SET_PURCHASE_DETAIL,
    SET_CART_PRODUCT
} from '../actions/types';


const INITIAL_STATE = {
    cartProduct: [],
    purchases: [],
    purchaseDetail: {
        _id: -1,
        total:0,
        orderNumber: '',
        orderDate: null,
        creditCard: '',
        user: {
            name: '',
            shippingAddress: ''
        }
    }
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_CART_PRODUCT:
            return{
                ...state,
                cartProduct: action.payload
            }
        case SET_USERS_PURCHASES:
            return {
                ...state,
                purchases: action.payload
            }
        case SET_PURCHASE_DETAIL:
            let purchaseDetail;
            state.purchases.map(purchase => {
                if(purchase._id == action.payload) {
                    purchaseDetail = purchase;
                }
            })
            return {
                ...state,
                purchaseDetail
            }

        default: return state;
    }
}