import React from 'react';

export default class Message extends React.Component {
    componentDidMount() {
        console.log("child did mount");
    }

    componentDidUpdate() {
        console.log("child did update");
        return alert('Message send!');
    }

    render() {
        return this.props.messages.map(messages => <p key={messages.id}> {messages.text} </p>);
    }
}