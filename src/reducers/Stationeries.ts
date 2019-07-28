import { IStationery } from './Models';

export const STATIONERY_REQUEST = 'STATIONERY_REQUEST';
export const STATIONERY_SUCCESS = 'STATIONERY_SUCCESS';
export const STATIONERY_FAILURE = 'STATIONERY_FAILURE';
export const ADD_TO_CART = 'ADD_TO_CART';
// export const DELETE_TO_CART = 'DELETE_TO_CART';

export const addToCart = (i: number) => {
    return {
        type: ADD_TO_CART,
        index: i
    }
};

export const stationeryRequest = () => {
    return {
        type: STATIONERY_REQUEST
    }
};

const initialState: IStationery = {
    data: [
        // {
        // id: 1,
        // name: '1',
        // image: '1',
        // price: 1,
        // tags: {
        //     key: '1',
        //     name: '1'
        // },
        // stock: 1,}
    ],
    isFetchStationery: false,
    isAddCartList: false,
    cartList: [
        // {
        //     id: 1,
        //     name: '1',
        //     image: '1',
        //     price: 1,
        //     tags: {
        //         key: '1',
        //         name: '1'
        //     },
        //     stock: 1,
        // }
    ]
};

const stationeries = (state = initialState, action: any): IStationery => {
    // const stationeries = (state = initialState, action: {type: string}): IStationery => {
    switch (action.type) {
        case STATIONERY_REQUEST:
            return {
                ...state,
                isFetchStationery: false,
            };
        case STATIONERY_SUCCESS:
            return {
                ...state,
                isFetchStationery: true,
                data: action.data,
                cartList: state.cartList
            };
        case STATIONERY_FAILURE:
            return {
                ...state,
                isFetchStationery: false,
            };
        case ADD_TO_CART:
            console.log('cart: ', state, action.index)
            return {
                ...state,
                cartList: [state.data[action.index]]
                // cartList: [
                //     state.data[0]
                // ]
            };
        default:
            return Object.assign({}, state);
    }
}


export default stationeries;
