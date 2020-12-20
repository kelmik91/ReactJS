import { createStore } from 'redux';
import initReducers from './../Reducers';


function initStore() {
   const innitialStore = {};

   return createStore(
       initReducers,
       innitialStore,
   );
}

export default initStore;
