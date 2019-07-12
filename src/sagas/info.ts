import { put, all, call, fork, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import {
    INFO_REQUEST,
    INFO_SUCCESS,
    INFO_FAILURE
} from "../reducers/Info";

function fetchAPI(args:any) {
    // return axios.get('http://localhost:9000/api/beers')
    return axios.get('https://jsonplaceholder.typicode.com/posts/1')
}

function* fetchInfo(action: any){
    try{
        const result = yield call(fetchAPI, action.data);
        yield put({
            type: INFO_SUCCESS,
            data: result.data,
        });
    } catch(e){
        console.error(e);
        yield put({
            type: INFO_FAILURE,
            message: e.message,
        });
    }
}

function* watchFetch(){
    yield takeEvery(INFO_REQUEST, fetchInfo);
}

export default function* userSaga(){
    yield all([
        fork(watchFetch),
    ]);
}
