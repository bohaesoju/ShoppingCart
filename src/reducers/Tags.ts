import { ITag } from './Models';
import {SELECT_TAGS} from "./Stationeries";

export const TAG_REQUEST = 'TAG_REQUEST';
export const TAG_SUCCESS = 'TAG_SUCCESS';
export const TAG_FAILURE = 'TAG_FAILURE';

export const tagRequest = () => {
    return {
        type: TAG_REQUEST
    }
};

const initialState: ITag = {
    tagData: [],
    isFetchTag: false,
    selectedTagList: []
};

export const selectTags = (i: number) => {
    console.log('reducer selectTags : ', i);
    return {
        type: SELECT_TAGS,
        selectIndex: i,
    }
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
        case SELECT_TAGS:
            console.log('SELECT_TAGS selectIndex: ', action.selectIndex);
            state.selectedTagList.push(state.tagData[action.selectIndex]);
            // state.selectedTagList.push(['모나미']);
            return {
                ...state,
                // ...state.selectedTagList
                // cartList: [
                //     state.data[0]
                // ]
            };
        default:
            return Object.assign({}, state);
    }
};

export default tags;
