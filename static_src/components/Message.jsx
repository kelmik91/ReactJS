import React from 'react';

export default class Message extends React.Component {
    componentDidMount() {
        console.log("child did mount");
    }

    rendMessage = (message) => {
        const name = message.message.name;
        const text = message.message.text;
        
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
                <this.rendMessage message={messages} />
            </div>
        )
            ;
    }
}