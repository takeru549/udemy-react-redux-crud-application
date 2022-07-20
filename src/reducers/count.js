import {INCREMENT, DECREMENT } from '../actions';
// eslint-disable-next-line
const initialState = {value: 0};

// eslint-disable-next-line
export default (state= initialState, action) => {
    switch (action.type) {

        case INCREMENT:
            return { value: state.value + 1};

        case DECREMENT:
            return { value: state.value - 1};
        
        default:
            return state;
    }
}