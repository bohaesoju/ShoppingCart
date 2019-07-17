import { put, all, call, fork, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import {
    TAG_REQUEST,
    TAG_SUCCESS,
    TAG_FAILURE
} from "../reducers/Tags";

function fetchAPI(args:any) {
    return axios.get('http://localhost:3000/tags')
}

function* fetchInfo(action: any){
    try{
        const result = yield call(fetchAPI, action.data);
        yield put({
            type: TAG_SUCCESS,
            data: result.data,
        });
    } catch(e){
        console.error(e);
        yield put({
            type: TAG_FAILURE,
            message: e.message,
        });
    }
}

function* watchFetch(){
    yield takeEvery(TAG_REQUEST, fetchInfo);
}

export default function* userSaga(){
    yield all([
        fork(watchFetch),
    ]);
}
