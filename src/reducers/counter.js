import * as types from '../actions/ActionTypes';

const initialState = {
    number: 0
}

const counter = (state=initialState, actions) => {
    switch (actions.type) {
        case types.INCREMENT:
            return {
                number: state.number + 1
            }
        case types.DECREMENT:
            return {
                number: state.number - 1
            }
        default: 
            return state;
    }
}

export default counter;