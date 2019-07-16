import { Iinfo } from './Models';

export const INFO_REQUEST = 'INFO_REQUEST';
export const INFO_SUCCESS = 'INFO_SUCCESS';
export const INFO_FAILURE = 'INFO_FAILURE';

export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_TO_CART = 'DELETE_TO_CART';

 const initialState: Iinfo = {
     cart: 0,
 };

const info = (state = initialState, action: {type: string}): Iinfo => {
    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state,
                cart: state.cart + 1
            };
        case DELETE_TO_CART:
            return {
                ...state,
                cart: state.cart - 1
            };
        default:
            return Object.assign({}, state);
    }
};

export default info;
