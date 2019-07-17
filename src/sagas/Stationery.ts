import { put, all, call, fork, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import {
    STATIONERY_REQUEST,
    STATIONERY_SUCCESS,
    STATIONERY_FAILURE
} from "../reducers/Stationery";

function fetchAPI(args:any) {
    return axios.get('http://localhost:3000/stationeries')
}

function* fetchInfo(action: any){
    try{
        const result = yield call(fetchAPI, action.data);
        yield put({
            type: STATIONERY_SUCCESS,
            data: result.data,
        });
    } catch(e){
        console.error(e);
        yield put({
            type: STATIONERY_FAILURE,
            message: e.message,
        });
    }
}

function* watchFetch(){
    yield takeEvery(STATIONERY_REQUEST, fetchInfo);
}

export default function* userSaga(){
    yield all([
        fork(watchFetch),
    ]);
}
