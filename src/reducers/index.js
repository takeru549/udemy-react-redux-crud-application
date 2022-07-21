import { combineReducers } from "redux";
import events from './events_index'
import {reducer as form } from 'redux-form';

export default combineReducers({ events, form })