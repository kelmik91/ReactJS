import React from 'react';
import ReactDOM from 'react-dom';

console.log('It works!');

import { script } from './script';
script();

console.log('А это index.js');

let messages = ['Привет', 'Как дела?', 'Hello world!'];

const MessageComponent = (props) => <div>{props.text}</div>;

const MessageField = (props) => { 
   return props.messages.map(message => <MessageComponent text={message} />);
};

const Button = () => <button onClick={Message}>Add message</button>

const Message = () => {
   messages.push('New message!');
   console.log(messages);
   Render();
}

const App = () => {
   return (
      <>
         <Button />
         <MessageField messages={messages} />
         
      </>
   )
};

const Render = () => {
   ReactDOM.render(
      <App />,
      document.getElementById('root'),
   );
}

Render();