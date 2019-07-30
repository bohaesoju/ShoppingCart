import { ICount } from './Models';

export const PURCHASE_REQUEST = 'PURCHASE_REQUEST';
export const PURCHASE_SUCCESS = 'PURCHASE_SUCCESS';
export const PURCHASE_FAILURE = 'PURCHASE_FAILURE';
export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_TO_CART = 'DELETE_TO_CART';

export const purchaseRequest = () => {
    return {
        type: PURCHASE_REQUEST
    }
};

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

const initialState: ICount = {
    count: 0
};

const cart = (state = initialState, action: any): ICount => {
    // const stationeries = (state = initialState, action: {type: string}): IStationery => {
    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state,
                count: state.count + 1,
            };
        case DELETE_TO_CART:
            return {
                ...state,
                count: state.count - 1,
            };
        default:
            return Object.assign({}, state);
    }
};

export default cart;
