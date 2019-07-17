import { all, fork } from 'redux-saga/effects';
import stationery from './Stationeries';
import tag from './Tags';

export default function* rootSaga() {
    yield all([
        fork(stationery),
        fork(tag),
    ]);
}
