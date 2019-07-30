import { all, fork } from 'redux-saga/effects';
import stationery from './Stationeries';
import tag from './Tags';
import cart from './Cart';

export default function* rootSaga() {
    yield all([
        fork(stationery),
        fork(tag),
        fork(cart),
    ]);
}
