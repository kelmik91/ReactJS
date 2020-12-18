import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/style.css'
import Header from './components/Header.jsx';
import ChatList from './components/ChatList.jsx';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router.jsx'

const App = () => {
   return (
      <BrowserRouter>
         <Header />
         <Grid container>
            <Grid item xs={4}>
               <ChatList />
            </Grid>
            <Grid item xs={8}>
               <Router />
            </Grid>
         </Grid>
      </BrowserRouter>
   )
};

ReactDOM.render(
   <App />,
   document.getElementById('root'),
);
