import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import EventsIndex from './components/events_index';
import reportWebVitals from './reportWebVitals';

import {Provider} from 'react-redux';
import reducer from './reducers';
import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const store = createStore(reducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
document.getElementById('root');

root.render(
  <Provider store= {store}>
    <EventsIndex />
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
