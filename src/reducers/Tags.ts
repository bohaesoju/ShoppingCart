import { ITag } from './Models';

export const TAG_REQUEST = 'TAG_REQUEST';
export const TAG_SUCCESS = 'TAG_SUCCESS';
export const TAG_FAILURE = 'TAG_FAILURE';

export const tagRequest = () => {
    return {
        type: TAG_REQUEST
    }
};

const initialState: ITag = {
    tagData: {
        key: '1',
        name: '1',
    },
    isFetchTag: false
};

const tags = (state = initialState, action: any): ITag => {
    // const stationeries = (state = initialState, action: {type: string}): IStationery => {
    switch(action.type){
        case TAG_REQUEST:
            return {
                ...state,
                isFetchTag: false,
            };
        case TAG_SUCCESS:
            return {
                ...state,
                isFetchTag: true,
                tagData: action.data
            };
        case TAG_FAILURE:
            return {
                ...state,
                isFetchTag: false,
            };
        default:
            return Object.assign({}, state);
    }
};

export default tags;
