import React from 'react';

export default class Message extends React.Component {
    componentDidMount() {
        console.log("child did mount");
    }

    Peremeeee = (message) => {

        const name = message.message.name;
        const text = message.message.text;
        console.log(message.message.name);
        if (message.message.name == 'Robot') {
            return (
            <>
                <span>{text} :</span>
                <b>{name}</b>
            </>
            )
        } else {
            return (
            <>
                <b>{name}</b>
                <span>: {text}</span>
            </>
            )
        }
    }

    render() {
        return this.props.messages.map(messages => 
            <div key={messages.id} className={messages.name == 'Robot' ? 'divRobot' : ''}>
                <this.Peremeeee message={messages}/>
                {/* <b>{messages.name}</b>
                <span>: {messages.text}</span> */}
            </div>
            )
            ;
    }
}