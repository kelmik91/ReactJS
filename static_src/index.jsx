import React from 'react';
import ReactDOM from 'react-dom';
import MessageField from './components/MessageField.jsx'

const App = () => {
   return (
      <>
         <MessageField />
      </>
   )
};

ReactDOM.render(
   <App />,
   document.getElementById('root'),
);
