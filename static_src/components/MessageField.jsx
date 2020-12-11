import React from "react";
import Message from './Message.jsx';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';


export default class MessageField extends React.Component {

    state = {
        messages: [
            { id: 0, name: 'User', text: 'message0' },
            { id: 1, name: 'User', text: 'message1' },
            { id: 2, name: 'User', text: 'message2' },
            { id: 3, name: 'User', text: 'message3' }]
        ,
        newMessage: ''
    };

    handleChange = e => this.setState({ newMessage: e.target.value });

    sendRobot = (message) => {
        const response = 'Я повторяю за тобой: ' + message;
        this.setState(
            { messages: [...this.state.messages, { id: this.state.messages.length + 1, name: 'Robot', text: response }] },
            () => {
                console.log("state updated. robot response!");
            }
        )
    }

    send = () => {
        event.preventDefault();
        this.setState(
            { messages: [...this.state.messages, { id: this.state.messages.length + 1, name: 'User', text: this.state.newMessage }] },
            () => {
                this.sendRobot(this.state.messages[this.state.messages.length - 1].text);
                console.log("state updated! User response");
            }
        );
        this.setState(
            { newMessage: '' }
        );
    }

    handleKeyUp = () => {
        if (event.keyCode === 13) { // Enter
            this.send()
        }
    };
 

    render() {
        return (
            <>
                <Message messages={this.state.messages} />
                <TextField
                //    fullWidth={ true }
                   hintText="Введите сообщение"
                   style={ { fontSize: '22px', width: '90%' } }
                   onChange={ this.handleChange }
                   value={ this.state.newMessage }
                   onKeyUp={ this.handleKeyUp }
               />
               <FloatingActionButton onClick={ this.send }>
                   <SendIcon />
               </FloatingActionButton>

            </>
        )
    }
}