const initialState =
[
    {
        id: 1,
        name: '볼펜쓰',
        price: 2000,
        stock: 10
    },
    {
        id: 2,
        name: '지우개',
        price: 500,
        stock: 3,
    }
];

export const INFO_REQUEST = 'INFO_REQUEST';
export const INFO_SUCCESS = 'INFO_SUCCESS';
export const INFO_FAILURE = 'INFO_FAILURE';

export const requestInfo = () => {
    return {
        type: INFO_REQUEST
    }
};

const info = (state = initialState, action: any) => {
    switch(action.type){
        case INFO_REQUEST:
            return {
                ...state,
            };
        case INFO_SUCCESS:
            return {
                ...state,
                data: action.data
            };
        case INFO_FAILURE:
            return {
                ...state,
                data: null
            };
        default:
            return Object.assign({}, state);
    }
};

export default info;
