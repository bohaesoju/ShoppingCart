import { put, all, call, fork, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import {
    PURCHASE_REQUEST,
    PURCHASE_SUCCESS,
    PURCHASE_FAILURE
} from "../reducers/Cart";

function fetchAPI(postData:any) {
    return axios.post('http://localhost:3000/purchase', postData, {
        withCredentials: true,
    })
}

function* fetchInfo(action: any){
    try{
        const result = yield call(fetchAPI, action.data);
        yield put({
            type: PURCHASE_SUCCESS,
            data: result.data,
        });
    } catch(e){
        console.error(e);
        yield put({
            type: PURCHASE_FAILURE,
            message: e.message,
        });
    }
}

function* watchFetch(){
    yield takeLatest(PURCHASE_REQUEST, fetchInfo);
}

export default function* userSaga(){
    yield all([
        fork(watchFetch),
    ]);
}
