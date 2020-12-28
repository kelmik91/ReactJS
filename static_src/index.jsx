import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/style.css'
import Header from './components/Header.jsx';
import ChatList from './components/ChatList.jsx';
import Grid from '@material-ui/core/Grid';
import Router from './components/Router.jsx';
import { Provider } from 'react-redux';
import initStore, { history } from './utils/store';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = initStore();

const App = () => {
   return (
      <Provider store={store}>
         <PersistGate loading={ null } persistor={ persistor }>
            <ConnectedRouter history={history}>
               <Header />
               <Grid container>
                  <Grid item xs={4}>
                     <ChatList />
                  </Grid>
                  <Grid item xs={8}>
                     <Router />
                  </Grid>
               </Grid>
            </ConnectedRouter>
         </PersistGate>
      </Provider>
   )
};

ReactDOM.render(
   <App />,
   document.getElementById('root'),
);
