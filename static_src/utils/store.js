import { applyMiddleware, compose, createStore } from 'redux';
import middlewares from '../middlewares';
import initReducers from './../Reducers';


function initStore() {
   const innitialStore = {};

   return createStore(
       initReducers,
       innitialStore,
       compose(
           applyMiddleware(...middlewares),
       )
   );
}

export default initStore;
