import {READ_EVENTS} from '../actions';
import _ from 'lodash';

// eslint-disable-next-line
export default (events= {}, action) => {
    switch (action.type) {

        case READ_EVENTS:

          return _.mapKeys(action.responce.data, 'id');

          default:
            return events;
    }
}