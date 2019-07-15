import { info } from './models';

 // {
    //     id: 1,
    //     name: '볼펜쓰',
    //     price: 2000,
    //     stock: 10
    // },
    // {
    //     id: 2,
    //     name: '지우개',
    //     price: 500,
    //     stock: 3,
    // }
// ];

export const INFO_REQUEST = 'INFO_REQUEST';
export const INFO_SUCCESS = 'INFO_SUCCESS';
export const INFO_FAILURE = 'INFO_FAILURE';

export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_TO_CART = 'DELETE_TO_CART';

export const addToCart = () => {
    return {
        type: ADD_TO_CART
    }
};

export const deleteToCart = () => {
    return {
        type: DELETE_TO_CART
    }
};

 const initialState = {
     cart: 0
 };

const info = (state = initialState, action: any): info => {
    switch(action.type){
        // case INFO_REQUEST:
        //     return {
        //         ...state,
        //     };
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
