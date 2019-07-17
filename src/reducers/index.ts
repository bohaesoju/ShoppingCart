import { combineReducers } from 'redux';
import Stationery from './Stationery';

export const rootReducer = combineReducers({
    Stationery,
});

export type rootState = ReturnType<typeof rootReducer>
