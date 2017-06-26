/**
 * Created by andrey.manaenko on 06.02.2017.
 */
import React from 'react'
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware'
import reducers from './reducers/index';


var initialState = {
    AllDisks: [],
    selectedDisk: 0,
    activeDisk: null
        

};
const middleware = applyMiddleware(promise(), thunk, logger());

var store = createStore(reducers, initialState, middleware);

export default store;