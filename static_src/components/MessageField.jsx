import React from "react";
import Message from './Message.jsx';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

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
            {
                messages: [...this.state.messages, { id: this.state.messages.length + 1, name: 'User', text: this.state.newMessage }],
                newMessage: ''
            },
            () => {
                this.sendRobot(this.state.messages[this.state.messages.length - 1].text);
                console.log("state updated! User response");
            }
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
                <h2>Chat 0</h2>
                <Message messages={this.state.messages} />
                <hr />
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    justify="space-between"
                    alignItems="flex-end"
                >
                    <Grid item xs={10}>
                        <TextField
                            label="Message"
                            variant="outlined"
                            style={{ fontSize: '22px' }}
                            fullWidth={true}
                            onChange={this.handleChange}
                            value={this.state.newMessage}
                            onKeyUp={this.handleKeyUp} />
                    </Grid>
                    <Grid item xs={2}>
                        <Button
                            style={{
                                fontSize: '24px'
                            }}
                            variant="contained"
                            color="primary"
                            onClick={this.send}
                        >
                            Send
                        </Button>
                    </Grid>
                </Grid>
            </>
        )
    }
}
