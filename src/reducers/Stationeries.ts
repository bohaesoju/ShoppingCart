import { IStationery } from './Models';

export const STATIONERY_REQUEST = 'STATIONERY_REQUEST';
export const STATIONERY_SUCCESS = 'STATIONERY_SUCCESS';
export const STATIONERY_FAILURE = 'STATIONERY_FAILURE';

// export const ADD_TO_CART = 'ADD_TO_CART';
// export const DELETE_TO_CART = 'DELETE_TO_CART';

export const stationeryRequest = () => {
    return {
        type: STATIONERY_REQUEST
    }
};

// export const addToCart = () => {
//     return {
//         type: ADD_TO_CART
//     }
// };

const initialState: IStationery = {
    data: {
        id: 1,
        name: '1',
        image: '1',
        price: 1,
        tags: {
            key: '1',
            name: '1'
        },
        stock: 1,
    },
    isFetchStationery: false,
};

const stationeries = (state = initialState, action: any): IStationery => {
    // const stationeries = (state = initialState, action: {type: string}): IStationery => {
    switch(action.type){
        case STATIONERY_REQUEST:
            return {
                ...state,
                isFetchStationery: false,
            };
        case STATIONERY_SUCCESS:
            return {
                ...state,
                isFetchStationery: true,
                data: action.data
            };
        case STATIONERY_FAILURE:
            return {
                ...state,
                isFetchStationery: false,
            };
        default:
            return Object.assign({}, state);
    }
};

export default stationeries;
