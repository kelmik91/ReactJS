import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import middlewares from '../middlewares';
import initReducers from './../Reducers';

export const history = createBrowserHistory();

function initStore() {
   const innitialStore = {};

   return createStore(
       initReducers(history),
       innitialStore,
       compose(
           applyMiddleware(routerMiddleware(history), ...middlewares),
       )
   );
}

export default initStore;
