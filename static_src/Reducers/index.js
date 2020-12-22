import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import chatReducer from './chatReducer.js';
import profileReducer from './profileReducer.js'


export default (history) => combineReducers({
    router: connectRouter(history), 
    chatReducer,
    profileReducer,
});
