import { combineReducers } from 'redux';
import Info from './Info';

export const rootReducer = combineReducers({
    Info,
});

export type rootState = ReturnType<typeof rootReducer>
