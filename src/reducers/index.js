import counter from './counter';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    counterData: counter
});

export default reducers;

