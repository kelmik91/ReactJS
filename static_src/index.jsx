import React from 'react';
import ReactDOM from 'react-dom';
import MessageField from './components/MessageField.jsx'
import '../styles/style.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/Header.jsx';
import ChatList from './components/ChatList.jsx';


const App = () => {
   return (
      <MuiThemeProvider>
         <Header/>
         <ChatList/>
         <MessageField />
      </MuiThemeProvider>
   )
};

ReactDOM.render(
   <App />,
   document.getElementById('root'),
);
