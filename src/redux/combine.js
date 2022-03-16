import { combineReducers } from 'redux';

import cartReducer from './reducer/ProductReducer';

export const rootReducer = combineReducers(
    {
        cartReducer : cartReducer
    }
)