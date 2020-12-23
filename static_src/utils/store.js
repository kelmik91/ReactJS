import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import middlewares from '../middlewares';
import initReducers from './../Reducers';

import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'; 
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';

export const history = createBrowserHistory();

const persistConfig = {
    key: 'geekmessanger',
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['chatReducer'],
};

function initStore() {
   const innitialStore = {};

   const store = createStore(
       persistReducer(persistConfig, initReducers(history)),
       innitialStore,
       compose(
           applyMiddleware(routerMiddleware(history), ...middlewares),
       )
   );

   const persistor = persistStore(store);
   return { store, persistor};
}

export default initStore;
