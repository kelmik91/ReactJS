import React from "react";
import Message from './Message.jsx';

export default class MessageField extends React.Component {

    state = {
        messages: [{ id: 0, text: 'message0' },
        { id: 1, text: 'message1' },
        { id: 2, text: 'message2' },
        { id: 3, text: 'message3' }],
        newMessage: ''
    };

    handleChange = e => this.setState({ newMessage: e.target.value });

    send = () => {
        e => this.setState({ newMessage: e.target.value })
        this.setState(
            { messages: [...this.state.messages, { id: this.state.messages.length + 1, text: this.state.newMessage }] },
            () => {
                console.log("state updated!");
            }
        );
    }

    render() {
        return (
            <>
            <Message messages={this.state.messages} />
                <form>
                    <label>
                        <input type="text" value={this.state.newMessage} onChange={this.handleChange} />
                    </label>
                    <button type="submit" onClick={this.send}>Add message</button>
                </form>
            </>
        )
    }
}