/**
 * Created by Tony on 2017/3/15.
 */
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import MainContainer from './components/mainContainer';
import './index.css';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <MainContainer />
    </Provider>,
    document.getElementById('root')
);