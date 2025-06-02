//store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import orderReducer from './order/orderSlice';
import authenticationReducer from './authentication/authenticationSlice';
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  order: orderReducer,
  authentication: authenticationReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({

    reducer: persistedReducer,
    devTools: true,

});

export const persistor = persistStore(store);