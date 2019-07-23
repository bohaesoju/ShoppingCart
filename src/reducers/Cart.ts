import { ICount } from './Models';

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
