import React from "react";
import Message from './Message.jsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default class MessageField extends React.Component {
    classes = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
        button: {
            margin: theme.spacing(1),
          },
    }));

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
                <p>Заглушка в MessageField</p>

                <TextField
                    // id="outlined-basic" 
                    label="Message"
                    variant="outlined"
                    style={{ fontSize: '22px' }}
                    fullWidth={true}
                    onChange={this.handleChange}
                    value={this.state.newMessage}
                    onKeyUp={this.handleKeyUp} />

                <Message messages={this.state.messages} />
                {/* <TextField
                className={this.root}
                //    
                   hintText="Введите сообщение"
                   
               /> */}
                <Button
                    variant="contained"
                    color="primary"
                    className={this.classes.button}
                    onClick={this.send}>
                    Send
                </Button>

            </>
        )
    }
}