import { combineReducers } from 'redux';
import Stationery from './Stationeries';
import Tag from './Tags';

export const rootReducer = combineReducers({
    Stationery,
    Tag
});

export type rootState = ReturnType<typeof rootReducer>
