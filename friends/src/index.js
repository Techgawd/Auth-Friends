import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers/index';
import thunk from 'redux-thunk';
import { axiosWithAuth } from './utils/axiosWithAuth';

const store = createStore(reducer, applyMiddleware(axiosWithAuth, thunk));

ReactDOM.render(<Provider store= {store}><Router><App /></Router></Provider>, document.getElementById('root'));
