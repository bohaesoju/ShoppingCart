import { combineReducers } from 'redux';
import Stationery from './Stationeries';
import Tag from './Tags';
import Cart from './Cart';

export const rootReducer = combineReducers({
    Stationery,
    Tag,
    Cart
});

export type rootState = ReturnType<typeof rootReducer>
