import React from 'react';
import ReactDOM from 'react-dom';
import MessageField from './components/MessageField.jsx'
import '../styles/style.css'
import Header from './components/Header.jsx';
import ChatList from './components/ChatList.jsx';
import Grid from '@material-ui/core/Grid';

const App = () => {
   return (
      <>
         <Header />
         <Grid container>
            <Grid item xs={4}>
               <ChatList />
            </Grid>
            <Grid item xs={8}>
               <MessageField />
            </Grid>
         </Grid>
      </>
   )
};

ReactDOM.render(
   <App />,
   document.getElementById('root'),
);
