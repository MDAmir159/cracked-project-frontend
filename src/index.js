import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import history from './history'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from 'redux';
import allReducers from './redux/reducers';
import { Provider } from 'react-redux';
import { useDispatch } from 'react-redux';
import { LogIn, LogOut } from './redux/actions/LogStatus';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer"
import persistStore from "redux-persist/es/persistStore";
import {persistor} from './configureStore'
import store from './configureStore'
// import persistor from './configureStore';
// import store from './configureStore';

// const store = createStore({
//   loggedIn,
//   authorisedUserDetails
// })

// const store = createStore(
//   allReducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// console.log(store , persistor);

// const store =('./configureStore/store')

// const persistConfigure = {
//   key : 'root',
//   storage
// }

// const persistedReducer = persistReducer(persistConfigure , allReducers);
// const store = createStore(persistedReducer);
// const persistor = persistStore(store);

ReactDOM.render(
  // <Provider store = {store}>
  //   <App />
  // </Provider>,
  // document.getElementById('root')
  <Provider store = {store}>
    <PersistGate loading = {null} persistor = {persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
