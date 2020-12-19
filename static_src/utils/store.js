import { createStore } from 'redux';
import initReducers from './../reducers';


function initStore() {
   const innitialStore = {};

   return createStore(
       initReducers,
       innitialStore,
   );
}

export default initStore;
