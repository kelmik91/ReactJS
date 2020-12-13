import React from 'react';
import ReactDOM from 'react-dom';
import MessageField from './components/MessageField.jsx'
import '../styles/style.css'
import Header from './components/Header.jsx';
import ChatList from './components/ChatList.jsx';


const App = () => {
   return (
      <>
         <Header/>
         <ChatList/>
         <MessageField />
      </>
   )
};

ReactDOM.render(
   <App />,
   document.getElementById('root'),
);
