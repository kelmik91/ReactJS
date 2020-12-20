import { combineReducers } from 'redux';
import chatReducer from './chatReducer.js';
import profileReducer from './profileReducer.js'


export default combineReducers({
    chatReducer,
    profileReducer,
});
