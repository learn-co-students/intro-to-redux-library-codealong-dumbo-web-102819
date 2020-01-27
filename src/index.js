// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'; /* import createStore from redux */
import { Provider } from 'react-redux'; /* import Provider from react redux */ 

import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import App from './App';
import './index.css';

//redux createStore method; pass in the reducer
const store = createStore(
    shoppingListItemReducer,
    //reduxe devtools extension
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    //include provider to wrap around the top level component, App
    //store passed into the Provider
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
