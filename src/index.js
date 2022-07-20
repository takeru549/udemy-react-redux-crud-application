import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

import {Provider} from 'react-redux';
import reducer from './reducers';
import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter,Route, Routes} from 'react-router-dom';


import EventsIndex from './components/events_index';
import EventsNew from './components/events_new'

const store = createStore(reducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
document.getElementById('root');

root.render(
  <Provider store= {store}>
    <BrowserRouter>
    <Routes>
      <Route exact path="/events/new" element={<EventsNew/>} />
      <Route exact path="/" element={<EventsIndex/>} />
    </Routes>
       
      
    </BrowserRouter>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
