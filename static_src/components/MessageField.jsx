import React from "react";
import Message from './Message.jsx';

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

    render() {
        return (
            <>
                <Message messages={this.state.messages} />
                <form>
                    <label>
                        <input id='input' type="text" value={this.state.newMessage} onChange={this.handleChange} />
                    </label>
                    <button type="submit" onClick={this.send}>Add message</button>
                </form>
            </>
        )
    }
}