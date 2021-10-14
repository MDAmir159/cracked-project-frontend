import { createStore } from "redux";
import persistReducer from "redux-persist/es/persistReducer"
import persistStore from "redux-persist/es/persistStore";
import allReducers from "./redux/reducers"
import storage from 'redux-persist/lib/storage'
const persistConfigure = {
    key : 'root',
    storage
}

const persistedReducer = persistReducer(persistConfigure , allReducers);

const store = createStore(persistedReducer);

export const persistor = persistStore(store);

export default store;

