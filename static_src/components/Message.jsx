import React from 'react';

export default class Message extends React.Component {
    rendMessage = (msg) => {
        const name = msg.name;
        const text = msg.text;
        
        if (name === 'RobotMiddleware') {
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
        return this.props.messages.map(msg =>
            <div key={msg.messageId} className={msg.name === 'RobotMiddleware' ? 'divRobot' : ''}>
                {this.rendMessage(msg)}
            </div>
        );
    }
}
