import { all, fork } from 'redux-saga/effects';
import info from './Stationery';

export default function* rootSaga() {
    yield all([
        fork(info),
    ]);
}
